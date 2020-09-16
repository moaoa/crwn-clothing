import React from 'react';
import './CollectionPage.scss';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import { connect } from 'react-redux';
import { selectParticularCollection } from '../../store/reducers/shop/shopSelector';

function CollectionPage({ match, collection }) {
    const { title, items } = collection;
    return (
        <div className="collection-page">
            <h2 className="title"> {title} PAGE</h2>
            <div className="items">
                {items.map((item) => (
                    <CollectionItem item={item} />
                ))}
            </div>
        </div>
    );
}
const mapStateToProps = (state, ownProps) => ({
    collection: selectParticularCollection(
        ownProps['match']['params']['categoryId']
    )(state),
});

export default connect(mapStateToProps)(CollectionPage);
