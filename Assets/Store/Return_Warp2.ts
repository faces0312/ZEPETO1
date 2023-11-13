import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { GameObject, CharacterController, Collider, Vector3, Quaternion, Time, WaitForSeconds, BoxCollider, Material, RenderSettings, Skybox } from 'UnityEngine';

export default class Return_Warp2 extends ZepetoScriptBehaviour {

    public warp_Point2: GameObject;//é�� 2 ��ġ

    OnTriggerEnter(col: Collider) {
        if (col.gameObject.layer == 20) {

            col.enabled = false;
            col.transform.position = this.warp_Point2.transform.position;
            col.enabled = true;

        }
    }

}