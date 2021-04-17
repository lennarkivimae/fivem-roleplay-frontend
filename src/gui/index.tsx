import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {Provider} from 'react-redux';
import stateStore from './store/store';
import inventoryConfig from './patterns/modules/inventory/inventory.config';
import Inventory from './patterns/modules/inventory/inventory';

// eslint-disable-next-line
// @ts-ignore
const config = inventoryConfig;

if (typeof config !== 'undefined') {
    let backgroundColor = '';

    if (typeof config.meta !== 'undefined') {
        if (typeof config.meta.display !== 'undefined') {
            if (typeof config.meta.display.background !== 'undefined') {
                backgroundColor = config.meta.display.background;
            }
        }
    }

    /* -- Redux usage --
        const dispatch = useDispatch();
        dispatch(setLang('et'));
    */

    ReactDOM.render(
        <Provider store={ stateStore }>
            <div style={{ backgroundColor: backgroundColor, width: '100%', height: '100%', overflow: 'hidden' }}>
                <Inventory
                    gear={config.context.data.gear}
                    items={config.context.data.items.items}
                />
            </div>
        </Provider>,
        document.querySelector('.view'),
    );
} else {
    ReactDOM.render(
        <Provider store={ stateStore }>
            <div>todo</div>,
        </Provider>,
        document.querySelector('.view'),
    );
}

