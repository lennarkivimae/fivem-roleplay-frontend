export default class Weapon {
    constructor() {
        this.init();
    }

    init(): void {
        onNet('/client/admin/give/weapon', (weaponHash: number) => {
            const playerPedId: number = GetPlayerPed(PlayerId());
            GiveWeaponToPed(playerPedId, weaponHash, 1200, false, true);
        });
    }
}
