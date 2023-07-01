import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';

import AuthButton from '../../components/ui/AuthButton';
import { Link } from 'react-router-dom';

import { useFetching } from '../../hooks/useFetching';

import { useForm, SubmitHandler } from 'react-hook-form'

import { checkEmailAuth } from '../../helpers/checkEmailAuth';

import { loginUser } from './api/loginUser';

interface ILoginForm {
    login: string,
    password: string
}

const Login = () => {

    const { register, handleSubmit } = useForm<ILoginForm>();

    const [loginForm, setLoginForm] = useState<ILoginForm>();

    const [loginFetch, isLoginLoading, loginError] = useFetching(async () => {

    })

    const onSubmit: SubmitHandler<ILoginForm> = data => {
        const validationEmailResult = checkEmailAuth(data.login);
        validationEmailResult ? loginUser(data) : alert('Choose correct email address')
    }

    useEffect(() => {
        loginFetch();
    }, [loginForm])

    return (
        <div className={styles.root}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.root__form}>
                <h4 className={styles.root__title}>Login</h4>
                <div className={styles.root__inputs}>
                    <input required {...register('login')} placeholder='Login' className={styles.root__input} type="text" />
                    <input required {...register('password')} placeholder='Password' className={styles.root__input} type="text" />
                </div>
                <AuthButton isLoading={true}>Send</AuthButton>
                <Link className={styles.root__link} to="/registration">Registration</Link>
            </form>
        </div>
    );
};

export default Login;