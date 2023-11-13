import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { GameObject, CharacterController, Collider, Vector3, Quaternion, Time, WaitForSeconds, BoxCollider, Material, RenderSettings, Skybox } from 'UnityEngine';

export default class Return_Warp2 extends ZepetoScriptBehaviour {

    public warp_Point2: GameObject;//Ã©ÅÍ 2 À§Ä¡

    OnTriggerEnter(col: Collider) {
        if (col.gameObject.layer == 20) {

            col.enabled = false;
            col.transform.position = this.warp_Point2.transform.position;
            col.enabled = true;

        }
    }

}