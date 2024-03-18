import React, { useState } from 'react';
import HeaderPicture from './HeaderPicture';
import MainText from './MainText';
import MainPageTitle from './MainPageTitle';
import MatrixCanvas from './MatrixCanvas';
import { Gallery } from './Gallery';
import { SocialLinkGallery } from './SocialLinkGallery';

export enum ePossiblePages { 'MainPage', 'Gallery' }

const MainPanel = () => {

    const [currentPage, setPage] = useState<ePossiblePages>(ePossiblePages.MainPage);

    return (
        <div id="appBox">
            <MatrixCanvas />
            <HeaderPicture handleLinkClick={setPage} />

            {
                currentPage === ePossiblePages.MainPage &&
                <>
                    <MainPageTitle />
                    <SocialLinkGallery handleLinkClick={setPage} />
                    <MainText />
                </>
            }

            {
                currentPage === ePossiblePages.Gallery &&
                <Gallery />
            }

        </div>
    );
}

export default MainPanel;