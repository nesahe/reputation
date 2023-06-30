import { Schema, model } from "mongoose";

import { IUser } from '../types';

const user = new Schema<IUser>({
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    isActivated: { type: Boolean, default: false },
    activationLink: { type: String }
})

export default model<IUser>('User', user);