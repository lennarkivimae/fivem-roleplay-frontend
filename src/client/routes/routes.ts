import ClientMessage from './client/clientMessage';
import ClientWeapon from './client/admin/give/clientWeapon';
import ClientVehicle from './client/admin/spawn/clientVehicle';
import ClientTeleport from './client/admin/clientTeleport';
import ClientLogin from './client/auth/clientLogin';
import ClientRegister from './client/auth/clientRegister';
import ClientPlayerExists from './client/check/player/clientPlayerExists';
import GuiLogin from './gui/auth/guiLogin';
import GuiRegister from './gui/auth/guiRegister';

export default class Routes {
    constructor() {
        this.register();
    }

    register(): void {
        this.registerClientRoutes();
        this.registerGuiRoutes();
    }

    registerClientRoutes(): void {
        new ClientMessage();
        new ClientWeapon();
        new ClientVehicle();
        new ClientTeleport();
        new ClientLogin();
        new ClientRegister();
        new ClientPlayerExists();
    }

    registerGuiRoutes(): void {
        new GuiLogin();
        new GuiRegister();
    }
}
