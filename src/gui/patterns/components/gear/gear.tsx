import React from 'react';
import InventoryItem from '../inventory-item/inventory-item';

interface IGearProps {
    class: string;
    modifier?: string;
    active?: boolean;
    changeActiveEquipment: ((event: React.MouseEvent) => void);
    weapons?: IGearWeapon[],
    utility?: IGearUtility[],
}

export interface IGearWeapon {
    name: string;
    image: string;
    type: string;
    active?: boolean;
}

export interface IGearUtility {
    image: string;
    type: string;
    amount?: number;
    active?: boolean;
}

const Gear = (props: IGearProps): JSX.Element => {
    return (
        <div className={`gear ${props.class} ${props.modifier} ${props.active ? 'is-active' : ''}`} data-tab={'gear'}>
            {
                props.weapons &&
                <div className={'gear__weapons'}>
                    {
                        props.weapons.map((weapon: IGearWeapon, index: number) => {
                            return <InventoryItem key={`gear-weapon-${index}`}
                                                  class={'gear__weapon'}
                                                  modifier={''}
                                                  active={weapon.active}
                                                  image={weapon.image}
                                                  name={weapon.image}
                                                  onClick={props.changeActiveEquipment}
                            />
                        })
                    }
                </div>
            }
            {
                props.utility &&
                <div className={'gear__utilities'}>
                    {
                        props.utility.map((utility: IGearUtility, index: number) => {
                            return <InventoryItem key={`gear-utility-${index}`}
                                                  class={'gear__utility'}
                                                  modifier={''}
                                                  image={utility.image}
                                                  name={utility.image}
                                                  amount={utility.amount}
                                                  onClick={props.changeActiveEquipment}
                            />
                        })
                    }
                </div>
            }
        </div>
    )
};

export default Gear;
