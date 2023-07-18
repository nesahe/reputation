import { Schema } from "mongoose"

declare global {
    namespace Express {
        interface Request {
            userId: string
        }
    }
}

export interface IUser {
    login: string,
    password: string,
    gender: string,
    isActivated: boolean,
    activationLink: string
    _id: string
    reputation: number,
    lastVoting: string,
    likedUsers: string[],
    isLiked: boolean
}

export interface IToken {
    user: Schema.Types.ObjectId,
    refreshToken: string
}

export interface IProfileDto extends Omit<IUser, 'activationLink' | 'password'> { }

export interface IReputationDto {
    login: string,
    id: string,
    gender: string,
    reputation: number,
    isLiked: boolean
}