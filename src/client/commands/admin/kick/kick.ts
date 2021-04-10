import Globals from "../../../globals";
import Helpers from "../../../helpers/helpers";

interface IData {
    token: string,
    initiatorId: number,
    initiatorName: string,
    targetId: number,
    targetName: string,
    reason: string
}

export default class Kick {
    private data: IData;

    constructor() {
        this.init();
    }

    init(): void {
        RegisterCommand('kick', (source: number, args: string[]) => {
            const targetName: string = args[0];
            let reason: string = '';

            for (let index = 1; index < args.length; index++) {
                if (index === 1) {
                    reason += args[index];

                    continue;
                }

                reason += " " + args[index];
            }

            if (!Helpers.isPlayerConnected(targetName)) {
                Helpers.sendErrorMessage('The player does not exist');

                return;
            }

            if (Globals.token) {
                this.data = {
                    token: Globals.token,
                    initiatorId: Helpers.getPlayerServerId(PlayerId()),
                    initiatorName: GetPlayerName(PlayerId()),
                    targetId: Helpers.getConnectedPlayerId(targetName),
                    targetName: targetName,
                    reason: reason
                }

                emitNet('serverKickPlayer', this.data);
                return;
            }

            Helpers.sendErrorMessage('You are not logged in');
        }, false);
    }
}
