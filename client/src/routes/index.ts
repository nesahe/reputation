import { FC } from 'react'

import LoginPage from '../pages/LoginPage'
import RegistrationPage from '../pages/RegistrationPage'
import HomePage from '../pages/HomePage'


type ItemRoutes = {
    path: string,
    Component: FC
}

export const privateRoutesArr: ItemRoutes[] = [
    {
        path: '/',
        Component: HomePage
    }
]

export const publicRoutesArr: ItemRoutes[] = [
    {
        path: '/',
        Component: LoginPage
    },
    {
        path: '/login',
        Component: LoginPage
    },
    {
        path: '/registration',
        Component: RegistrationPage
    }
]