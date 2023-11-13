import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { Time, Vector3, GameObject, Mathf, Collider, Collision, BoxCollider, MeshRenderer, WaitForSeconds } from 'UnityEngine';

export default class Cylinder extends ZepetoScriptBehaviour {

    public box_trigger: BoxCollider;

    public cylinder_obj: GameObject;
    public start_loc: GameObject;

    Start() {
        this.cylinder_obj.gameObject.SetActive(false);
    }

    OnTriggerEnter(col: Collider) {
        if (col.gameObject.layer == 20) {
            this.Invoke("Cylinder_drop", 0.1);
            this.box_trigger.enabled = false;
        }
    }

    Cylinder_drop() {
        this.cylinder_obj.gameObject.SetActive(true);
        this.cylinder_obj.gameObject.transform.position = this.start_loc.gameObject.transform.position;


        this.Invoke("Cylinder_dis", 5);
    }

    Cylinder_dis() {
        this.cylinder_obj.gameObject.SetActive(false);
        this.Invoke("Cylinder_drop", 0.1);
    }
}