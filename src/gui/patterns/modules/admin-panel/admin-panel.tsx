import React, {useCallback, useEffect, useState} from 'react';
import Navigation from '../../components/navigation/navigation';
import PanelBan from '../../components/panel/panel--ban';
import PanelKick from '../../components/panel/panel--kick';
import PanelSpawnVehicle from '../../components/panel/panel--spawn-vehicle';
import PanelSpawnWeapon from '../../components/panel/panel--spawn-weapon';

const AdminPanel = (): JSX.Element => {
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

    return (
        <div className={`admin-panel`}>
            <Navigation class={'admin-panel__navigation'} modifier={''} data={{
                items: [
                    {
                        title: 'Spawn',
                        items: [
                            {
                                title: 'Vehicle',
                                onClick: changePanel
                            },
                            {
                                title: 'Weapon',
                                onClick: changePanel
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
            <PanelBan class={`admin-panel__panel ${activePanel === 'ban' ? 'is-active' : ''}`} modifier={'panel--ban'} tabId = {'ban'}/>
            <PanelKick class={`admin-panel__panel ${activePanel === 'kick' ? 'is-active' : ''}`} modifier={'panel--kick'} tabId = {'kick'} />
            <PanelSpawnVehicle class={`admin-panel__panel ${activePanel === 'vehicle' ? 'is-active' : ''}`} modifier={'panel--spawn-vehicle'} tabId={'vehicle'} />
            <PanelSpawnWeapon class={`admin-panel__panel ${activePanel === 'weapon' ? 'is-active' : ''}`} modifier={'panel--spawn-weapon'} tabId={'weapon'} />
        </div>
    );
}

export default AdminPanel;
