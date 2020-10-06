import React from 'react';
import errorSvg from '../../assets/undraw_page_not_found_su7k.svg';

class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(err, info) {
        console.log(err);
    }

    render() {
        console.log('hasError : ', this.state.hasError);
        if (this.state.hasError)
            return (
                <div
                    style={{
                        width: '80vw',
                        margin: '20px auto',
                        height: '70vh',
                    }}
                >
                    <img
                        src={errorSvg}
                        alt="error"
                        style={{ width: '100%', height: '100%' }}
                    />
                    <div style={{ textAlign: 'center' }}>
                        Something went Wrong
                    </div>
                </div>
            );
        return this.props.children;
    }
}

export default ErrorBoundary;
