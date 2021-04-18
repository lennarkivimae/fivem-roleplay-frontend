import React from 'react';
import {IGearUtility, IGearWeapon} from '../gear/gear';
import InventoryItem from '../inventory-item/inventory-item';
import __ from '../../translate';
import {useSelector} from 'react-redux';
import {ILangReducer} from '../../../reducers/lang';

interface IEquippedProps {
    class: string;
    modifier?: string;
    primary: IGearWeapon[];
    secondary: IGearWeapon[];
    utility: IGearUtility[];
    active?: boolean;
}

const Equipped = (props: IEquippedProps): JSX.Element => {
    const lang = useSelector((state: ILangReducer) => state.lang );

    return (
        <div className={`equipped ${props.class} ${props.modifier} ${props.active ? 'is-active' : ''}`} data-tab={'equipped'}>
            {
                props.primary &&
                <div className={'equipped__primary'}>
                    <p className={'equipped__title'}>{__('primary', lang)}</p>
                    {
                        props.primary.map((weapon: IGearWeapon, index: number) => {
                            return <InventoryItem
                                key={`equipped-primary-${index}`}
                                class={'equipped__item'}
                                modifier={''}
                                active={true}
                                image={weapon.image}
                                name={weapon.name}
                                itemId={weapon.itemId}
                                type={weapon.type}
                            />
                        })
                    }
                </div>
            }
            {
                props.secondary &&
                <div className={'equipped__secondary'}>
                    <p className={'equipped__title'}>{__('secondary', lang)}</p>
                    {
                        props.secondary.map((weapon: IGearWeapon, index: number) => {
                            return <InventoryItem
                                key={`equipped-secondary-${index}`}
                                class={'equipped__item'}
                                modifier={''}
                                active={true}
                                image={weapon.image}
                                name={weapon.name}
                                itemId={weapon.itemId}
                                type={weapon.type}
                            />
                        })
                    }
                </div>
            }
            {
                props.utility &&
                <div className={'equipped__utility'}>
                    <p className={'equipped__title'}>{__('utility', lang)}</p>
                    {
                        props.utility.map((utility: IGearUtility, index: number) => {
                            return <InventoryItem
                                key={`equipped-utility-${index}`}
                                class={'equipped__item'}
                                modifier={'inventory-item--simple'}
                                active={true}
                                amount={utility.amount}
                                image={utility.image}
                                itemId={utility.itemId}
                                type={utility.type}
                            />
                        })
                    }
                </div>
            }
        </div>
    );
};

export default Equipped;
