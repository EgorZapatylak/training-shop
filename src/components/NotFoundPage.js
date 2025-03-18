import React from 'react';
import ErrorPage from './ErrorPage';

const NotFoundPage = () => {
    return (
        <ErrorPage
            errorCode="404"
            errorMessage="Скоро появится =)"
        />
    );
};

export default NotFoundPage;