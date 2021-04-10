import React, {useState} from 'react';
import Navigation from '../../components/navigation/navigation';

interface IProps {
    class: string,
    modifier: string,
    data: IAdminPanelData
}

export interface IAdminPanelData {
    panels?: IPanelData[]
}

interface IPanelData {
    panel: string,
    items: IPanelItems[]
}

interface IPanelItems {
    text: string,
    icon?: string
}

const AdminPanel = (props: IProps): React.ReactElement => {
    const [activePanel, setActivePanel] = useState('main');

    function clickHandler(event: React.MouseEvent): void {
        const activatedPanel: string = event.currentTarget.getAttribute('data-activatepanel');

        if (activatedPanel && activatedPanel === 'back') {
            setActivePanel('main');

            return;
        }

        setActivePanel(activatedPanel);
    }

    return (
        <div className={`admin-panel`}>
            {
                props.data.panels &&
                props.data.panels.map((item: IPanelData, index: number) => {
                    return <div className="admin-panel-navigation__outer" key={'admin-panel__navigation' + index}>
                        <Navigation
                            class="admin-panel__navigation"
                            modifier=""
                            panel={item.panel}
                            isPanelShown={item.panel === activePanel}
                            data={{ items: item.items }}
                            onClick={clickHandler} />
                    </div>
                })
            }
        </div>
    );
}

export default AdminPanel;
