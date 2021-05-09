import Helpers from "../../../helpers/helpers";

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
        this.registerRoute();
    }

    registerRoute(): void {
        Helpers.registerNuiRoute('/client/auth/register', (payload: IPayload) => {
            const password: string = payload.data.password;
            const confirmationPassword: string = payload.data.passwordConfirmation;

            if (password && confirmationPassword) {
                this.registerHandler(password, confirmationPassword);

                return;
            }

            Helpers.sendErrorMessage('Missing password or password confirmation');
        });
    }

    registerHandler(password: string, confirmationPassword: string): void {
        const playerName: string = GetPlayerName(PlayerId());

        if (password && password.length < 8) {
            Helpers.sendErrorMessage('Password needs to be at least 8 characters long');

            return;
        }

        if (password === confirmationPassword) {
            const playerServerId: number = GetPlayerServerId(PlayerId());
            emitNet('/server/auth/register', [playerServerId, playerName, password]);

            return;
        }

        Helpers.sendErrorMessage('Password confirmation does not match');
    }
}
