import Helpers from "../../helpers/helpers";

export default class ClientMessage {
    constructor() {
        this.init();
    }

    init(): void {
        onNet('/client/receive/message', (args: string[]) => {
            const messageLevel: string = args[0];
            const message: string = args[1];

            if (messageLevel === 'error') {
                Helpers.sendErrorMessage(message);
                return;
            }

            if (messageLevel === 'success') {
                Helpers.sendSuccessMessage(message);

                return;
            }

            if (messageLevel === 'info') {
                Helpers.sendInfoMessage(message);

                return;
            }

            if (messageLevel === 'normal') {
                Helpers.sendMessage(message);

                return;
            }
        });
    }
}
