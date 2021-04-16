import React, {useState} from 'react';
import Gear, {IGearUtility, IGearWeapon} from '../../components/gear/gear';
import Navigation from '../../components/navigation/navigation';
import Equipped from '../../components/equipped/equipped';

interface IInventoryProps {
    class?: string;
    modifier?: string;
    equipped?: IInventoryEquippedProps;
    gear: IInventoryGearProps;
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

    function changeActiveEquipment(event: React.MouseEvent): void {
        event.preventDefault();

        return;
    }

    function changeInventoryPanel(event: React.MouseEvent): void {
        event.preventDefault();

        const newActivePanel: string = event.currentTarget.getAttribute('data-tab');

        setActivePanel(newActivePanel);
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
                ]} }
            />
            <div className={'inventory__panels'}>
                <Equipped class={'inventory__equipped'} primary={props.equipped.primary} secondary={props.equipped.secondary} utility={props.equipped.utility} active={ activePanel === 'equipped' } />
                <Gear class={'inventory__gear'} changeActiveEquipment={changeActiveEquipment} weapons={props.gear.weapons} utility={props.gear.utility} active={ activePanel === 'gear' } />
            </div>
        </div>
    );
};

export default Inventory;
