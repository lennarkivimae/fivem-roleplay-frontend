import React, {useState} from 'react';
import Navigation from '../../components/navigation/navigation';
import __ from '../../translations';
import Textfield from '../../components/textfield/textfield';
import Button from '../../components/button/button';

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
                        title: 'Kick'
                    }
                ]
            }} />

            <div className={`admin-panel__panel ${activePanel === 'ban' ? 'is-active' : ''}`}>
                <h2 className={'admin-panel__panel-title'}>
                    {
                        __('Ban player', props.lang)
                    }
                </h2>
                <div className={'admin-panel__inner'}>
                    <Textfield class={'admin-panel-inner__player-id'} modifier={''} type={'text'} />
                    <Button class={'admin-panel-inner__submit'} modifier={''}>{ __('Ban', props.lang)}</Button>
                </div>
            </div>
        </div>
    );
}

export default AdminPanel;
