import Globals from "../../../../globals";
import Helpers from "../../../../helpers/helpers";

interface ISettings {
    playerName: string;
    vehicleName: string;
}

interface IData {
    token: string,
    initiatorName: string,
    initiatorId: number,
    targetName: string,
    targetId: number,
    vehicleHash: number
}

export default class Vehicle {
    private settings: ISettings;
    private data: IData;

    constructor(playerName: string, vehicleName: string) {
        this.settings = {
            playerName: playerName,
            vehicleName: vehicleName
        };

        this.init();
    }

    init(): void {
        this.spawnVehicle();
    }

    spawnVehicle(): void {
        const vehicleHash: number = GetHashKey(this.settings.vehicleName);

        if (!Globals.token) {
            Helpers.sendErrorMessage('You are not logged in');
        }

        if (!IsModelInCdimage(vehicleHash) || !IsModelAVehicle(vehicleHash)) {
            Helpers.sendMessage('The model does not exist');
            return;
        }

        if (!Helpers.isPlayerConnected(this.settings.playerName)) {
            Helpers.sendMessage('This name does not exist');
            return;
        }

        this.spawnHandler(vehicleHash);
    }

    spawnHandler(hash: number): void {
        this.data = {
            token: Globals.token,
            initiatorName: GetPlayerName(PlayerId()),
            initiatorId: Helpers.getPlayerServerId(PlayerId()),
            targetName: this.settings.playerName,
            targetId: Helpers.getPlayerServerId(Helpers.getConnectedPlayerId(this.settings.playerName)),
            vehicleHash: hash
        }

        emitNet('serverSpawnVehicle', this.data);
    }

}
