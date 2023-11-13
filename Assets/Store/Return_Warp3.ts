import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { GameObject, CharacterController, Collider, Vector3, Quaternion, Time, WaitForSeconds, BoxCollider, Material, RenderSettings, Skybox } from 'UnityEngine';

export default class Return_Warp3 extends ZepetoScriptBehaviour {

    public warp_Point3: GameObject;//Ã©ÅÍ 3 À§Ä¡

    OnTriggerEnter(col: Collider) {
        if (col.gameObject.layer == 20) {


            col.enabled = false;
            col.transform.position = this.warp_Point3.transform.position;
            col.enabled = true;

        }
    }

}