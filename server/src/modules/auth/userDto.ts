import { IUser } from "../../types";


export default class UserDto {
    email = '';
    id = '';
    isActivated = false;

    constructor(model: IUser) {
        this.email = model.login;
        this.id = model._id;
        this.isActivated = model.isActivated;
    }
}