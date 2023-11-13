import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { GameObject, CharacterController, Collider, Vector3 } from 'UnityEngine';

export default class Die_Line2_4 extends ZepetoScriptBehaviour {

    public respawn4: GameObject;


    OnTriggerEnter(col: Collider) {
        if (col.gameObject.layer == 20) {
            col.enabled = false;
            col.transform.position = this.respawn4.transform.position;
            col.enabled = true;
        }
    }

}