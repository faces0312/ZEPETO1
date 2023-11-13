import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { GameObject, CharacterController, Collider, Vector3 } from 'UnityEngine';

export default class Die_Line2_3 extends ZepetoScriptBehaviour {

    public respawn3: GameObject;


    OnTriggerEnter(col: Collider) {
        if (col.gameObject.layer == 20) {
            col.enabled = false;
            col.transform.position = this.respawn3.transform.position;
            col.enabled = true;
        }
    }

}