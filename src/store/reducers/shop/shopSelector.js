import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);

export const selectCollectionsForOverview = createSelector(
    [selectCollections],
    (collections) =>
        collections
            ? Object.keys(collections).map((key) => collections[key])
            : []
);

export const selectParticularCollection = (collectionName) =>
    createSelector([selectCollections], (collections) =>
        collections ? collections[collectionName] : null
    );
export const selectIsFetching = createSelector(
    [selectShop],
    (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectCollections],
    (collections) => !!collections
);
