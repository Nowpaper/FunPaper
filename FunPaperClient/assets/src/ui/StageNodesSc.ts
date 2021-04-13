import { Msger } from "./Msger";

const { ccclass, property } = cc._decorator;

@ccclass
export default class StageNodesSc extends cc.Component {

    @property(cc.Camera)
    mainCamera: cc.Camera = null;
    
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        cc.systemEvent.on(Msger.onAntslineChange, this.onAntslineChange, this);
    }
    private onAntslineChange(rect: cc.Rect) {
        if (rect) {
            const targetRect = cc.rect(
                (rect.x + this.mainCamera.node.x) / this.mainCamera.zoomRatio,
                (rect.y + this.mainCamera.node.y) / this.mainCamera.zoomRatio,
                rect.width / this.mainCamera.zoomRatio,
                rect.height / this.mainCamera.zoomRatio);
            // this.node.children[0].x = targetRect.x;
            // this.node.children[0].y = targetRect.y;
            // this.node.children[1].x = targetRect.x + targetRect.width;
            // this.node.children[1].y = targetRect.y + targetRect.height;
            for(let node of this.node.children){
                if(node.getBoundingBox().intersects(targetRect)){
                    console.log(node);
                    
                }
            }
        }
    }
    // update (dt) {}
}
