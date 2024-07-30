// Notification.js
import React from 'react';

const notificationStyles = {
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '10px 20px',
    color: '#fff',
    borderRadius: '5px',
    zIndex: 1000,
    opacity: 1,
    transition: 'opacity 0.5s ease-in-out'
};


const successStyles = {
    backgroundColor: 'green'
};

const errorStyles = {
    backgroundColor: 'red'
};

const hiddenStyles = {
    opacity: 0
};

const Notification = ({ message, type, visible }) => {
    if (!message) return null;

    const styles = {
        ...notificationStyles,
        ...(type === 'success' ? successStyles : errorStyles),
        ...(visible ? {} : hiddenStyles)
    };

    return (
        <div style={styles}>
            {message}
        </div>
    );
};

export default Notification;
