import KeyStatus from "./KeyStatus";

const { ccclass, property } = cc._decorator;

@ccclass
export default class CameraMoveSc extends cc.Component {

    @property(cc.Camera)
    camera: cc.Camera = null;


    start() {
        this.node.on(cc.Node.EventType.MOUSE_MOVE, this.mouseMove, this);
    }
    private mouseMove(e: cc.Event.EventMouse) {
        if (KeyStatus.Instance.onlyKeyDown(cc.macro.KEY.space)) {
            this.camera.node.x -= e.getDeltaX();
            this.camera.node.y -= e.getDeltaY();
        }

    }
}
