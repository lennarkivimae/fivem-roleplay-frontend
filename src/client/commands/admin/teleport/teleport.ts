import Globals from "../../../globals";
import Helpers from "../../../helpers/helpers";

interface ISettings {
    token: string,
    initiatorId: number,
    playerId: number,
    targetId: number,
    playerName: string,
    targetName: string,
    targetCoords: number[]
}

export default class Teleport {
    private data: ISettings;

    constructor() {
        this.init();
    }

    init(): void {
        RegisterCommand('tp', (source: number, args: string[]) => {
            if (!Globals.token) {
                Helpers.sendErrorMessage('You are not logged in');

                return;
            }

            if (!Helpers.isPlayerConnected(args[0]) && !Helpers.isPlayerConnected(args[1])) {
                Helpers.sendErrorMessage('Atleast one of the players is not connected');

                return;
            }

            this.data = {
                token: Globals.token,
                initiatorId: Helpers.getPlayerServerId(PlayerId()),
                playerId: Helpers.getPlayerServerId(Helpers.getConnectedPlayerId(args[0])),
                targetId: Helpers.getPlayerServerId(Helpers.getConnectedPlayerId(args[1])),
                playerName: args[0],
                targetName: args[1],
                targetCoords: GetEntityCoords(GetPlayerPed(Helpers.getConnectedPlayerId(args[1])))
            }
            this.teleportHandler();

        }, false);
    }

    teleportHandler(): void {
        emitNet('serverTeleportHandler', this.data);
    }
}
