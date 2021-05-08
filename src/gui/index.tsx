import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {Provider, useDispatch, useSelector} from 'react-redux';
import stateStore from './store/store';
import inventoryConfig from './patterns/modules/inventory/inventory.config';
import Inventory from './patterns/modules/inventory/inventory';
import Route from './patterns/components/route/route';
import {setRoute} from './actions/actions';

const App = (): JSX.Element => {
    /*const dispatch = useDispatch();
    dispatch(setRoute('/'));*/

    //eslint-disable-next-line
    const [data, setData] = useState({} as any );
    const [route, setRoute] = useState('/');

    /*function set() {
        setData({ inventory: inventoryConfig.context.data });
    }*/

    return (
        <>
            <Route to='inventory' current={route}>
                {
                    typeof data.inventory !== 'undefined' &&
                    <Inventory
                        gear={data.inventory.gear}
                        items={data.inventory.items.items}
                    />
                }
            </Route>
        </>
    );
};

//eslint-disable-next-line

ReactDOM.render(
    <Provider store={ stateStore }>
        <App />
    </Provider>,
    document.querySelector('.view'),
);

