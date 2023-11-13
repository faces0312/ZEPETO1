import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class BigRockRotate extends ZepetoScriptBehaviour {

    public rotatespeed: float;

    Start() {
        this.rotatespeed = 0.05;
    }

    Update() {
        this.transform.Rotate(0, this.rotatespeed, 0);
    }

}