import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { Time, Vector3, GameObject, Mathf, Collider, Collision, BoxCollider, MeshRenderer, WaitForSeconds,  } from 'UnityEngine';

export default class Fruit_Trigger extends ZepetoScriptBehaviour {

    OnTriggerEnter(col: Collider) {
        if (col.gameObject.layer == 20) {
            this.gameObject.SetActive(false);
            col.gameObject.transform.position = Vector3.MoveTowards(col.gameObject.transform.position, new Vector3(-1,1,0),1);
        }
    }

}