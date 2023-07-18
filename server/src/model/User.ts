import { Schema, model } from "mongoose";

import { IUser } from '../types';

const user = new Schema<IUser>({
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    isActivated: { type: Boolean, default: false },
    activationLink: { type: String },
    reputation: { type: Number, default: 0 },
    lastVoting: { type: String, default: '' },
    likedUsers: [{ type: String }],
    isLiked: { type: Boolean, default: false }
})

export default model<IUser>('User', user);