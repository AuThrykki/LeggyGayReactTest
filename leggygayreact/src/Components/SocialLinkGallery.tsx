import React, { ReactNode } from 'react';
import iconBarq from '../images/icons/iconBarq.svg';
import iconDiscord from '../images/icons/iconDiscord.svg';
import iconFuraffinity from '../images/icons/iconFuraffinity.svg';
import iconGallery from '../images/icons/iconGallery.svg';
import iconMastodon from '../images/icons/iconMastodon.svg';
import iconTelegram from '../images/icons/iconTelegram.svg';
import iconTwitter from '../images/icons/iconTwitter.svg';
import iconVr from '../images/icons/iconVr.svg';
import iconBluesky from '../images/icons/iconBluesky.svg';
import { ePossiblePages } from './MainPanel';
import { SocialLinkElement } from './SocialLinkElement';

type LinksProps = {
    handleLinkClick:Function;
};

export const SocialLinkGallery: React.FC<LinksProps> = (props) => {
    type SocialLink = {
        text: string;
        externalLink: string;
        icon: any;
    }
    
    const socialLinkArray: SocialLink[] = [
        // { text: "Art", icon: { iconBarq }, disabled: false, externalLink: "" },
        { text: "Furaffinity", icon: iconFuraffinity, externalLink: "https://www.furaffinity.net/user/hevros" },
        { text: "Bluesky", icon: iconBluesky, externalLink: "https://bsky.app/profile/leggy.gay" },
        { text: "Barq", icon: iconBarq, externalLink: "https://web.barq.app/profiles/7f1b155d-96b7-4518-b00a-1303e024d08e" },
        { text: "Telegram", icon: iconTelegram, externalLink: "https://telegram.me/hevros" },
        { text: "Discord", icon: iconDiscord, externalLink: "https://discord.com/users/258210143085264897" },
    
        // {text:"Mastodon",icon:{},externalLink:""},
        // {text:"VrChat",icon:{},externalLink:""},
    ];
    
    const compileLinkGallery = (): ReactNode => {
    
        return <>
            <div id="linksDiv" >
                <a onClick={ () => {props.handleLinkClick(ePossiblePages.Gallery)}}>
                    <div className="link vrc glow">
                        <img src={iconGallery} className="icon" />
                        Art
                    </div>
                </a>
    
                    {socialLinkArray.map((link, index) => (
                        <SocialLinkElement
                        icon={link.icon}
                        externalLink={link.externalLink}
                        text={link.text}
                        key={"socialLinkElement"+index}
                        />
                    ))}
                </div>
            </>
    };


    return (
        <div id="linksDiv">
            {compileLinkGallery()}
        </div>
    );

}

