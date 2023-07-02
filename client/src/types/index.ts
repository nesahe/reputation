export interface IUser {
    login: string,
    id: string,
    reputation: number,
    gender: string
}

export interface IProfile {
    login: string,
    gender: string,
    isActivated: boolean,
    _id: string,
    reputation: number,
    lastVoting: string
}