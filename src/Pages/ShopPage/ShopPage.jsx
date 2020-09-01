import React, { useState } from 'react';
import shopData from './shopData';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

function ShopPage() {
    const [collections, setCollections] = useState(shopData);

    return (
        <div className={'shop-page'}>
            {collections
                .filter((item, i) => i < 4)
                .map(({ id, ...rest }) => (
                    <CollectionPreview key={id} {...rest} />
                ))}
        </div>
    );
}

export default ShopPage;
