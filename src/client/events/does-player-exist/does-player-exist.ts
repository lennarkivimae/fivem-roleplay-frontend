import Helpers from "../../helpers/helpers";

export default class DoesPlayerExist {
    constructor() {
        this.init();
    }

    init(): void {
        onNet('clientDoesPlayerExist', (result: string) => {
            const doesUserExist: string = result;
            SetNuiFocus(true, true);

            if (doesUserExist === 'true') {
                Helpers.sendNui('login', {
                    data: {
                        isVisible: true
                    }
                });

                return;
            }

            Helpers.sendNui('register', {
                data: {
                    isVisible: true
                }
            });
        });
    }
}
