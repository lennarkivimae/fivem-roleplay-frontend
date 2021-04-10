import DoesPlayerExist from "./does-player-exist/does-player-exist";
import GiveWeapon from "./give-weapon/give-weapon";
import LoginHandler from "./login-handler/loginHandler";
import ReceiveServerMessage from "./receive-server-message/receive-server-message";
import RegisterHandler from "./register-handler/register-handler";
import TeleportHandler from "./teleport-handler/teleport-handler";
import VehicleSpawn from "./vehicle-spawn/vehicle-spawn";

export default class Events {
    constructor() {
        this.init();
    }

    init(): void {
        new ReceiveServerMessage;
        new LoginHandler;
        new TeleportHandler;
        new GiveWeapon;
        new VehicleSpawn;
        new DoesPlayerExist;
        new RegisterHandler;
    }
}
