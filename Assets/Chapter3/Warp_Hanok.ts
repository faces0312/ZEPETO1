import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { GameObject, CharacterController, Collider, Vector3 } from 'UnityEngine';

export default class Warp_Hanok extends ZepetoScriptBehaviour {

    public warp_Hanok: GameObject;

    OnTriggerEnter(col: Collider) {
        if (col.gameObject.layer == 20) {
            col.enabled = false;
            col.transform.position = this.warp_Hanok.transform.position;
            col.enabled = true;
        }
    }

}