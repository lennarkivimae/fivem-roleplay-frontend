import Helpers from "../../../helpers/helpers";

export default class Register {
    constructor() {
        this.init();
    }

    init(): void {
        onNet('/client/auth/register', (result: string) => {
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
