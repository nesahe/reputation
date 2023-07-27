import { IReputationDto } from "../../../../types"

export const sortUsers = (users: IReputationDto[], sort: string): IReputationDto[] => {
    const sortedUsers = users;

    if (sort) {
        sort === 'reputation'
            ? sortedUsers.sort((a, b) => b.reputation - a.reputation)
            : sortedUsers.sort((a, b) => a.login.localeCompare(b.login));
    }

    return sortedUsers
}