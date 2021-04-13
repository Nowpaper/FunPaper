import KeyStatus from "./KeyStatus";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIRootSc extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
    }
    private onMouseDown(e: cc.Event.EventMouse) {
        if (KeyStatus.Instance.onlyKeyDown(cc.macro.KEY.ctrl)) {
            console.log(e.getLocation());
        }

    }
    // update (dt) {}
}
