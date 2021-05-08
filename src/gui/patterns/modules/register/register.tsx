import React from 'react';
import Button from '../../components/button/button';
import Textfield from '../../components/formfields/textfield';
import Helpers from '../../helpers/helpers';
import __ from '../../translate';
import {ILangReducer} from '../../../reducers/lang';
import {useSelector} from 'react-redux';

let password: string = '';
let passwordConfirmation: string = '';

function changeHandler(event: React.FormEvent<HTMLInputElement>): void {
    const isConfirmation: boolean = event.currentTarget.classList.contains('register-form__password-confirmation');

    if (isConfirmation) {
        passwordConfirmation = event.currentTarget.value;

        return;
    }

    password = event.currentTarget.value;
}

function clickHandler(event: React.MouseEvent): void {
    event.preventDefault();

    Helpers.nuiSend('register', {
        data: {
            password: password,
            passwordConfirmation: passwordConfirmation
        }
    });
}

const Register = (): JSX.Element => {
    const lang = useSelector((state: ILangReducer) => state.lang );

    return (
        <div className={`register`}>
            <div className="register__header">
                <h2 className="register__title">{ __('register', lang) }</h2>
                <p className="register__subtitle bold">{ __('this-username-is-not-registered-yet', lang) }!</p>
            </div>
            <div className="register__form">
                <label className="label register-form__label">{ __('password', lang) }:</label>
                <Textfield onChange={changeHandler} class="register-form__password" modifier="" type="password" />
                <label className="label register-form__label">{ __('password-confirmation', lang) }:</label>
                <Textfield onChange={changeHandler} class="register-form__password register-form__password-confirmation" modifier="" type="password" />
                <Button class="register-form__button" modifier="" onClick={clickHandler}>{ __('register', lang) }</Button>
            </div>
        </div>
    );
}

export default Register;
