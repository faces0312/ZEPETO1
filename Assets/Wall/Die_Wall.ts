import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { GameObject, CharacterController, Collider } from 'UnityEngine';

export default class Die_Wall extends ZepetoScriptBehaviour {

    public respawn1: GameObject;

    OnTriggerEnter(col: Collider) {
        if (col.gameObject.layer == 20) {
            col.enabled = false;
            col.transform.position = this.respawn1.gameObject.transform.position;
            col.enabled = true;
        }
    }

}