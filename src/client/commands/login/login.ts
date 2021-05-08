import Globals from "../../globals";
import Helpers from "../../helpers/helpers";

interface ILoginData {
    password: string
}

export default class Login {
    constructor() {
        this.init();
    }

    init(): void {
        RegisterCommand('login', (source: number, args: string[]) => {
            this.loginHandler(args[0]);
        }, false);

        this.registerNUICallback();
    }

    registerNUICallback(): void {
        Helpers.registerNuiRoute('login', (data: ILoginData) => {
            if (data.password) {
                this.loginHandler(data.password);

                return;
            }

            Helpers.sendErrorMessage('You did not provide a password');
        });
    }

    loginHandler(password: string): void {
        const playerServerId: number = GetPlayerServerId(PlayerId());
        const playerName: string = GetPlayerName(PlayerId());

        if (Globals.token && Globals.token.length > 0) {
            Helpers.sendErrorMessage('You have already logged in');

            return;
        }

        if (password === undefined || password.length < 8) {
            Helpers.sendErrorMessage('Password needs to be at least 8 characters long');

            return;
        }

        emitNet('serverLoginHandler', [playerServerId, playerName, password]);
    }
}
