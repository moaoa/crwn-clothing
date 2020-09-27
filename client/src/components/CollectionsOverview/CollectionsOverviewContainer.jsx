import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsFetching } from '../../redux/selectors/shopSelectors';
import WithSpinner from '../withSpinner/WithSpinner';
import CollectionsOverview from './CollectionsOverview';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsFetching,
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
