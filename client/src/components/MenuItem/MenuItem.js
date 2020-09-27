import React from 'react';
import './MenuItem.scss';

import { useHistory } from 'react-router-dom';

function MenuItem({ title, imageUrl, size, linkUrl }) {
    const history = useHistory();
    return (
        <div
            className={`menuItem ${size}`}
            onClick={() => history.push(`/${linkUrl}`)}
        >
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
