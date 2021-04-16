import React from 'react';
import {IGearUtility, IGearWeapon} from '../gear/gear';
import InventoryItem from '../inventory-item/inventory-item';

interface IEquippedProps {
    class: string;
    modifier?: string;
    primary: IGearWeapon[];
    secondary: IGearWeapon[];
    utility: IGearUtility[];
    active?: boolean;
}

const Equipped = (props: IEquippedProps): JSX.Element => {
    return (
        <div className={`equipped ${props.active ? 'is-active' : ''}`} data-tab={'equipped'}>
            {
                props.primary &&
                <div className={'equipped__primary'}>
                    {
                        props.primary.map((weapon: IGearWeapon, index: number) => {
                            return <InventoryItem
                                key={`equipped-primary-${index}`}
                                class={'equipped__item'}
                                modifier={''}
                                active={true}
                                image={weapon.image}
                                name={weapon.name}
                            />
                        })
                    }
                </div>
            }
            {
                props.secondary &&
                <div className={'equipped__secondary'}>
                    {
                        props.secondary.map((weapon: IGearWeapon, index: number) => {
                            return <InventoryItem
                                key={`equipped-secondary-${index}`}
                                class={'equipped__item'}
                                modifier={''}
                                active={true}
                                image={weapon.image}
                                name={weapon.name}
                            />
                        })
                    }
                </div>
            }
            {
                props.utility &&
                <div className={'equipped__utility'}>
                    {
                        props.utility.map((utility: IGearUtility, index: number) => {
                            return <InventoryItem
                                key={`equipped-utility-${index}`}
                                class={'equipped__item'}
                                modifier={'inventory-item--simple'}
                                active={true}
                                amount={utility.amount}
                                image={utility.image}
                            />
                        })
                    }
                </div>
            }
        </div>
    );
};

export default Equipped;
