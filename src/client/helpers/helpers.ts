//eslint-disable-next-line
type NuiRouteCallback = (payload: any) => void;

export default class Helpers {
    static sendMessage(message: string): void {
        emit('chat:addMessage', {
            args: [`${message}`]
        });
    }

    static registerNuiRoute(route: string, callback: NuiRouteCallback): void {
        RegisterNuiCallbackType(route);
        on(`__cfx_nui:${route}`, callback);
    }

    //eslint-disable-next-line
    static sendNui(module: string, data: any): void {
        data.module = module;
        SendNuiMessage(JSON.stringify(data));
    }

    static sendErrorMessage(message: string): void {
        emit('chat:addMessage', {
            color: [255, 0, 0],
            multiline: true,
            args: ['System', `${message}`]
        });
    }

    static sendSuccessMessage(message: string): void {
        emit('chat:addMessage', {
            color: [0, 255, 0],
            multiline: true,
            args: ['System', `${message}`]
        });
    }

    static sendInfoMessage(message: string): void {
        emit('chat:addMessage', {
            color: [31, 161, 216],
            multiline: true,
            args: ['System', `${message}`]
        });
    }


    static sendMessageToSourceId(source: number, message: string): void {
        emit('chat:addMessage', {
            args: [source, `${message}`]
        });
    }

    //eslint-disable-next-line
    static consoleLog(message: any): void {
        emitNet('clientLog', [`${message}`])
    }

    static isPlayerConnected(playerName: string): boolean {
        const playerList: number[] = GetActivePlayers();

        for (const player of playerList) {
            if (GetPlayerName(player) === playerName) {
                return true;
            }
        }

        return false;
    }

    static async sleep(ms: number): Promise<void> {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }

    static getConnectedPlayerId(playerName: string): number {
        const playerList: number[] = GetActivePlayers();

        for (const player of playerList) {
            if (GetPlayerName(player) === playerName) {
                return player;
            }
        }
    }

    static sendCommandNotFound(): void {
        Helpers.sendMessage('Command does not exist');
    }

    static getPlayerServerId(playerId: number): number {
        return GetPlayerServerId(playerId);
    }
}
