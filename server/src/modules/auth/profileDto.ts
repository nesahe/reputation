import { IUser } from "../../types";

export default class ProfileDto {
    login = '';
    gender = '';
    isActivated = false;
    _id = '';
    reputation = 0;
    lastVoting = '';

    constructor(model: IUser) {
        this.login = model.login;
        this.gender = model.gender;
        this.isActivated = model.isActivated;
        this._id = model._id;
        this.reputation = model.reputation;
        this.lastVoting = model.lastVoting;
    }
}