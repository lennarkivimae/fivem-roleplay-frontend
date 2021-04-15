import React from 'react';
import __ from '../../translate';
import Textfield from '../formfields/textfield';
import Button from '../button/button';
import {ILangReducer} from '../../../reducers/lang';
import {useSelector} from 'react-redux';

interface IPanelSpawnWeaponProps {
    class: string;
    tabId: string;
    modifier?: string;
    onChange?: ((event: React.FormEvent<HTMLInputElement>) => void)
    onClick?: ((event: React.MouseEvent) => void);
}

const PanelSpawnWeapon = (props: IPanelSpawnWeaponProps): JSX.Element => {
    const lang = useSelector((state: ILangReducer) => state.lang );

    return (
        <div className={`panel ${props.class} ${props.modifier}`} data-tab={props.tabId}>
            <h2 className={'panel__title'}>
                {
                    __('spawn-weapon', lang)
                }
            </h2>
            <div className={'panel__inner'}>
                <label className={'panel-inner__label'}>{ __('player-id', lang) }</label>
                <Textfield class={'panel-inner__player-id'} modifier={''} type={'number'} value={'0'} onChange={props.onChange}/>
                <label className={'panel-inner__label'}>{ __('Weapon', lang) }</label>
                <Textfield class={'panel-inner__textfield'} modifier={''} type={'text'} onChange={props.onChange} />
                <Button class={'panel-inner__submit'} modifier={''} onClick={props.onClick}>{ __('Spawn', lang)}</Button>
            </div>
        </div>
    );
}

export default PanelSpawnWeapon;
