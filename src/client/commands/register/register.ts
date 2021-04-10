import Helpers from "../../helpers/helpers";

interface IPayload {
    data: IPayloadData;
}

interface IPayloadData {
    password: string,
    passwordConfirmation: string
}

export default class Register {
    constructor() {
        this.init();
    }

    init(): void {
        RegisterCommand('register', (source: number, args: string[]): void => {
            const password: string = args[0];
            const confirmationPassword: string = args[1];

            this.registerHandler(password, confirmationPassword);
        }, false);

        this.registerNUICallback();
    }

    registerHandler(password: string, confirmationPassword: string): void {
        const playerName: string = GetPlayerName(PlayerId());

        if (password && password.length < 8) {
            Helpers.sendErrorMessage('Password needs to be atleast 8 characters long');

            return;
        }

        if (password === confirmationPassword) {
            const playerServerId: number = GetPlayerServerId(PlayerId());
            emitNet('registerUser', [playerServerId, playerName, password]);

            return;
        }

        Helpers.sendErrorMessage('Password confirmation does not match');
    }

    registerNUICallback(): void {
        Helpers.registerNuiRoute('register', (payload: IPayload) => {
            const password: string = payload.data.password;
            const confirmationPassword: string = payload.data.passwordConfirmation;

            if (password && confirmationPassword) {
                this.registerHandler(password, confirmationPassword);

                return;
            }

            Helpers.sendErrorMessage('Missing password or password confirmation');
        });
    }
}
