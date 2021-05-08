import React, {useState} from 'react';
import __ from '../../translate';
import Textfield from '../formfields/textfield';
import Button from '../button/button';
import Textarea from '../formfields/textarea/textarea';
import {useSelector} from 'react-redux';
import {ILangReducer} from '../../../reducers/lang';

interface IPropsPanelKick {
    class: string;
    tabId: string;
    modifier?: string;
}

const PanelKick = (props: IPropsPanelKick): JSX.Element => {
    const lang = useSelector((state: ILangReducer) => state.lang );
    const [playerId, setPlayerId] = useState('0');

    function changePlayerId(event: React.FormEvent<HTMLInputElement>) {
        setPlayerId(event.currentTarget.value);
    }

    function sendFormData(event: React.MouseEvent) {
        //
    }

    return (
        <div className={`panel ${props.class} ${props.modifier}`} data-tab={props.tabId}>
            <h2 className={'panel__title'}>
                {
                    __('kick-player', lang)
                }
            </h2>
            <div className={'panel__inner'}>
                <label className={'panel-inner__label'}>{ __('player-id', lang) }</label>
                <Textfield class={'panel-inner__player-id'} modifier={''} type={'number'} value={playerId} onChange={changePlayerId} />
                <label className={'panel-inner__label'}>{ __('reason', lang) }</label>
                <Textarea class={'panel-inner__reason'} placeholder={__('enter-a-reason', lang)} />
                <Button class={'panel-inner__submit'} modifier={''} onClick={sendFormData}>{ __('kick', lang)}</Button>
            </div>
        </div>
    );
}

export default PanelKick;
