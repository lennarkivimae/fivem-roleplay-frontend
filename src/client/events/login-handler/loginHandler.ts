import AdminCommands from "../../commands/admin/admin-commands";
import Transaction from "../../commands/transaction/transaction";
import Globals from "../../globals";
import Helpers from "../../helpers/helpers";

interface IUserData {
    token: string,
    role: string,
    cash: number,
    bank: number
}

export default class LoginHandler {
    constructor() {
        this.init();
    }

    init(): void {
        onNet('clientLoginHandler', (data: IUserData) => {
            const role: string = data.role;
            Globals.token = data.token;
            const playerName: string = GetPlayerName(PlayerId());

            this.registerCommands(role);
            //TODO: CHANGE TO TRUE
            SetNuiFocus(false, false);
            Helpers.sendNui('login', {
                data: {
                    isVisible: false
                }
            });

            Helpers.sendNui('funds', {
                data: {
                    cash: data.cash,
                    bank: data.bank
                }
            });

            Helpers.sendSuccessMessage(`Welcome back ${playerName}, enjoy your time!`);
        });
    }

    registerCommands(role: string): void {
        this.registerAllCommands();

        if (role === 'admin') {
            this.registerAdminCommands();
        }
    }

    registerAllCommands(): void {
        new Transaction;
    }

    registerAdminCommands(): void {
        new AdminCommands;
    }
}
