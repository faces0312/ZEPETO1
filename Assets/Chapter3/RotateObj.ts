import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class RotateObj extends ZepetoScriptBehaviour {

    public rotatespeed: float;
    public rotatespeed2: float;
    public rotatespeed3: float;

    Start() {
        this.rotatespeed = 0.05;
        this.rotatespeed2 = 0.1;
        this.rotatespeed3 = 0.12;
    }

    Update() {
        this.transform.Rotate(this.rotatespeed, this.rotatespeed2, this.rotatespeed3);
    }

}