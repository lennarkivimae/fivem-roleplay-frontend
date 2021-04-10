import Globals from "../../../../globals";
import Helpers from "../../../../helpers/helpers";

interface IData {
    token: string,
    initiatorId: number,
    initiatorName: string,
    targetId: number,
    weaponHash: number
}

export default class Weapon {
    private data: IData;
    public weapon: string;
    public playerName: string;

    constructor(playerName: string, weapon: string) {
        this.weapon = weapon;
        this.playerName = playerName;
        this.init();
    }

    init(): void {
        this.giveWeapon();
    }

    giveWeapon(): void {
        if (!Helpers.isPlayerConnected(this.playerName)) {
            Helpers.sendMessage('This name does not exist');
            return;
        }

        if (!Globals.token) {
            Helpers.sendErrorMessage('You are not logged in');

            return;
        }

        this.data = {
            token: Globals.token,
            initiatorId: Helpers.getPlayerServerId(PlayerId()),
            initiatorName: GetPlayerName(PlayerId()),
            targetId: Helpers.getPlayerServerId(Helpers.getConnectedPlayerId(this.playerName)),
            weaponHash: GetHashKey(`WEAPON_${this.weapon.toUpperCase()}`)
        }

        emitNet('serverGiveWeapon', this.data);
    }
}
