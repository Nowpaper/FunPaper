import { Msger } from "./Msger";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AntslineDrawSc extends cc.Component {

    // onLoad () {}
    private graphics: cc.Graphics;
    start() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.graphics = this.getComponent(cc.Graphics);
    }
    private beginPoint: cc.Vec2 = null;
    private endPoint: cc.Vec2 = null;
    private onTouchStart(e: cc.Event.EventTouch) {
        this.beginPoint = e.getLocationInView();
        this.beginPoint = this.node.convertToNodeSpaceAR(e.touch.getLocation());
        cc.systemEvent.emit(Msger.onAntslineChange, cc.rect(this.beginPoint.x,this.beginPoint.y));
    }
    private onTouchMove(e: cc.Event.EventTouch) {
        this.endPoint = e.getLocationInView();
        this.endPoint = this.node.convertToNodeSpaceAR(e.touch.getLocation());
        this.draw();
    }
    private onTouchEnd(e: cc.Event.EventTouch) {
        this.beginPoint = this.endPoint = null;
        this.graphics.clear();
        cc.systemEvent.emit(Msger.onAntslineChange, null);
    }
    protected draw() {
        if (this.beginPoint && this.endPoint) {
            this.graphics.clear();
            const rect = cc.rect(
                this.beginPoint.x < this.endPoint.x ? this.beginPoint.x : this.endPoint.x,
                this.beginPoint.y < this.endPoint.y ? this.beginPoint.y : this.endPoint.y,
                Math.abs(this.beginPoint.x - this.endPoint.x),
                Math.abs(this.beginPoint.y - this.endPoint.y)
            );
            this.graphics.rect(rect.x, rect.y, rect.width, rect.height);
            this.graphics.fill();
            this.graphics.stroke();
            cc.systemEvent.emit(Msger.onAntslineChange,rect);
        }
    }
    // update (dt) {}
}
