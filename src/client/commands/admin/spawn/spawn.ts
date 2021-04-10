import Helpers from "../../../helpers/helpers";
import Vehicle from "./vehicle/vehicle";

export default class Spawn {
    constructor() {
        this.init();
    }

    init(): void {
        RegisterCommand('spawn', (source: number, args: string[]): void => {
            const command: string = (args[0]) && args[0].toLowerCase();
            const playerName: string = args[1];

            if (!command || !playerName) {
                Helpers.sendMessage('Missing command name and/or player id');
                return;
            }

            if (command === 'vehicle') {
                this.vehicle(playerName, args[2]);
                return;
            }

            Helpers.sendCommandNotFound();
        }, false);
    }

    vehicle(playerName: string, vehicleName: string): void {
        if (vehicleName && vehicleName.length === 0) {
            Helpers.sendMessage('Missing vehicle name');
            return;
        }

        new Vehicle(playerName, vehicleName);
    }
}
