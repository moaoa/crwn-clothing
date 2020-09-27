import React from 'react';
import './CollectionPage.scss';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import { connect } from 'react-redux';
import { selectParticularCollection } from '../../redux/selectors/shopSelectors';

let CollectionPage = ({ collection }) => {
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
};
const mapStateToProps = (state, ownProps) => {
    return {
        collection: selectParticularCollection(
            ownProps['match']['params']['categoryId']
        )(state),
    };
};

export default connect(mapStateToProps)(CollectionPage);
