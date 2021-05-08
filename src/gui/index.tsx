import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {Provider, useDispatch, useSelector} from 'react-redux';
import stateStore from './store/store';
import inventoryConfig from './patterns/modules/inventory/inventory.config';
import Inventory from './patterns/modules/inventory/inventory';
import Route from './patterns/components/route/route';
import {setRoute} from './actions/actions';
import Login from './patterns/modules/login/login';
import Register from './patterns/modules/register/register';
import AdminPanel from './patterns/modules/admin-panel/admin-panel';
import Funds from './patterns/modules/funds/funds';

interface IGUIPayload {
    route: string;
    data: IGUIData;
}

interface IGUIData {
    //eslint-disable-next-line
    [key: string]: any
}

const App = (): JSX.Element => {
    /*const dispatch = useDispatch();
    dispatch(setRoute('/'));*/

    const initialDataState: IGUIData = {
        funds: {
            bank: 0,
            cash: 0
        },
    };

    const [data, setData] = useState( initialDataState as IGUIData );
    const [route, setRoute] = useState('admin');

    /*function set() {
        setData({ inventory: inventoryConfig.context.data });
    }*/

    window.addEventListener('gui', (payload: IGUIPayload) => {
        setRoute(payload.route);
        setData(payload.data);
    });

    return (
        <>
            <Route to='login' current={route}>
                <Login />
            </Route>
            <Route to='register' current={route}>
                <Register />
            </Route>
            <Route to='admin' current={route}>
                <AdminPanel />
            </Route>
            <Route to='inventory' current={route}>
                {
                    typeof data.inventory !== 'undefined' &&
                    <Inventory
                        gear={data.inventory.gear}
                        items={data.inventory.items.items}
                    />
                }
            </Route>
            <Route to='/' current={route}>
                {
                    typeof data.funds !== 'undefined' &&
                    <Funds bank={data.funds.bank} cash={data.funds.cash} />
                }
            </Route>
        </>
    );
}

ReactDOM.render(
    <Provider store={ stateStore }>
        <App />
    </Provider>,
    document.querySelector('.view'),
);

