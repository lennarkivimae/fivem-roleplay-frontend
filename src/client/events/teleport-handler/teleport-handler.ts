interface IData {
    playerName: string,
    targetName: string,
    targetCoords: number[]
}

export default class TeleportHandler {
    private data: IData;

    constructor() {
        this.init();
    }

    init(): void {
        onNet('clientTeleportHandler', (data: IData) => {
            this.data = data;
            this.teleportHandler();
        })
    }

    teleportHandler(): void {
        const playerPedId: number = GetPlayerPed(PlayerId());
        SetEntityCoords(playerPedId, this.data.targetCoords[0], this.data.targetCoords[1], this.data.targetCoords[2], false, false, false, false);
    }
}
