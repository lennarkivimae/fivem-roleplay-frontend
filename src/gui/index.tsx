import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import config from './patterns/components/navigation/navigation.config';
import Navigation from './patterns/components/navigation/navigation';

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
            <Navigation class={'page__navigation'} modifier={''} data={config.context.data} />
        </div>,
        document.querySelector('.view'),
    );
} else {
    ReactDOM.render(
        <div>todo</div>,
        document.querySelector('.view'),
    );
}

