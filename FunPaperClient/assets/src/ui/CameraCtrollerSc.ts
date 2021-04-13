import CameraMoveSc from "./CameraMoveSc";

const { ccclass, property } = cc._decorator;

@ccclass
export default class CameraCtrollerSc extends CameraMoveSc {
    start() {
        super.start();
        this.node.on(cc.Node.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
    }
    private onMouseWheel(e: cc.Event.EventMouse) {
        this.camera.zoomRatio += e.getScrollY() / 120;
        if (this.camera.zoomRatio <= 0.2) {
            this.camera.zoomRatio = 0.2;
        }else if( this.camera.zoomRatio >= 4){
            this.camera.zoomRatio = 4;
        }
    }
}