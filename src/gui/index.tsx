import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import config from './patterns/modules/admin-panel/admin-panel.config';
import AdminPanel from './patterns/modules/admin-panel/admin-panel';

if (typeof config !== 'undefined') {
    let backgroundColor = '';

    if (typeof config.meta !== 'undefined') {
        if (typeof config.meta.display !== 'undefined') {
            if (typeof config.meta.display.background !== 'undefined') {
                backgroundColor = config.meta.display.background;
            }
        }
    }

    ReactDOM.render(
        <div style={{ backgroundColor: backgroundColor }}>
            <AdminPanel class={'page__admin-panel'} modifier={''} />
        </div>,
        document.querySelector('.view'),
    );
} else {
    ReactDOM.render(
        <div>todo</div>,
        document.querySelector('.view'),
    );
}

