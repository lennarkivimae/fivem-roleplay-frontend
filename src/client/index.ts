import Commands from "./commands/commands";
import Globals from "./globals";
import Helpers from "./helpers/helpers";

class Client {
    constructor() {
        this.init();
    }

    init(): void {
        this.loadEventHandler();
        NetworkSetFriendlyFireOption(true);
        this.registerCommands();
    }

    loadEventHandler(): void {
        on('onClientResourceStart', () => {
            const playerName = GetPlayerName(PlayerId());

            if (playerName.includes('player')) {
                return;
            }

            this.authEvent(playerName);
        });

        on('playerSpawned', () => {
            const playerName: string = GetPlayerName(PlayerId());

            if (playerName.includes('player')) {
                Helpers.sendErrorMessage('Name cannot include word "player"');

                return;
            }

            this.authEvent(playerName);
        });
    }

    authEvent(playerName: string): void {
        if (!Globals.token) {
            const source: number = Helpers.getPlayerServerId(PlayerId());

            emitNet('serverDoesPlayerExist', [source, playerName]);
        }
    }

    registerCommands(): void {
        new Commands;
    }

    registerGlobals(): void {
        new Globals;
    }
}

new Client();
