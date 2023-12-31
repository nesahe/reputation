import { IUser } from "../../types";


export default class UserDto {
    login = '';
    id = '';
    isActivated = false;
    reputation = 0;
    lastVoting = ''

    constructor(model: IUser) {
        this.login = model.login;
        this.id = model._id;
        this.isActivated = model.isActivated;
        this.reputation = model.reputation;
        this.lastVoting = model.lastVoting
    }
}