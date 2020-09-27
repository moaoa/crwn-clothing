import React, { useEffect } from 'react';
import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverviewContainer';
import CollectionPageContainer from '../Collection/CollectionPageContainer';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/actions/actionCreatores';

function ShopPage({ match, fetchCollectionsStart }) {
    useEffect(() => {
        // let unsubscribeFromSnapshot = null;
        // unsubscribeFromSnapshot = collectoinRef.onSnapshot(async (snapshot) => {
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //     updateCollections(collectionsMap);
        //     setIsLoading(false);
        // });
        fetchCollectionsStart();
        return () => {
            // unsubscribeFromSnapshot();
        };
    }, []);

    return (
        <div className={'shop-page'}>
            <Route
                exact
                path={`${match.path}`}
                component={CollectionsOverviewContainer}
            ></Route>
            <Route
                path={`${match.path}/:categoryId`}
                component={CollectionPageContainer}
            ></Route>
        </div>
    );
}
const mapDispatchToProps = {
    fetchCollectionsStart: fetchCollectionsStart,
};

export default connect(null, mapDispatchToProps)(ShopPage);
