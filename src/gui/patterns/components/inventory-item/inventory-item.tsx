import React, { useState } from 'react';
import Button from '../button/button';
import __ from '../../translate';
import {ILangReducer} from '../../../reducers/lang';
import {useSelector} from 'react-redux';

interface IInventoryItemProps {
    class: string;
    modifier: string;
    name?: string;
    amount?: number;
    onClick?: ((event: React.MouseEvent) => void);
    active?: boolean;
    image?: string;
}

const InventoryItem = (props: IInventoryItemProps): JSX.Element => {
    const [activeGearItem] = useState(props.active);
    const lang = useSelector((state: ILangReducer) => state.lang );

    return (
        <div className={`inventory-item ${props.class} ${props.modifier} ${activeGearItem ? 'is-active' : ''}`}>
            {
                props.image &&
                <div className={'image item__image'}>
                        <img className={'image__img'} src={`./gui/assets/${props.image}.png`} alt={"inventory item image"} />
                </div>
            }
            <div className={'item__details'}>
            {
                props.name &&
                <h3 className={'item__name'}>{ props.name }</h3>
            }
            {
                props.amount &&
                <p className={'item__amount'}>x <strong>{ props.amount }</strong></p>
            }
            {
                props.onClick &&
                <Button class={'item__action'} modifier={'button--item'} onClick={props.onClick}> {`${ activeGearItem ? __('unequip', lang) : __('equip', lang) }`} </Button>
            }
            </div>
        </div>
    );
};

export default InventoryItem;
