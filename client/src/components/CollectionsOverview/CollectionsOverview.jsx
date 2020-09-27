import React from 'react';
import './CollectionsOverview.scss';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCollectionsForOverview } from '../../redux/selectors/shopSelectors';
import CollectionPreview from '../CollectionPreview/CollectionPreview';

function CollectionOverview({ collections }) {
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
