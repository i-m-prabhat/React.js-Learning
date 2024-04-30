// src/components/Header.js
import React from 'react';

const Header = ({ brand }) =>
{
    return (
        <header style={{ backgroundColor: brand.primaryColor }}>
            <img src={brand.logo} alt={`${brand.name} Logo`} />
            <h1>{brand.name}</h1>
        </header>
    );
};

export default Header;
