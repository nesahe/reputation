import { FC } from 'react'

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

export interface ItemRoute {
    path: string,
    Component: FC
}

export interface ISelectOptionsItem {
    label: string,
    value: string
}