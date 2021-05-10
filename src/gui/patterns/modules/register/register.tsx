import React from 'react';
import Button from '../../components/button/button';
import Textfield from '../../components/formfields/textfield';
import Helpers from '../../helpers/helpers';
import __ from '../../translate';
import {ILangReducer} from '../../../reducers/lang';
import {useDispatch, useSelector} from 'react-redux';
import Select from '../../components/formfields/select/select';
import {setLang} from '../../../actions/actions';

let password: string = '';
let passwordConfirmation: string = '';

const Register = (): JSX.Element => {
    const lang = useSelector((state: ILangReducer) => state.lang );
    const dispatch = useDispatch();

    function changeLanguage(event: React.FormEvent<HTMLSelectElement>): void {
        dispatch(setLang(event.currentTarget.value));
    }

    function clickHandler(event: React.MouseEvent): void {
        event.preventDefault();

        Helpers.nuiSend('/client/auth/register', {
            password: password,
            passwordConfirmation: passwordConfirmation,
            lang: lang
        });
    }

    function changeHandler(event: React.FormEvent<HTMLInputElement>): void {
        const isConfirmation: boolean = event.currentTarget.classList.contains('register-form__password-confirmation');

        if (isConfirmation) {
            passwordConfirmation = event.currentTarget.value;

            return;
        }

        password = event.currentTarget.value;
    }

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
                <div className="register__languages">
                    <Select class={'register__languages-select'}
                            name={'languages'}
                            label={__('choose-language', lang)}
                            onChange={changeLanguage}
                            options={[
                                {
                                    value: 'en',
                                    display_name: 'en'
                                },
                                {
                                    value: 'et',
                                    display_name: 'et'
                                }
                            ]}
                    />
                </div>
                <Button class="register-form__button" modifier="" onClick={clickHandler}>{ __('register', lang) }</Button>
            </div>
        </div>
    );
}

export default Register;
