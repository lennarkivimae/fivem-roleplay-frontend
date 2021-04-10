import Helpers from "../../helpers/helpers";

export default class RegisterHandler {
    constructor() {
        this.init();
    }

    init(): void {
        onNet('clientRegisterHandler', (result: string) => {
            if (Boolean(result) === true) {
                Helpers.sendNui('register', {
                    data: {
                        isVisible: false
                    }
                });

                Helpers.sendNui('login', {
                    data: {
                        isVisible:  true
                    }
                });
            }
        });
    }
}
