import React from 'react';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CategoryPage from '../Collection/CollectionPage';
import { Route } from 'react-router-dom';

function ShopPage({ match }) {
    console.log(match);

    return (
        <div className={'shop-page'}>
            <Route exact path={`${match.path}`}>
                <CollectionsOverview />
            </Route>
            <Route
                path={`${match.path}/:categoryId`}
                component={CategoryPage}
            />
        </div>
    );
}

export default ShopPage;
