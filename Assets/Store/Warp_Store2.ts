import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { GameObject, CharacterController, Collider, Vector3, Quaternion, Time, WaitForSeconds, BoxCollider, Material, RenderSettings, Skybox } from 'UnityEngine';

export default class Warp_Store2 extends ZepetoScriptBehaviour {

    public warp_Point0: GameObject;

    public return_Point0_1: GameObject;
    public return_Point1_1: GameObject;
    public return_Point2_1: GameObject;
    public return_Point3_1: GameObject;

    OnTriggerEnter(col: Collider) {
        if (col.gameObject.layer == 20) {

            this.return_Point0_1.gameObject.SetActive(false);
            this.return_Point1_1.gameObject.SetActive(false);
            this.return_Point2_1.gameObject.SetActive(true);
            this.return_Point3_1.gameObject.SetActive(false);


            col.enabled = false;
            col.transform.position = this.warp_Point0.transform.position;
            col.enabled = true;

        }
    }

}