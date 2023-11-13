import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { Time, Vector3, GameObject, Mathf, Collider, Collision, BoxCollider, MeshRenderer, WaitForSeconds } from 'UnityEngine';

export default class Dis_World extends ZepetoScriptBehaviour {

    public world1_bg: GameObject;
    public world1_wall: GameObject;

    public world2_bg: GameObject;
    public world2_wall: GameObject;

    OnTriggerEnter(col: Collider) {
        if (col.gameObject.layer == 20) {
            this.world1_bg.gameObject.SetActive(false);
            this.world1_wall.gameObject.SetActive(false);
            this.world2_bg.gameObject.SetActive(false);
            this.world2_wall.gameObject.SetActive(false);
        }
    }

}