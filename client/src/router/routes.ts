import LoginPage from '../pages/LoginPage'
import RegistrationPage from '../pages/RegistrationPage'
import HomePage from '../pages/HomePage'
import NavigateToLoginPage from '../pages/NavigateToLoginPage'

import ErrorPage from '../pages/ErrorPage'

import { ItemRoute } from '../types'

export const privateRoutesArr: ItemRoute[] = [
    {
        path: '/',
        Component: HomePage
    },
    {
        path: '*',
        Component: ErrorPage
    }
]

export const publicRoutesArr: ItemRoute[] = [
    {
        path: '/',
        Component: NavigateToLoginPage
    },
    {
        path: '/login',
        Component: LoginPage
    },
    {
        path: '/registration',
        Component: RegistrationPage
    },
    {
        path: '*',
        Component: ErrorPage
    }
]