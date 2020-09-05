import React, { useState } from 'react';
import './Directory.css';
import MenuItem from '../MenuItem/MenuItem';
import hats from '../../assets/images/hats.png';
import jackets from '../../assets/images/jackets.png';
import sneakers from '../../assets/images/sneakers.png';
import womens from '../../assets/images/womens.png';
import men from '../../assets/images/men.png';
function Directory() {
    const [sections, setSections] = useState([
        {
            title: 'hats',
            // imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            imageUrl: hats, // local file in public/images/
            id: 1,
            linkUrl: 'shop/hats',
        },
        {
            title: 'jackets',
            // imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            imageUrl: jackets, // local file in public/images/
            id: 2,
            linkUrl: 'shop/jackets',
        },
        {
            title: 'sneakers',
            // imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            imageUrl: sneakers, // local file in public/images/
            id: 3,
            linkUrl: 'shop/sneakers',
        },
        {
            title: 'womens',
            // imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            imageUrl: womens, // local file in public/images/
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens',
        },
        {
            title: 'mens',
            // imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            imageUrl: men, // local file in public/images/
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens',
        },
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
