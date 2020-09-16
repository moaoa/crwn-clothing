import React from 'react';
import './CollectionsOverview.scss';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCollectionsForOverview } from '../../store/reducers/shop/shopSelector';
import CollectionPreview from '../CollectionPreview/CollectionPreview';

function CollectionOverview({ collections }) {
    console.log(collections);
    return (
        <div className="collections-overview">
            {collections
                .filter((_, i) => i < 4)
                .map(({ id, ...rest }) => (
                    <CollectionPreview key={id} {...rest} />
                ))}
        </div>
    );
}
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForOverview,
});

export default connect(mapStateToProps)(CollectionOverview);
