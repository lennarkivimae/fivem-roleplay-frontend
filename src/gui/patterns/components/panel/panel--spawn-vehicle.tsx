import React, {useState} from 'react';
import __ from '../../translate';
import Textfield from '../formfields/textfield';
import Button from '../button/button';
import {useSelector} from 'react-redux';
import {ILangReducer} from '../../../reducers/lang';

interface IPanelSpawnVehicleProps {
    class: string;
    tabId: string;
    modifier?: string;
}

const PanelSpawnVehicle = (props: IPanelSpawnVehicleProps): JSX.Element => {
    const lang = useSelector((state: ILangReducer) => state.lang );
    const [playerId, setPlayerId] = useState('0');
    const [vehicleName, setVehicleName] = useState('');

    function changePlayerId(event: React.FormEvent<HTMLInputElement>) {
        setPlayerId(event.currentTarget.value);
    }

    function changeVehicleName(event: React.FormEvent<HTMLInputElement>) {
        setVehicleName(event.currentTarget.value);
    }

    function sendFormData(event: React.MouseEvent) {
        //
    }

    return (
        <div className={`panel ${props.class} ${props.modifier}`} data-tab={props.tabId}>
            <h2 className={'panel__title'}>
                {
                    __('spawn-vehicle', lang)
                }
            </h2>
            <div className={'panel__inner'}>
                <label className={'panel-inner__label'}>{ __('player-id', lang) }</label>
                <Textfield class={'panel-inner__player-id'} modifier={''} type={'number'} value={playerId} onChange={changePlayerId}/>
                <label className={'panel-inner__label'}>{ __('Vehicle', lang) }</label>
                <Textfield class={'panel-inner__textfield'} modifier={''} type={'text'} onChange={changeVehicleName} />
                <Button class={'panel-inner__submit'} modifier={''} onClick={sendFormData}>{ __('Spawn', lang)}</Button>
            </div>
        </div>
    );
}

export default PanelSpawnVehicle;
