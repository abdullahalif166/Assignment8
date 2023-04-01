import React from 'react';
import './Header.css';
import personImage from '../../assets/person.png';

const Header = () => {
    return (
        <nav className='header'>
            <h1>Blogs Universe</h1>
            <div className='person'>
                <img src={personImage} alt="" />
            </div>
        </nav>
    );
};

export default Header;