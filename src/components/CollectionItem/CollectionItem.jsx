import React from 'react';
import './CollectionItem.scss';
import CustomButton from '../CustomButton/CustomButton';
import { connect } from 'react-redux';
import { addItem } from '../../store/actions/actionCreatores';

function CollectionItem({ item, addItem }) {
    const { name, price, imageUrl } = item;
    return (
        <div className="collection-item">
            <div
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
                className="image"
            ></div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>
                add to cart
            </CustomButton>
        </div>
    );
}
const mapDispatchToProps = { addItem };

export default connect(null, mapDispatchToProps)(CollectionItem);
