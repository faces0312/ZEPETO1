import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { Time, Vector3, GameObject, Mathf, Collider, Collision, BoxCollider, MeshRenderer, WaitForSeconds, Mesh } from 'UnityEngine';

export default class Warp_End extends ZepetoScriptBehaviour {

    public warp_Point4: GameObject;

    public chpater3_bg: GameObject;
    public chpater3_obj: GameObject;

    public obj: GameObject;
    public smoke1: GameObject;
    public smoke2: GameObject;
    public smoke3: GameObject;

    public picture1: GameObject;
    public picture2: GameObject;
    public picture3: GameObject;
    public picture4: GameObject;
    public picture5: GameObject;
    public picture6: GameObject;
    public picture7: GameObject;
    public picture8: GameObject;
    public picture9: GameObject;
    public picture10: GameObject;
    public picture11: GameObject;
    public picture12: GameObject;


    
    public save_Parent: GameObject;

    public museum_obj: GameObject;
    public wall_door: GameObject;


    public time: GameObject;
    public time_Stop: GameObject;
    public time_Record: GameObject;

    public record: GameObject;
    public min_mesh: MeshRenderer;
    public mid_mesh: MeshRenderer;
    public sec_mesh: MeshRenderer;

    public smoke3_1: GameObject;
    public smoke3_2: GameObject;
    public firework1: GameObject;
    public firework2: GameObject;


    Start() {
        this.record.gameObject.SetActive(false);
        this.min_mesh.enabled = false;
        this.mid_mesh.enabled = false;
        this.sec_mesh.enabled = false;
    }

    OnTriggerEnter(col: Collider) {
        if (col.gameObject.layer == 20) {

            this.time.gameObject.SetActive(false);
            this.time_Stop.gameObject.SetActive(false);
            this.time_Record.gameObject.SetActive(true);
            this.record.gameObject.SetActive(true);
            this.min_mesh.enabled = true;
            this.mid_mesh.enabled = true;
            this.sec_mesh.enabled = true;


            this.obj.gameObject.SetActive(true);
            this.smoke1.gameObject.SetActive(true);
            this.smoke2.gameObject.SetActive(true);
            this.smoke3.gameObject.SetActive(true);
            this.museum_obj.gameObject.SetActive(true);


            this.firework1.gameObject.SetActive(true);
            this.firework2.gameObject.SetActive(true);
            this.smoke1.gameObject.SetActive(true);
            this.smoke2.gameObject.SetActive(true);

            this.save_Parent.gameObject.transform.position = this.warp_Point4.transform.position;
            this.StartCoroutine(this.Move_Stage(col));

        }
    }

    * Move_Stage(col: Collider) {
        yield new WaitForSeconds(2);


        this.chpater3_bg.gameObject.SetActive(false);
        this.chpater3_obj.gameObject.SetActive(false);
        this.wall_door.gameObject.SetActive(false);


        this.picture1.gameObject.SetActive(false);
        this.picture2.gameObject.SetActive(false);
        this.picture3.gameObject.SetActive(false);
        this.picture4.gameObject.SetActive(false);
        this.picture5.gameObject.SetActive(false);
        this.picture6.gameObject.SetActive(false);
        this.picture7.gameObject.SetActive(false);

        this.picture8.gameObject.SetActive(true);
        this.picture9.gameObject.SetActive(true);
        this.picture10.gameObject.SetActive(true);
        this.picture11.gameObject.SetActive(true);
        this.picture12.gameObject.SetActive(true);


        this.save_Parent.gameObject.SetActive(false);


        col.enabled = false;
        col.transform.position = this.warp_Point4.transform.position;
        col.enabled = true;
    }
}