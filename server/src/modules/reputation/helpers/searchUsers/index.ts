import { IReputationDto } from "../../../../types"

export const searchUsers = (users: IReputationDto[], str: string): IReputationDto[] => {
    const searchedUsers = users.filter(user => user.login.includes(str));
    return searchedUsers
}