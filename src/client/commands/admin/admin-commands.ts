import Give from "./give/give";
import Kick from "./kick/kick";
import Spawn from "./spawn/spawn";
import Teleport from "./teleport/teleport";

export default class AdminCommands {
    constructor() {
        this.init();
    }

    init(): void {
        new Give;
        new Spawn;
        new Teleport;
        new Kick;
    }
}
