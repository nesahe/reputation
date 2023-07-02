import { Schema } from "mongoose"
import { Request } from "express"

export interface IUser {
    login: string,
    password: string,
    gender: string,
    isActivated: boolean,
    activationLink: string
    _id: string
    reputation: number,
    lastVoting: string
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
    reputation: number
}

export interface IRequestAuth extends Request {
    userId: string
}