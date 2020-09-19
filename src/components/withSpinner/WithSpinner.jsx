import React from 'react';

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
    return (
        <>
            {isLoading ? (
                <div
                    style={{ textAlign: 'center', color: 'black' }}
                    className="spinner"
                >
                    loading
                </div>
            ) : (
                <WrappedComponent {...otherProps} />
            )}
        </>
    );
};

export default WithSpinner;
