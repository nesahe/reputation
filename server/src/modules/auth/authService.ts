import User from "../../model/User";

import bcrypt from 'bcrypt';
import { v4 } from 'uuid'

import mailService from "../mail/mailService";
import tokenService from "../token/tokenService";
import UserDto from "./userDto";

class Service {

    async registration(email: string, password: string, gender: string) {
        const candidate = await User.findOne({ login: email });

        if (candidate) {
            throw new Error(`A user with ${email} address already exists`);
        }

        const hashPassword = await bcrypt.hash(password, 7);

        const activationLink = v4()

        const user = new User({ login: email, password: hashPassword, gender, activationLink });

        await user.save();

        await mailService.sendActivationLink(email, activationLink);

        const userDto = new UserDto(user);

        const { accessToken, refreshToken } = tokenService.generateTokens({ ...userDto });

        await tokenService.saveToken(userDto.id, refreshToken);

        return {
            accessToken,
            refreshToken,
            user: userDto
        }
    }



}

export default new Service();