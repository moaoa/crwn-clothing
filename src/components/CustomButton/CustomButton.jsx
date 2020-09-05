import React from 'react';
import './CustomButton.scss';

function CustomButton({ children, isGoogle, inverted, ...rest }) {
    return (
        <button
            className={`custom-button ${isGoogle && 'google'} ${
                inverted ? 'inverted' : null
            }`}
            {...rest}
        >
            {children}
        </button>
    );
}

export default CustomButton;
