import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Notfound(props) {
    return (
        <div >
            <div className='not_found'>
                <NavLink className={`back`} to={'/'}>Go Back</NavLink>
            </div>
        </div>
    );
}

export default Notfound;