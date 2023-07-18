import { useState, useEffect } from 'react';
import styles from './index.module.scss';

import AuthButton from './components/AuthButton';
import Select, { SingleValue } from 'react-select';
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { useFetching } from '../../hooks/useFetching';

import { useForm, SubmitHandler } from 'react-hook-form';

import { registrationUser } from './api/registrationUser';

import { checkEmailAuth } from './helpers/checkEmailAuth';

import { ISelectOptionsItem } from '../../types';

import './index.scss';

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

    const { register, handleSubmit } = useForm<IRegistrationForm>();

    const navigate = useNavigate();

    const [message, setMessage] = useState<string>('');

    const [gender, setGender] = useState<SingleValue<ISelectOptionsItem>>();

    const [formRegistration, setFormRegistration] = useState<IRegistrationForm>({ login: '', password: '' });

    const [registrationFetch, isRegistrationLoading] = useFetching(async () => {
        if (gender) {
            const { isError, message } = await registrationUser({ ...formRegistration, gender: gender.value });
            isError
                ? setMessage(message)
                : navigate('/login')
        }
    })

    const onSubmit: SubmitHandler<IRegistrationForm> = data => {
        const validationEmailResult = checkEmailAuth(data.login);

        if (data.password.length < 8) {
            alert(`Password can't be smaller than 8 symbols`);
            return
        }

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
                <h4 className={styles.root__title}>Registration</h4>
                <div className={styles.root__inputs}>
                    <input required {...register('login')} placeholder='Email' className={styles.root__input} type="text" />
                    <input required {...register('password')} placeholder='Password' className={styles.root__input} type="password" />
                </div>
                <Select placeholder="Gender" value={gender} onChange={changeSelect} className={styles.root__select} options={selectOptions} />
                <AuthButton isLoading={isRegistrationLoading}>Send</AuthButton>
                {!isRegistrationLoading && <Link className={styles.root__link} to="/login">Login</Link>}
            </form>
        </div>
    );
};

export default Registration;