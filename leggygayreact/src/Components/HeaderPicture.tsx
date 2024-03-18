// HeaderPicture.js

import React from 'react';
import logo from './@KerpeHevros2.jpg';

const HeaderPicture: React.FC = () => {
    return (
        <a href="./">
            <div id="headerPictureDiv">
                <img id="headerPicture" src={logo} alt="" />
            </div>
        </a>
    );
}

export default HeaderPicture;
