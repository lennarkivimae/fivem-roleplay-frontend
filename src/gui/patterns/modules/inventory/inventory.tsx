import React, {useState} from 'react';
import Gear, {IGearUtility, IGearWeapon} from '../../components/gear/gear';
import Navigation from '../../components/navigation/navigation';
import Equipped from '../../components/equipped/equipped';
import InventoryItems, {IInventorySingleItem} from '../../components/inventory-items/inventory-items';

interface IInventoryProps {
    class?: string;
    modifier?: string;
    gear: IInventoryGearProps;
    items: IInventorySingleItem[];
}

interface IInventoryGearProps {
    weapons: IGearWeapon[];
    utility: IGearUtility[];
}

interface IInventoryEquippedProps {
    primary: IGearWeapon[];
    secondary: IGearWeapon[];
    utility: IGearUtility[];
}

const Inventory = (props: IInventoryProps): JSX.Element => {
    const [activePanel, setActivePanel] = useState('equipped');
    const [equippedItems, setEquippedItems] = useState(getEquippedItemsFromGear());

    function changeActiveEquipment(event: React.MouseEvent): void {
        event.preventDefault();

        return;
    }

    function changeInventoryPanel(event: React.MouseEvent): void {
        event.preventDefault();

        const newActivePanel: string = event.currentTarget.getAttribute('data-tab');

        setActivePanel(newActivePanel);
    }

    function getEquippedItemsFromGear(): IInventoryEquippedProps {
        const gear: IInventoryGearProps = props.gear;
        const currentlyEquipped: IInventoryEquippedProps = {
            primary: [],
            secondary: [],
            utility: []
        };

        for (const item of gear.weapons) {
           if (item.active) {
               switch (item.type) {
                   case 'primary':
                       currentlyEquipped.primary.push({
                           name: item.name,
                           image: item.image,
                           type: item.type
                       });
                       break;
                   case 'secondary':
                       currentlyEquipped.secondary.push({
                           name: item.name,
                           image: item.image,
                           type: item.type
                       });
                       break;
               }
           }
        }

        for (const item of gear.utility) {
            if (item.type === 'utility' && item.active) {
                currentlyEquipped.utility.push({
                    amount: item.amount,
                    image: item.image,
                    type: item.type
                });
            }
        }

        return currentlyEquipped;
    }

    return (
        <div className={`inventory`}>
            <Navigation class={'inventory__navigation'} modifier={''} data={{ items: [
                    {
                        title: 'Equipped',
                        onClick: changeInventoryPanel
                    },
                    {
                        title: 'Gear',
                        onClick: changeInventoryPanel
                    }
                    ,
                    {
                        title: 'items',
                        onClick: changeInventoryPanel
                    }
                ]} }
            />
            <div className={'inventory__panels'}>
                <Equipped class={'inventory__equipped'}
                          primary={equippedItems.primary}
                          secondary={equippedItems.secondary}
                          utility={equippedItems.utility}
                          active={ activePanel === 'equipped' }
                />
                <Gear class={'inventory__gear'}
                      changeActiveEquipment={changeActiveEquipment}
                      weapons={props.gear.weapons}
                      utility={props.gear.utility}
                      active={ activePanel === 'gear' }
                />
                <InventoryItems
                    class={'inventory__items'}
                    items={props.items}
                    active={ activePanel === 'items' }
                />
            </div>
        </div>
    );
};

export default Inventory;
