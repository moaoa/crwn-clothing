import React from 'react';
import './FormInput.scss';

function FormInput({ handleChange, label, isGoogle, ...rest }) {
    return (
        <div className="group">
            <input
                onChange={handleChange}
                {...rest}
                className={`form-input ${isGoogle && ' google'}`}
            />
            {label && (
                <lable
                    className={`${
                        rest.value.length ? 'shrink' : ''
                    } form-input-label`}
                >
                    {label}
                </lable>
            )}
        </div>
    );
}

export default FormInput;
