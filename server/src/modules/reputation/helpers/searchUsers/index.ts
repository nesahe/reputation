import { IReputationDto } from "../../../../types"

export const searchUsers = (users: IReputationDto[], str: string): IReputationDto[] => {
    return users.filter(user => user.login.includes(str));
}