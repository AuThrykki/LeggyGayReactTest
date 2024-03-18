import React from 'react';
import HeaderPicture from './HeaderPicture';
import Links from './Links';
import MainText from './MainText';
import MainPageTitle from './MainPageTitle';


const MainPanel = () => {
    return (
        <div id="appBox">
            <HeaderPicture />
            <MainPageTitle/>
            <Links />
            <MainText />
        </div>
    );
}

export default MainPanel;