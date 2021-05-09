export default class Commands {
    constructor() {
        this.init();
    }

    init(): void {
        RegisterCommand('toggleui', () => {
            SetNuiFocus(true, true);
        }, false);
    }
}
