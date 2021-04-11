import React, {useState} from 'react';

interface INavigationProps {
    class: string;
    modifier: string;
    data: INavigationData;
}

interface INavigationData {
    items: INavigationItem[];
}

interface INavigationItem {
    title: string;
    items?: INavigationItem[];
}

const Navigation = (props: INavigationProps): JSX.Element => {
    const data: INavigationData = props.data;

    const [openedTab, setOpenedTab] = useState('');
    const [sublistHeight, setSublistHeight] = useState(0)

    function openTab(event: React.MouseEvent): void {
        const targetedTab: string = event.currentTarget.getAttribute('data-tab');
        const sublist: HTMLElement = event.currentTarget.querySelector('.navigation__sublist');
        setOpenedTab('');
        updateSublistHeight(sublist);

        if (sublist) {
            setOpenedTab(targetedTab);
        }
    }

    function updateSublistHeight(sublist: HTMLElement) {
        setSublistHeight(0);

        if (sublist) {
            const height: number = getSublistHeight(sublist);

            setSublistHeight(height);
        }
    }

    function getSublistHeight(sublist: HTMLElement): number {
        let maxHeight = 0;

        const items: NodeList = sublist.querySelectorAll('.navigation__item');

        items.forEach((item: HTMLElement) => {
            maxHeight += (item.offsetHeight + item.clientHeight);
        });

        return maxHeight;
    }

    return (
        <div className={`navigation ${props.class} ${props.modifier}`}>
            {
                data.items &&
                <ul className={'navigation__list'}>
                    {
                        data.items.map((item: INavigationItem, itemIndex: number) => {
                            const lowerCaseItemTitle: string = item.title.toLowerCase();

                            return <li key={`navigation-item-${itemIndex}`} className={`navigation__item ${openedTab === lowerCaseItemTitle ? 'is-open' : ''}`} data-tab={`${lowerCaseItemTitle}`} onClick={openTab}>
                                { item.title }
                                {
                                    item.items &&
                                    <ul key={`navigation-item-sublist-${itemIndex}`} className={'navigation__sublist'} style={{ maxHeight: sublistHeight }}>
                                        {
                                            item.items.map((subItem: INavigationItem, subItemIndex: number) => {
                                                return <li key={`navigation-item-sublist-${subItemIndex}`} className={'navigation__item'} data-tab={`${subItem.title.toLowerCase()}`}>
                                                    { subItem.title }
                                                </li>
                                            })
                                        }
                                    </ul>
                                }
                            </li>
                        })
                    }
                </ul>
            }
        </div>
    );
};

export default Navigation;
