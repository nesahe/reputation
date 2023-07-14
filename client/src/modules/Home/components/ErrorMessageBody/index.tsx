import React, { FC, useState } from 'react';
import ErrorMessage from '../ErrorMessage';


interface ErrorMessageBodyProps {
    message: string
}

const ErrorMessageBody: FC<ErrorMessageBodyProps> = ({ message }) => {

    const [errorMessage, setErrorMessage] = useState<string>(message);

    return <ErrorMessage message={errorMessage} setMessage={setErrorMessage} />
};

export default ErrorMessageBody;