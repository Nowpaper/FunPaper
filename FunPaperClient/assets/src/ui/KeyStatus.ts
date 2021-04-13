
export default class KeyStatus {
    private static instance: KeyStatus = new KeyStatus();
    static get Instance(): KeyStatus {
        return KeyStatus.instance;
    }
    constructor() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }
    public KeyDown = {};
    private onKeyDown(e: cc.Event.EventKeyboard) {
        this.KeyDown[e.keyCode] = true;
        const ctrl = cc.sys.MACOS ? 91 : cc.macro.KEY.ctrl;
        if (this.KeyDown[ctrl] && this.KeyDown[cc.macro.KEY.shift] && this.KeyDown[cc.macro.KEY.z]) {
            console.log("ctrl + shift + z");

        } else if (this.KeyDown[ctrl] && this.KeyDown[cc.macro.KEY.z]) {
            console.log("ctrl + z");
        }
    }
    private onKeyUp(e: cc.Event.EventKeyboard) {
        this.KeyDown[e.keyCode] = false;
        if (e.keyCode == cc.macro.KEY.shift) {
            this.KeyDown = {};
        }
    }
    public onlyKeyDown(keyCode): boolean {
        let count = 0;
        for (let key in this.KeyDown) {
            if (this.KeyDown[key] == true) {
                count += 1;
            }
        }
        if (count == 1) {
            return this.KeyDown[keyCode];
        } else {
            return false;
        }
    }
}