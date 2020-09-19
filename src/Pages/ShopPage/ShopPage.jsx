import React, { useEffect } from 'react';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../Collection/CollectionPage';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../store/actions/actionCreatores';
import {
    selectIsFetching,
    selectIsCollectionsLoaded,
} from '../../store/reducers/shop/shopSelector';
import { createStructuredSelector } from 'reselect';

import WithSpinner from '../../components/withSpinner/WithSpinner';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

function ShopPage({
    match,
    fetchCollectionsStartAsync,
    isFetching,
    isCollectionsLoaded,
}) {
    useEffect(() => {
        // let unsubscribeFromSnapshot = null;
        // unsubscribeFromSnapshot = collectoinRef.onSnapshot(async (snapshot) => {
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //     updateCollections(collectionsMap);
        //     setIsLoading(false);
        // });
        fetchCollectionsStartAsync();
        return () => {
            // unsubscribeFromSnapshot();
        };
    }, []);

    return (
        <div className={'shop-page'}>
            <Route
                exact
                path={`${match.path}`}
                render={(props) => (
                    <CollectionsOverviewWithSpinner
                        isLoading={!isCollectionsLoaded}
                        {...props}
                    />
                )}
            ></Route>
            <Route
                path={`${match.path}/:categoryId`}
                render={(props) => (
                    <CollectionPageWithSpinner
                        isLoading={!isCollectionsLoaded}
                        {...props}
                    />
                )}
            ></Route>
        </div>
    );
}
const mapDispatchToProps = {
    fetchCollectionsStartAsync: fetchCollectionsStartAsync,
};

const mapStateToProps = createStructuredSelector({
    isFetching: selectIsFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
