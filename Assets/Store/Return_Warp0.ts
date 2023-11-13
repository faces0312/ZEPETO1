import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { GameObject, CharacterController, Collider, Vector3, Quaternion, Time, WaitForSeconds, BoxCollider, Material, RenderSettings, Skybox } from 'UnityEngine';

export default class Return_Warp0 extends ZepetoScriptBehaviour {

    public warp_Point4: GameObject;//박물관 위치

    OnTriggerEnter(col: Collider) {
        if (col.gameObject.layer == 20) {

            col.enabled = false;
            col.transform.position = this.warp_Point4.transform.position;
            col.enabled = true;

        }
    }

}