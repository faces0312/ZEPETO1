import { ZepetoScriptBehaviour, ZepetoScriptableObject } from 'ZEPETO.Script'
import { Time, Vector3, GameObject, Mathf, Collider, Collision, BoxCollider, MeshRenderer, WaitForSeconds } from 'UnityEngine';

export default class Respawn_T3 extends ZepetoScriptBehaviour {

    public die_Line1: GameObject;
    public die_Line2: GameObject;
    public die_Line3: GameObject;
    public die_Line4: GameObject;
    public die_Line5: GameObject;



    OnTriggerEnter(col: Collider) {
        if (col.gameObject.layer == 20) {
            this.die_Line1.gameObject.SetActive(false);
            this.die_Line2.gameObject.SetActive(false);
            this.die_Line3.gameObject.SetActive(true);
            this.die_Line4.gameObject.SetActive(false);
            this.die_Line5.gameObject.SetActive(false);
        }
    }

}