import { createSelector } from 'reselect';
import Directory from '../../components/Directory/Directory';

const selectDirectory = (state) => state.directory;

export const selectDirectorySections = createSelector(
    [selectDirectory],
    (directory) => directory.sections
);
