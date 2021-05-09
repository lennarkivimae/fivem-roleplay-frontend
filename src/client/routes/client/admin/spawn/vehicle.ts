interface IPayload {
    vehicleHash: number
}

export default class Vehicle {
    private data: IPayload;

    constructor() {
        this.init();
    }

    init(): void {
        onNet('/client/spawn/vehicle', (data: IPayload) => {
            this.data = data;
            this.spawnHandler();
        });
    }

    spawnHandler(): void {
        RequestModel(this.data.vehicleHash);

        setTimeout((): void => {
            this.spawnVehicle(this.data.vehicleHash);
        }, 500);
    }

    spawnVehicle(vehicleHash: number): void {
        if (HasModelLoaded(vehicleHash)) {
            const playerId: number = PlayerId();
            const playerPedId: number = GetPlayerPed(playerId);
            const coordinates: number[] = GetEntityCoords(playerPedId);
            const heading: number = GetEntityHeading(playerPedId);

            const vehicle: number = CreateVehicle(vehicleHash, coordinates[0], coordinates[1], coordinates[2], heading, true, false);

            SetPedIntoVehicle(playerPedId, vehicle, -1);

            // Allow the game engine to clean up the vehicle and model if needed
            SetEntityAsNoLongerNeeded(vehicle);

            return;
        }

        this.spawnHandler();
    }
}
