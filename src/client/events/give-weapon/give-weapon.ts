export default class GiveWeapon {
    constructor() {
        this.init();
    }

    init(): void {
        onNet('clientGiveWeapon', (weaponHash: number) => {
            const playerPedId: number = GetPlayerPed(PlayerId());
            GiveWeaponToPed(playerPedId, weaponHash, 1200, false, true);
        });
    }
}
