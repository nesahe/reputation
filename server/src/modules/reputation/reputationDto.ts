import { IUser } from "../../types";

export default class ReputationDto {
    login = '';
    id = '';
    gender = '';
    reputation = 0;
    isLiked = false;

    constructor(model: IUser) {
        this.login = model.login;
        this.id = model._id;
        this.gender = model.gender;
        this.reputation = model.reputation;
        this.isLiked = model.isLiked;
    }
}