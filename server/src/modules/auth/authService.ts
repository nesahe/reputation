import User from "../../model/User";

import bcrypt from 'bcrypt';
import { v4 } from 'uuid'

import mailService from "../mail/mailService";
import tokenService from "../token/tokenService";
import UserDto from "./userDto";

import { checkEmailAuth } from "./helpers/checkEmailAuth";

class Service {

    async registration(email: string, password: string, gender: string) {
        const candidate = await User.findOne({ login: email });

        const resultValidationEmail = checkEmailAuth(email);

        if (!resultValidationEmail) {
            throw new Error('Please use the correct email address')
        }

        if (password.length < 8) {
            throw new Error(`Password can't be smaller than 8 symbols`)
        }

        if (candidate) {
            throw new Error(`A user with ${email} address already exists`);
        }

        const hashPassword = await bcrypt.hash(password, 7);

        const activationLink = v4();

        const user = new User({ login: email, password: hashPassword, gender, activationLink });

        await user.save();

        await mailService.sendActivationLink(email, activationLink);

        const userDto = new UserDto(user);

        if (!userDto.id) {
            throw new Error('Unexpected error')
        }
    }

    async login(login: string, password: string) {
        const candidate = await User.findOne({ login });

        if (!candidate) {
            throw new Error(`A user with ${login} address not found`);
        }

        const identifyPassword = bcrypt.compareSync(password, candidate.password);

        if (!identifyPassword) {
            throw new Error('Invalid password')
        }

        const userDto = new UserDto(candidate);

        const { accessToken, refreshToken } = tokenService.generateTokens({ ...userDto });

        await tokenService.saveToken(candidate._id, refreshToken);

        return { accessToken, refreshToken, user: userDto };
    }

    async activateAccount(activationLink: string) {

        const candidate = await User.findOne({ activationLink });

        if (!candidate) {
            throw new Error('Activation error. User not found');
        }

        candidate.isActivated = true;
        candidate.activationLink = '';

        return await candidate.save();
    }

}

export default new Service();