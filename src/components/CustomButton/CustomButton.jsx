import React from 'react';
import './CustomButton.scss';

function CustomButton({ children, isGoogle, ...rest }) {
    return (
        <button className={`custom-button ${isGoogle && 'google'}`} {...rest}>
            {children}
        </button>
    );
}

export default CustomButton;
