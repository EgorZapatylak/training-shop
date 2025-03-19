import React from 'react';

const ErrorPage = ({ errorCode, errorMessage }) => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>{errorCode}</h1>
            <p style={styles.message}>{errorMessage}</p>
            <a href="/" style={styles.link}>Вернуться на главную</a>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f8f9fa',
        color: '#343a40',
        textAlign: 'center',
        width: '380px',
    },
    header: {
        fontSize: '6rem',
        margin: '0',
    },
    message: {
        fontSize: '1.5rem',
        margin: '10px 0',
    },
    link: {
        fontSize: '1rem',
        color: '#007bff',
        textDecoration: 'none',
    },
};

export default ErrorPage;