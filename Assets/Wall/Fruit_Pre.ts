import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { Time, Vector3, GameObject, Mathf, Collider, Collision, BoxCollider, MeshRenderer, WaitForSeconds } from 'UnityEngine';


export default class Fruit_Pre extends ZepetoScriptBehaviour {

    public boxCol: BoxCollider;

    public fruit1: GameObject;
    public fruit2: GameObject;
    public fruit3: GameObject;
    public fruit4: GameObject;

    OnTriggerEnter(col: Collider) {
        if (col.gameObject.layer == 20) {
            this.fruit1.SetActive(true);
            this.fruit2.SetActive(true);
            this.fruit3.SetActive(true);
            this.fruit4.SetActive(true);
            this.boxCol.enabled = false;
        }
    }

}