import { FC } from 'react';
import { Snackbar, Alert, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface ErrorMessageProps {
    message: string,
    setMessage: (message: string) => void
}


const ErrorMessage: FC<ErrorMessageProps> = ({ message, setMessage }) => {

    return (
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
    );
};

export default ErrorMessage;