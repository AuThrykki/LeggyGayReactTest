// HeaderPicture.js

import React from 'react';
import logo from './@KerpeHevros2.jpg';
import { ePossiblePages } from './MainPanel';

type LinksProps = {
    handleLinkClick:Function;
};


const HeaderPicture: React.FC<LinksProps>= (props) => {
    return (
        <a onClick={ () => {props.handleLinkClick(ePossiblePages.MainPage)}}>
            <div id="headerPictureDiv">
                <img id="headerPicture" src={logo} alt="" />
            </div>
        </a>
    );
}

export default HeaderPicture;
