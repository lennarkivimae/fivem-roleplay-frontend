import React from 'react';
import __ from '../../translations';
import Textfield from '../formfields/textfield';
import Button from '../button/button';
import Textarea from '../formfields/textarea/textarea';

interface IPropsPanelKick {
    class: string;
    tabId: string;
    modifier?: string;
    lang?: string;
    onChange?: ((event: React.FormEvent<HTMLInputElement>) => void)
    onClick?: ((event: React.MouseEvent) => void);
}

const PanelKick = (props: IPropsPanelKick): JSX.Element => {
    return (
        <div className={`panel ${props.class} ${props.modifier}`} data-tab={props.tabId}>
            <h2 className={'panel__title'}>
                {
                    __('kick-player', props.lang)
                }
            </h2>
            <div className={'panel__inner'}>
                <label className={'panel-inner__label'}>{ __('player-id', props.lang) }</label>
                <Textfield class={'panel-inner__player-id'} modifier={''} type={'number'} value={'0'} onChange={props.onChange}/>
                <label className={'panel-inner__label'}>{ __('reason', props.lang) }</label>
                <Textarea class={'panel-inner__reason'} placeholder={__('enter-a-reason', props.lang)}></Textarea>
                <Button class={'panel-inner__submit'} modifier={''} onClick={props.onClick}>{ __('kick', props.lang)}</Button>
            </div>
        </div>
    );
}

export default PanelKick;
