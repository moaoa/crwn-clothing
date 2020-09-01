import React, { useState } from 'react';
import cottageImg from '../../assets/pexels-eberhard-grossgasteiger-4406213.jpg';
import './Directory.css';
import MenuItem from '../MenuItem/MenuItem';

function Directory() {
    const [sections, setSections] = useState([
        { id: 1, title: 'title1', imgUrl: cottageImg },
        { id: 2, title: 'title2', imgUrl: cottageImg },
        { id: 3, title: 'title3', imgUrl: cottageImg },
        { id: 4, title: 'title4', size: 'large', imgUrl: cottageImg },
        { id: 5, title: 'title5', size: 'large', imgUrl: cottageImg },
    ]);
    return (
        <div className="directory-menu">
            {sections.map(({ id, ...rest }) => (
                <MenuItem key={id} {...rest} />
            ))}
        </div>
    );
}

export default Directory;
