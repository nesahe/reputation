import User from "../../model/User";

import bcrypt from 'bcrypt';
import { v4 } from 'uuid'

import mailService from "../mail/mailService";
import tokenService from "../token/tokenService";
import UserDto from "./userDto";

class Service {

    async registration(email: string, password: string, gender: string) {
        const candidate = await User.findOne({ email });

        if (candidate) {
            throw new Error(`a user with ${email} address already exists`);
        }

        const hashPassword = await bcrypt.hash(password, 7);

        const activationLink = v4()

        const user = new User({ login: email, password: hashPassword, gender, activationLink });

        await mailService.sendActivationLink(email, activationLink);

        const { accessToken, refreshToken } = tokenService.generateTokens(email);

        const userDto = new UserDto(user);

    }

}

export default new Service();