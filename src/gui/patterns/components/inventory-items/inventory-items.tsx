import React from 'react';
import InventoryItem from '../inventory-item/inventory-item';

interface IInventoryItemsProps {
    class: string;
    modifier?: string;
    active?: boolean;
    items: IInventorySingleItem[];
}

export interface IInventorySingleItem {
    image: string;
    name: string;
    amount: number;
}

const InventoryItems = (props: IInventoryItemsProps): JSX.Element => {
    return (
        <div className={`inventory-items ${props.class} ${props.modifier} ${props.active ? 'is-active' : ''}`} data-tab={"items"}>
            <div className={'inventory-items__inner'}>
                {
                    props.items &&
                    props.items.map((item: IInventorySingleItem, index: number) => {
                        return <InventoryItem
                            key={`inventory-items-item-${index}`}
                            class={'inventory-items__item'}
                            modifier={'inventory-item--simple'}
                            amount={item.amount}
                            image={item.image}
                            name={item.name} />
                    })
                }
            </div>
        </div>
    );
}

export default InventoryItems;
