import Helpers from "../../../helpers/helpers";
import Weapon from "./weapon/weapon";

export default class Give {
    constructor() {
        this.init();
    }

    init(): void {
        RegisterCommand('give', (source: number, args: string[]): void => {
            const command: string = args[0].toLowerCase();
            const playerName: string = args[1];

            if (!command || !playerName) {
                Helpers.sendMessage('Missing command name and/or player id');
                return;
            }

            if (command === 'weapon') {
                this.weapons(playerName, args[2]);
                return;
            }

            Helpers.sendCommandNotFound();
        }, false);
    }

    weapons(playerName: string, weapon?: string): void {
        if (weapon && weapon.length === 0) {
            Helpers.sendMessage('Missing weapon name');
            return;
        }

        new Weapon(playerName, weapon);
    }
}
