import React from 'react';
import './Directory.css';
import MenuItem from '../MenuItem/MenuItem';
import { selectDirectorySections } from '../../redux/selectors/directorySelectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
function Directory({ sections }) {
    return (
        <div className="directory-menu">
            {sections.map(({ id, ...rest }) => (
                <MenuItem key={id} {...rest} />
            ))}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
