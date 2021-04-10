import React from 'react';
import Icon from '../icon/icon';

interface INavigationProps {
    class: string,
    modifier: string,
    data: INavigationData,
    panel: string,
    onClick: ((event: React.MouseEvent) => void)
    isPanelShown: boolean
}

interface INavigationData {
    items: INavigationItemData[]
}

export interface INavigationItemData {
    text: string,
    icon?: string
}

const Navigation = (props: INavigationProps): JSX.Element => {
    return (
        <div className={`navigation ${props.class} ${props.modifier} ${props.isPanelShown ? '' : 'is-hidden' }`} data-panel={props.panel}>
            {
                props.data.items &&
                <ul className="navigation__list">
                    {
                        props.data.items.map((item: INavigationItemData, index: number) => {
                            return <li key={`navigation__item-${index}`} className="navigation__item" data-activatepanel={item.text.toLowerCase()} onClick={props.onClick}>
                                {item.icon ? <Icon class="navigation-item__icon" modifier="" data={{ name: item.icon }} /> : ''}
                                {item.text}
                            </li>
                        })
                    }
                </ul>
            }
        </div>
    );
}

export default Navigation;
