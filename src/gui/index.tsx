import React from 'react';
import ReactDOM from 'react-dom';
import './page.scss';
import AdminPanel from './patterns/modules/admin-panel/admin-panel';

ReactDOM.render(
    <AdminPanel class={'page-pane'} modifier={''} data={
        {
            panels: [
                {
                    panel: 'main',
                    items: [
                        {
                            text: 'Spawn'
                        }
                    ]
                },
                {
                    panel: 'spawn',
                    items: [
                        {
                            text: 'Back'
                        },
                        {
                            text: 'Go spawn stuff'
                        }
                    ]
                }
            ]
        }
    }/>,
    document.querySelector('.view'),
);
