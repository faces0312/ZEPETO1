import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { GameObject, CharacterController, Collider, Vector3 } from 'UnityEngine';

export default class Die_Line2 extends ZepetoScriptBehaviour {

    public respawn2: GameObject;




    OnTriggerEnter(col: Collider) {
        if (col.gameObject.layer == 20) {
            col.enabled = false;
            col.transform.position = this.respawn2.transform.position;
            col.enabled = true;
        }
    }

}