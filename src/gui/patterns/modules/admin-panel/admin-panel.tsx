import React, {useCallback, useEffect, useState} from 'react';
import Navigation from '../../components/navigation/navigation';
import PanelBan from '../../components/panel/panel--ban';
import PanelKick from '../../components/panel/panel--kick';

interface IAdminPanelProps {
    class: string;
    modifier: string;
    lang?: string;
}

const AdminPanel = (props: IAdminPanelProps): JSX.Element => {
    const [activePanel, setActivePanel] = useState('');

    function changePanel(event: React.MouseEvent): void {
        event.preventDefault();

        const newActivePanel: string = event.currentTarget.getAttribute('data-tab');

        setActivePanel(newActivePanel);
    }

    const closeAllTabsOnEsc = useCallback((event: React.KeyboardEvent) => {
        const { key } = event;

        if (key === 'Escape') {
            setActivePanel('');
        }

    }, []);

    useEffect(() => {
        window.addEventListener('keyup', closeAllTabsOnEsc);

        return () => {
            window.removeEventListener('keyup', closeAllTabsOnEsc);
        };
    }, [closeAllTabsOnEsc]);

    function tempChange() {
        //
    }

    return (
        <div className={`admin-panel ${props.class} ${props.modifier}`}>
            <Navigation class={'admin-panel__navigation'} modifier={''} data={{
                items: [
                    {
                        title: 'Spawn',
                        items: [
                            {
                                title: 'Vehicle'
                            },
                            {
                                title: 'Event'
                            }
                        ]
                    },
                    {
                        title: 'Ban',
                        onClick: changePanel,
                    },
                    {
                        title: 'Kick',
                        onClick: changePanel,
                    }
                ]
            }} />
            <PanelBan class={`admin-panel__panel ${activePanel === 'ban' ? 'is-active' : ''}`} modifier={'panel--ban'} lang={props.lang} tabId = {'ban'} onChange={tempChange}/>
            <PanelKick class={`admin-panel__panel ${activePanel === 'kick' ? 'is-active' : ''}`} modifier={'panel--kick'} lang={props.lang} tabId = {'kick'} onChange={tempChange}/>
        </div>
    );
}

export default AdminPanel;
