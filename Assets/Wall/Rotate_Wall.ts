import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { BoxCollider, MeshRenderer, Time } from 'UnityEngine';


export default class Rotate_Wall extends ZepetoScriptBehaviour {

    public rotationSpeedX: number = 0;
    public rotationSpeedY: number = 0.5;
    public rotationSpeedZ: number = 0;



    FixedUpdate() {
        this.transform.Rotate(this.rotationSpeedX, this.rotationSpeedY, this.rotationSpeedZ);
    }
}