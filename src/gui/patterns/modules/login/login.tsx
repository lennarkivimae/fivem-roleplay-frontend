import React from 'react';
import Button from '../../components/button/button';
import Textfield from '../../components/formfields/textfield';
import Helpers from '../../helpers/helpers';
import __ from '../../translate';
import {ILangReducer} from '../../../reducers/lang';
import {useSelector} from 'react-redux';

let password: string = '';

function changeHandler(event: React.FormEvent<HTMLInputElement>): void {
    password = event.currentTarget.value;
}

function clickHandler(event: React.MouseEvent): void {
    event.preventDefault();

    Helpers.nuiSend('/client/auth/login', {
        password: password
    });
}

const Login = (): JSX.Element => {
    const lang = useSelector((state: ILangReducer) => state.lang );

    return (
        <div className={`login`}>
            <div className="login__header">
                <h2 className="login__title">{ __('welcome', lang) }</h2>
                <p className="login__subtitle bold">{ __('please-log-in', lang) }:</p>
            </div>
            <div className="login__form">
                <label className="label login-form__label">{ __('password', lang) }:</label>
                <Textfield onChange={changeHandler} class="login__textfield" modifier="" type="password" />
                <Button onClick={clickHandler} class="login__button" modifier="">{ __('log-in', lang) }!</Button>
            </div>
        </div>
    );
}

export default Login;
