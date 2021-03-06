import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {Provider, useDispatch, useSelector} from 'react-redux';
import stateStore from './store/store';
import inventoryConfig from './patterns/modules/inventory/inventory.config';
import Inventory from './patterns/modules/inventory/inventory';
import Route from './patterns/components/route/route';
import Login from './patterns/modules/login/login';
import Register from './patterns/modules/register/register';
import AdminPanel from './patterns/modules/admin-panel/admin-panel';
import Funds from './patterns/modules/funds/funds';
import Select from './patterns/components/formfields/select/select';

interface IGUIData {
    //eslint-disable-next-line
    [key: string]: any
}

const App = (): JSX.Element => {
    /*const dispatch = useDispatch();
    dispatch(setRoute('/'));*/

    const [data, setData] = useState( { funds: {bank: 0, inventory: 0 }} as IGUIData );
    const [route, setRoute] = useState('/');

    //eslint-disable-next-line
    window.addEventListener('message', (event: any): void => {
        if (event.data.type === 'gui') {
            setRoute(event.data.route);
            setData({
                ...data,
                ...event.data
            });
        }
    });

    function set() {
        setRoute('register');
        setData({
            inventory: inventoryConfig.context.data
        })
    }

    return (
        <>
            <button onClick={set}>asdf</button>
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

