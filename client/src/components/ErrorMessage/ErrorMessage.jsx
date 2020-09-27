import React from 'react';

function ErrorMessage({ formik, name }) {
    return (
        <div>
            {formik.touched[name] && formik.errors[name]
                ? formik.errors[name]
                : null}
        </div>
    );
}

export default ErrorMessage;
