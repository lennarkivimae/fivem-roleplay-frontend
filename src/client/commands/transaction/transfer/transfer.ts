import Globals from "../../../globals";
import Helpers from "../../../helpers/helpers";

interface ISettings {
    playerName: string,
    amount: number
}

export default class Transfer {
    constructor() {
        this.init();
    }

    init(): void {
        RegisterCommand('transfer', (source: number, args: string[]) => {
            const data: ISettings = {
                playerName: args[0],
                amount: Number(args[1]),
            }

            if (!Globals.token) {
                Helpers.sendErrorMessage('You are not logged in!');

                return;
            }

            if ((!data.playerName && data.playerName.length === 0) || (!data.amount)) {
                Helpers.sendErrorMessage('Syntax: /transfer name amount');

                return;
            }

            if (Helpers.isPlayerConnected(data.playerName)) {
                const playerName = GetPlayerName(PlayerId());
                const targetName = data.playerName;
                const playerId = Helpers.getPlayerServerId(PlayerId());
                const targetId = Helpers.getPlayerServerId(Helpers.getConnectedPlayerId(data.playerName));

                emitNet('serverTransferFunds', [Globals.token, playerId, targetId, playerName, targetName, data.amount]);

                return;
            }

            Helpers.sendErrorMessage('This player is not online');

        }, false);
    }
}
