import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { GameObject, CharacterController, Collider, Vector3, Quaternion, Time, WaitForSeconds, BoxCollider, Material, RenderSettings, Skybox } from 'UnityEngine';

export default class Return_Warp1 extends ZepetoScriptBehaviour {


    public warp_Point1: GameObject;//Ã©ÅÍ 1 À§Ä¡

    OnTriggerEnter(col: Collider) {
        if (col.gameObject.layer == 20) {

            col.enabled = false;
            col.transform.position = this.warp_Point1.transform.position;
            col.enabled = true;

        }
    }

}