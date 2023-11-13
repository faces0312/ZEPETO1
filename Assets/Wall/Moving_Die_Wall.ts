import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { Time, Vector3, GameObject, Mathf, Collider, Collision } from 'UnityEngine';

export default class Moving_Die_Wall extends ZepetoScriptBehaviour {

    public moveSpeed: float;
    public startPos: GameObject;
    public endPos: GameObject;
    public fraction: float;
    public timer: float;

    public delay: float;

    Start() {

    }

    FixedUpdate() {

        if (this.delay > 0) {
            this.delay -= Time.deltaTime;
            return;
        }

        this.fraction = (Mathf.Sin(this.timer * Mathf.Deg2Rad) + 1) / 2;
        this.transform.position = Vector3.Lerp(this.startPos.transform.position, this.endPos.transform.position, this.fraction);
        this.timer += Time.deltaTime * this.moveSpeed;
    }

}