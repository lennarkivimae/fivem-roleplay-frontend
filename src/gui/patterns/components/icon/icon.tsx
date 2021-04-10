import React from 'react';

/* eslint-disable */
import ArrowDown from './items/arrow-down';
import ArrowUp from './items/arrow-up';
import ArrowLeft from './items/arrow-left';
import ArrowRight from './items/arrow-right';
import Achievement from './items/achievement';
/* eslint-enable */


interface IIconProps {
    class: string,
    modifier: string,
    data: IIconData
}

interface IIconData {
    name: string
}

interface IIcons {
    [key: string]: React.ReactNode
}

const icons: IIcons = {
    ArrowDown: <ArrowDown />,
    ArrowUp: <ArrowUp />,
    ArrowLeft: <ArrowLeft />,
    ArrowRight: <ArrowRight />,
    Achievement: <Achievement />
}

const Icon = (props: IIconProps): JSX.Element => {
    return (
        <div className={`icon ${props.class} ${props.modifier}`}>
            <div className="icon__inner">
                { icons[props.data.name] }
            </div>
        </div>
    );
}

export default Icon;
