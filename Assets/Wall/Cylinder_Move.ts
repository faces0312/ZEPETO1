import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { Time, Vector3, GameObject, Mathf, Collider, Collision, BoxCollider, MeshRenderer, WaitForSeconds } from 'UnityEngine';

export default class Cylinder_Move extends ZepetoScriptBehaviour {

    public moveSpeed: float;
    public startPos: GameObject;
    public endPos: GameObject;

    Start() {

    }

    FixedUpdate() {


        this.transform.position = Vector3.Lerp(this.startPos.transform.position, this.endPos.transform.position, this.moveSpeed * Time.deltaTime);
    }


}