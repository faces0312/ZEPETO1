import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { Time, Vector3, GameObject, Mathf, Collider, Collision } from 'UnityEngine';

//캐릭터와 상호작용하기위한 트리거 스크립트
export default class People_Wall extends ZepetoScriptBehaviour {

    public parent_Wall: GameObject;//부모 오브젝트


    OnTriggerEnter(col: Collider) {
        col.transform.SetParent(this.parent_Wall.transform);
    }

    OnTriggerExit(col: Collider) {
        col.transform.SetParent(null);
    }

    /*
    
    OnTriggerStay(col: Collider) {

        col.transform.position = (new Vector3(col.transform.position.x + this.parent_Wall.transform.position.x,
            col.transform.position.y + this.parent_Wall.transform.position.y,
            col.transform.position.z + this.parent_Wall.transform.position.z));
    }

col.transform.Translate(new Vector3(col.transform.position.x + this.parent_Wall.transform.position.x,
            col.transform.position.y + this.parent_Wall.transform.position.y,
            col.transform.position.z + this.parent_Wall.transform.position.z));
    */
}