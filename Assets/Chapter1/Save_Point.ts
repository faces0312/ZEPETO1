import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { Time, Vector3, GameObject, Mathf, Collider, Collision, BoxCollider, MeshRenderer, WaitForSeconds, MeshFilter } from 'UnityEngine';

export default class Save_Point extends ZepetoScriptBehaviour {

    public warp_Point2: GameObject;

    public die_Line2_1: GameObject;
    public die_Line2_2: GameObject;
    public die_Line2_3: GameObject;
    public die_Line2_4: GameObject;
    public die_Line2_5: GameObject;

    public save_Parent: GameObject;

    public chpater1_bg: GameObject;
    public chpater1_obj: GameObject;

    public chpater2_bg: GameObject;
    public chpater2_obj: GameObject;

    public smoke1: GameObject;
    public smoke2: GameObject;
    public firework1: GameObject;
    public firework2: GameObject;

    //public sphere: MeshFilter;

    OnTriggerEnter(col: Collider) {
        if (col.gameObject.layer == 20) {

            this.firework1.gameObject.SetActive(true);
            this.firework2.gameObject.SetActive(true);
            this.smoke1.gameObject.SetActive(true);
            this.smoke2.gameObject.SetActive(true);

            this.save_Parent.gameObject.transform.position = this.warp_Point2.transform.position;

            this.StartCoroutine(this.Move_Stage(col));
        }
    }

    * Move_Stage(col: Collider) {
        yield new WaitForSeconds(2);

        this.chpater2_bg.gameObject.SetActive(true);
        this.chpater2_obj.gameObject.SetActive(true);

        this.die_Line2_1.gameObject.SetActive(true);
        this.die_Line2_2.gameObject.SetActive(false);
        this.die_Line2_3.gameObject.SetActive(false);
        this.die_Line2_4.gameObject.SetActive(false);
        this.die_Line2_5.gameObject.SetActive(false);



        col.enabled = false;
        col.transform.position = this.warp_Point2.transform.position;
        col.enabled = true;

        this.chpater1_bg.gameObject.SetActive(false);
        this.chpater1_obj.gameObject.SetActive(false);

        this.save_Parent.gameObject.SetActive(false);
    }

}