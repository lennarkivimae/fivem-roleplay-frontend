import Login from "./login/login";
import Register from "./register/register";

export default class Commands {
    constructor() {
        this.init();
    }

    init(): void {
        RegisterCommand('toggleui', () => {
            SetNuiFocus(true, true);
        }, false);

        this.authenticationCommands();
    }

    authenticationCommands(): void {
        new Register;
        new Login;
    }
}
