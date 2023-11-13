import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { GameObject, CharacterController, Collider, Vector3, Quaternion, Time, WaitForSeconds, BoxCollider } from 'UnityEngine';


export default class Museum_Door extends ZepetoScriptBehaviour {

    public box_Collider: BoxCollider;

    public i: int;
    public j: int;

    public angle_left: float;
    public angle_right: float;

    public left_door: GameObject;
    public right_door: GameObject;

    Start() {    

    }

    OnTriggerEnter(col: Collider) {
        if (col.gameObject.layer == 20) {
            this.StartCoroutine(this.Rotate_Right());
            this.StartCoroutine(this.Rotate_left());
            this.box_Collider.enabled = false;
        }
    }

    * Rotate_left() {
        this.angle_left = 0;
        this.left_door.gameObject.transform.rotation = Quaternion.Euler(0, 0, 0);

        for (this.i = -90; this.i > -180; this.i--) {
            this.left_door.gameObject.transform.rotation = Quaternion.Euler(0, this.i, 0);
            yield new WaitForSeconds(0.02);
        }

        this.left_door.gameObject.SetActive(false);
    }

    * Rotate_Right() {
        this.angle_right = 0;
        this.right_door.gameObject.transform.rotation = Quaternion.Euler(0, 0, 0);

        for (this.j = -90; this.j < 0; this.j++) {
            this.right_door.gameObject.transform.rotation = Quaternion.Euler(0, this.j, 0);
            yield new WaitForSeconds(0.02);
        }

        this.right_door.gameObject.SetActive(false);
    }

}