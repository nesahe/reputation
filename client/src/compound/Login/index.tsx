import React, { useEffect, useState, useRef } from 'react';
import styles from './index.module.scss';

import AuthButton from '../../components/ui/AuthButton';
import { Link } from 'react-router-dom';
import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { useFetching } from '../../hooks/useFetching';

import { useForm, SubmitHandler } from 'react-hook-form'

import { loginUser } from './api/loginUser';

interface ILoginForm {
    login: string,
    password: string
}

const Login = () => {

    const { register, handleSubmit } = useForm<ILoginForm>();

    const [message, setMessage] = useState<string>('');

    const isMounted = useRef(false);

    const [loginForm, setLoginForm] = useState<ILoginForm>({ login: '', password: '' });

    const [loginFetch, isLoginLoading, loginError] = useFetching(async () => {
        const { isError, message, accessToken } = await loginUser(loginForm);
        if (isError) {
            setMessage(message);
        } else {
            localStorage.setItem('jwt', accessToken);
            window.location.reload();
        }

    })

    const onSubmit: SubmitHandler<ILoginForm> = data => {
        setLoginForm(data)
    }

    useEffect(() => {
        isMounted.current && loginFetch();
    }, [loginForm])

    useEffect(() => {
        isMounted.current = true
    }, [])

    return (
        <div className={styles.root}>
            <Snackbar open={message.length > 0}>
                <Alert
                    severity="error"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setMessage('');
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                    {message}
                </Alert>
            </Snackbar>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.root__form}>
                <h4 className={styles.root__title}>Login</h4>
                <div className={styles.root__inputs}>
                    <input required {...register('login')} placeholder='Login' className={styles.root__input} type="text" />
                    <input required {...register('password')} placeholder='Password' className={styles.root__input} type="password" />
                </div>
                <AuthButton isLoading={isLoginLoading}>Send</AuthButton>
                <Link className={styles.root__link} to="/registration">Registration</Link>
            </form>
        </div>
    );
};

export default Login;