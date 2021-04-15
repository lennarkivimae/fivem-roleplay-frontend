import React from 'react';
import __ from '../../translate';
import Textfield from '../formfields/textfield';
import Button from '../button/button';
import Textarea from '../formfields/textarea/textarea';
import { useSelector } from 'react-redux';
import { ILangReducer } from '../../../reducers/lang';

interface IPropsPanelBan {
    class: string;
    tabId: string;
    modifier?: string;
    onChange?: ((event: React.FormEvent<HTMLInputElement>) => void)
    onClick?: ((event: React.MouseEvent) => void);
}

const PanelBan = (props: IPropsPanelBan): JSX.Element => {
    const lang = useSelector((state: ILangReducer) => state.lang );

    return (
        <div className={`panel ${props.class} ${props.modifier}`} data-tab={ props.tabId }>
            <h2 className={'panel__title'}>
                {
                    __('ban-player', lang)
                }
            </h2>
            <div className={'panel__inner'}>
                <label className={'panel-inner__label'}>{ __('player-id', lang) }</label>
                <Textfield class={'panel-inner__player-id'} modifier={''} type={'number'} value={'0'} onChange={props.onChange}/>
                <label className={'panel-inner__label'}>{ __('reason', lang) }</label>
                <Textarea class={'panel-inner__reason'} placeholder={__('enter-a-reason', lang)} />
                <Button class={'panel-inner__submit'} modifier={''} onClick={props.onClick}>{ __('ban', lang)}</Button>
            </div>
        </div>
    );
}

export default PanelBan;
