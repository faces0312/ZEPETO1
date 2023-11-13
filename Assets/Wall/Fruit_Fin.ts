import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { Time, Vector3, GameObject, Mathf, Collider, Collision, BoxCollider, MeshRenderer, WaitForSeconds } from 'UnityEngine';

export default class Fruit_Fin extends ZepetoScriptBehaviour {

    public boxCol: BoxCollider;

    public fruit1: GameObject;
    public fruit2: GameObject;
    public fruit3: GameObject;
    public fruit4: GameObject;

    OnTriggerEnter(col: Collider) {
        if (col.gameObject.layer == 20) {
            this.fruit1.SetActive(false);
            this.fruit2.SetActive(false);
            this.fruit3.SetActive(false);
            this.fruit4.SetActive(false);
            this.boxCol.enabled = false;
        }
    }

}