import React, {useState} from 'react';
import Gear, {IGearUtility, IGearWeapon} from '../../components/gear/gear';
import Navigation from '../../components/navigation/navigation';

interface IInventoryProps {
    class?: string;
    modifier?: string;
    gear: IInventoryGearProps;
    gear2: IInventoryGearProps;
}

interface IInventoryGearProps {
    weapons: IGearWeapon[];
    utility: IGearUtility[];
}

const Inventory = (props: IInventoryProps): JSX.Element => {
    const [activePanel, setActivePanel] = useState('gear');

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
                        title: 'Gear',
                        onClick: changeInventoryPanel
                    },
                    {
                        title: 'Gear2',
                        onClick: changeInventoryPanel
                    }
                ]} }
            />
            <div className={'inventory__panels'}>
                <Gear class={'inventory__gear'} changeActiveEquipment={changeActiveEquipment} weapons={props.gear.weapons} utility={props.gear.utility} active={ activePanel === 'gear' } />
                <Gear class={'inventory__gear'} changeActiveEquipment={changeActiveEquipment} weapons={props.gear2.weapons} utility={props.gear2.utility} active={ activePanel === 'gear2' } />
            </div>
        </div>
    );
};

export default Inventory;
