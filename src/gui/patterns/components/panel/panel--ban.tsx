import React, {useState} from 'react';
import __ from '../../translate';
import Textfield from '../formfields/textfield';
import Button from '../button/button';
import Textarea from '../formfields/textarea/textarea';
import { useSelector } from 'react-redux';
import { ILangReducer } from '../../../reducers/lang';
import Helpers from '../../helpers/helpers';

interface IPropsPanelBan {
    class: string;
    tabId: string;
    modifier?: string;
}

const PanelBan = (props: IPropsPanelBan): JSX.Element => {
    const lang = useSelector((state: ILangReducer) => state.lang );
    const [playerId, setPlayerId] = useState('0');

    function changePlayerId(event: React.FormEvent<HTMLInputElement>) {
        setPlayerId(event.currentTarget.value);
    }

    function sendFormData(event: React.MouseEvent) {
        event.preventDefault();

        const panelInner: HTMLElement = (event.target as HTMLElement).parentElement;
        const reason: string = (panelInner.querySelector('.panel-inner__reason') as HTMLInputElement).value;

        Helpers.nuiSend('ban', {
            playerId,
            reason
        });
    }

    return (
        <div className={`panel ${props.class} ${props.modifier}`} data-tab={ props.tabId }>
            <h2 className={'panel__title'}>
                {
                    __('ban-player', lang)
                }
            </h2>
            <div className={'panel__inner'}>
                <label className={'panel-inner__label'}>{ __('player-id', lang) }</label>
                <Textfield class={'panel-inner__player-id'} modifier={''} type={'number'} value={playerId} onChange={changePlayerId}/>
                <label className={'panel-inner__label'}>{ __('reason', lang) }</label>
                <Textarea class={'panel-inner__reason'} placeholder={__('enter-a-reason', lang)} />
                <Button class={'panel-inner__submit'} modifier={''} onClick={sendFormData}>{ __('ban', lang)}</Button>
            </div>
        </div>
    );
}

export default PanelBan;
