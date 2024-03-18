import React, { useEffect } from 'react';

type SocialLinkElementProps = {
    text: string;
    externalLink: string;
    icon: any;
}

export const SocialLinkElement: React.FC<SocialLinkElementProps> = (props) => {

    return <a
        href={props.externalLink}
        target="_blank"
        >
        <div className="link furAffinity glow">
            <img src={props.icon} className="icon" />
            {props.text}
        </div>
    </a>;
}
