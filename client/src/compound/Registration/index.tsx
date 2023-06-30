import React, { useState } from 'react';
import styles from './index.module.scss';

import AuthButton from '../../components/ui/AuthButton';
import Select, { SingleValue } from 'react-select';

import { useForm, SubmitHandler } from 'react-hook-form';

import { registrationUser } from './api/registrationUser';

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

    const { register, handleSubmit } = useForm<IRegistrationForm>();

    const [gender, setGender] = useState<SingleValue<ISelectOptionsItem>>();

    const onSubmit: SubmitHandler<IRegistrationForm> = (data) => {
        gender ? registrationUser({ ...data, gender: gender?.value }) : alert('Choose your gender')
    }

    const changeSelect = (gender: SingleValue<ISelectOptionsItem>) => {
        setGender(gender);
    }

    return (
        <div className={styles.root}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.root__form}>
                <h4 className={styles.root__title}>Registration</h4>
                <div className={styles.root__inputs}>
                    <input required {...register('login')} placeholder='Login' className={styles.root__input} type="text" />
                    <input required {...register('password')} placeholder='Password' className={styles.root__input} type="text" />
                </div>
                <Select placeholder="Gender" value={gender} onChange={changeSelect} className={styles.root__select} options={selectOptions} />
                <AuthButton>Send</AuthButton>
            </form>
        </div>
    );
};

export default Registration;