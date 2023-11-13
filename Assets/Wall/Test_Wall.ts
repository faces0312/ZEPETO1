import { Time, Vector3 } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { Collider, Collider2D, Collision, Collision2D, Transform } from 'UnityEngine';
import { UnityEvent } from "UnityEngine.Events";



export default class Test_Wall extends ZepetoScriptBehaviour {

    public move_time: number = 2;
    public move_speed: number = 1;
    public move_left: boolean = false;

    

    public rotationSpeedX: number = 0.5;
    public rotationSpeedY: number = 0;
    public rotationSpeedZ: number = 0;

    
    Start() {
        this.Invoke("Move_Wall", this.move_time);
    }

    Update() {
        this.transform.Rotate(this.rotationSpeedX, this.rotationSpeedY, this.rotationSpeedZ);
        if (this.move_left == true)
            this.transform.Translate(new Vector3(1 * Time.deltaTime, 0, 0));
        else
            this.transform.Translate(new Vector3(-1 * Time.deltaTime, 0, 0));
    }

    Move_Wall() {
        if (this.move_left == false)
            this.move_left = true;
        else
            this.move_left = false;
        this.Invoke("Move_Wall", this.move_time);
    }

    

        
}