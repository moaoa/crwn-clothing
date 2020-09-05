import React from 'react';
import './MenuItem.scss';

function MenuItem({ title, imageUrl, size }) {
    return (
        <div className={`menuItem ${size}`}>
            <div
                className={'background-image'}
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="content">
                <h3>{title.toUpperCase()}</h3>
                <span className="subtitle">shop item</span>
            </div>
        </div>
    );
}

export default MenuItem;
