import User from "../../model/User";

import bcrypt from 'bcrypt';
import { v4 } from 'uuid'

import mailService from "../mail/mailService";
import tokenService from "../token/tokenService";
import UserDto from "./userDto";

import ProfileDto from "./profileDto";

import { checkEmailAuth } from "./helpers/checkEmailAuth";
import { checkGender } from "./helpers/checkGender";

import ApiError from "../../exceptions/ApiError";

class Service {

    async registration(email: string, password: string, gender: string) {
        const candidate = await User.findOne({ login: email });

        const resultValidationEmail = checkEmailAuth(email);
        const resultValidationGender = checkGender(gender);

        if (!resultValidationGender) {
            throw ApiError.badRequest('Please user the correct gender');
        }

        if (!resultValidationEmail) {
            throw ApiError.badRequest('Please use the correct email address')
        }

        if (password.length < 8) {
            throw ApiError.badRequest(`Password can't be smaller than 8 symbols`)
        }

        if (candidate) {
            throw ApiError.badRequest(`A user with ${email} address already exists`);
        }

        const hashPassword = await bcrypt.hash(password, 7);

        const activationLink = v4();

        const user = new User({ login: email, password: hashPassword, gender, activationLink });

        await user.save();

        await mailService.sendActivationLink(email, activationLink);

        const userDto = new UserDto(user);

        if (!userDto.id) {
            throw new ApiError(500, 'Unexpected error');
        }
    }

    async login(login: string, password: string) {
        const candidate = await User.findOne({ login });

        if (!candidate) {
            throw ApiError.badRequest(`A user with ${login} address not found`);
        }

        const identifyPassword = bcrypt.compareSync(password, candidate.password);

        if (!identifyPassword) {
            throw ApiError.badRequest('Invalid password')
        }

        const { accessToken, refreshToken } = tokenService.generateTokens({ user: candidate._id });

        await tokenService.saveToken(candidate._id, refreshToken);

        return { accessToken, refreshToken };
    }

    async activateAccount(activationLink: string) {

        const candidate = await User.findOne({ activationLink });

        if (!candidate) {
            throw ApiError.badRequest('Activation error. User not found');
        }

        candidate.isActivated = true;
        candidate.activationLink = '';

        return await candidate.save();
    }

    async getProfile(id: string) {
        if (id.length === 0) {
            throw ApiError.badRequest('Error getting userId');
        }

        const user = await User.findById(id);

        if (!user) {
            throw ApiError.badRequest('User not found')
        }

        const profile = new ProfileDto(user);

        return profile;

    }

    async logout(refreshToken: string) {
        const result = await tokenService.removeRefreshToken(refreshToken);
        return result
    }

    async refresh(refToken: string) {
        const userId = tokenService.validateRefreshToken(refToken);
        const tokenFromDb = await tokenService.findRefreshToken(refToken);

        if (!userId || !tokenFromDb) {
            throw ApiError.unAuthorizedError();
        }

        const user = await User.findById(userId);

        if (!user) {
            throw ApiError.badRequest('User not found');
        }

        const userDto = new ProfileDto(user);

        const { refreshToken, accessToken } = tokenService.generateTokens({ user: userId });

        await tokenService.saveToken(userId, refreshToken);

        return { accessToken, refreshToken, user: userDto };
    }

}

export default new Service();