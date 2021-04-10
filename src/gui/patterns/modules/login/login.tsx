import React from 'react';
import Button from '../../components/button/button';
import Textfield from '../../components/textfield/textfield';
import Helpers from '../../helpers/helpers';
import __ from '../../translations';

interface ILoginProps {
    lang?: string;
}

let password: string = '';

function changeHandler(event: React.FormEvent<HTMLInputElement>): void {
    password = event.currentTarget.value;
}

function clickHandler(event: React.MouseEvent): void {
    event.preventDefault();

    Helpers.nuiSend('login', {
        data: {
            password: password
        }
    });
}

const LoginModule = (props: ILoginProps): JSX.Element => {
    return (
        <div className={`login`}>
            <div className="login__header">
                <h2 className="login__title">{ __('welcome', props.lang) }</h2>
                <p className="login__subtitle bold">{ __('please-log-in', props.lang) }:</p>
            </div>
            <div className="login__form">
                <label className="label login-form__label">{ __('password', props.lang) }:</label>
                <Textfield onChange={changeHandler} class="login__textfield" modifier="" type="password" />
                <Button onClick={clickHandler} class="login__button" modifier="">{ __('log-in', props.lang) }!</Button>
            </div>
        </div>
    );
}

export default LoginModule;
