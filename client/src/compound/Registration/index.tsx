import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';

import AuthButton from '../../components/ui/AuthButton';
import Select, { SingleValue } from 'react-select';
import { Link } from 'react-router-dom';
import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { useFetching } from '../../hooks/useFetching';

import { useForm, SubmitHandler } from 'react-hook-form';

import { registrationUser } from './api/registrationUser';

import { checkEmailAuth } from '../../helpers/checkEmailAuth';

import './index.scss';

interface ISelectOptionsItem {
    label: string,
    value: string
}

const selectOptions: ISelectOptionsItem[] = [
    {
        label: "Male",
        value: "Male"
    },
    {
        label: "Female",
        value: "Female"
    },
    {
        label: "Middle",
        value: "Middle"
    }
]


interface IRegistrationForm {
    login: string,
    password: string
}

const Registration = () => {

    const { register, handleSubmit, reset } = useForm<IRegistrationForm>();

    const [error, setError] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');

    const [gender, setGender] = useState<SingleValue<ISelectOptionsItem>>();

    const [formRegistration, setFormRegistration] = useState<IRegistrationForm>({ login: '', password: '' });

    const [registrationFetch, isRegistrationLoading, registrationError] = useFetching(async () => {
        if (gender) {
            const { isError, message } = await registrationUser({ ...formRegistration, gender: gender.value });
            setError(isError);
            setMessage(message);

            if (!isError) {
                reset();
            }
        }
    })

    const onSubmit: SubmitHandler<IRegistrationForm> = data => {
        const validationEmailResult = checkEmailAuth(data.login);

        validationEmailResult && gender
            ? setFormRegistration(data)
            : alert(!gender ? 'Choose your gender' : 'Choose correct email address');
    }

    const changeSelect = (gender: SingleValue<ISelectOptionsItem>) => {
        setGender(gender);
    }


    useEffect(() => {
        registrationFetch();
    }, [formRegistration])

    return (
        <div className={styles.root}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.root__form}>
                <h4 className={styles.root__title}>Registration</h4>
                <div className={styles.root__inputs}>
                    <input required {...register('login')} placeholder='Email' className={styles.root__input} type="text" />
                    <input required {...register('password')} placeholder='Password' className={styles.root__input} type="text" />
                </div>
                <Snackbar open={message.length > 0}>
                    <Alert
                        severity={error ? "error" : "success"}
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
                <Select placeholder="Gender" value={gender} onChange={changeSelect} className={styles.root__select} options={selectOptions} />
                <AuthButton isLoading={isRegistrationLoading}>Send</AuthButton>
                {!isRegistrationLoading && <Link className={styles.root__link} to="/login">Login</Link>}
            </form>
        </div>
    );
};

export default Registration;