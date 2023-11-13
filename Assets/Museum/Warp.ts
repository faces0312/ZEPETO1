import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { GameObject, CharacterController, Collider, Vector3, Quaternion, Time, WaitForSeconds, BoxCollider, Material, RenderSettings, Skybox } from 'UnityEngine';

export default class Warp extends ZepetoScriptBehaviour {

    public mannequin1: GameObject;
    public mannequin1_pos: GameObject;
    public mannequin2: GameObject;
    public mannequin2_pos: GameObject;
    public mannequin3: GameObject;
    public mannequin3_pos: GameObject;
    public mannequin4: GameObject;
    public mannequin4_pos: GameObject;
    public mannequin5: GameObject;
    public mannequin5_pos: GameObject;


    public warp_point: GameObject;
    public museum_obj: GameObject;

    public warp_self: GameObject;

    public chpater2_bg: GameObject;
    public chpater2_obj: GameObject;

    public chpater3_bg: GameObject;
    public chpater3_obj: GameObject;


    Start() {
        this.mannequin1.transform.position = this.mannequin1_pos.transform.position;
        this.mannequin2.transform.position = this.mannequin2_pos.transform.position;
        this.mannequin3.transform.position = this.mannequin3_pos.transform.position;
        this.mannequin4.transform.position = this.mannequin4_pos.transform.position;
        this.mannequin5.transform.position = this.mannequin5_pos.transform.position;

        /*this.mannequin1.transform.localScale = this.mannequin1_pos.transform.localScale;
        this.mannequin2.transform.localScale = this.mannequin1_pos.transform.localScale;
        this.mannequin3.transform.localScale = this.mannequin1_pos.transform.localScale;
        this.mannequin4.transform.localScale = this.mannequin1_pos.transform.localScale;
        this.mannequin5.transform.localScale = this.mannequin1_pos.transform.localScale;*/

    }


    OnTriggerEnter(col: Collider) {
        if (col.gameObject.layer == 20) {
            this.StartCoroutine(this.Game_Start(col));
        }

    }

    * Game_Start(col: Collider) {
        col.enabled = false;
        col.transform.position = this.warp_point.transform.position; 
        col.enabled = true;
        this.museum_obj.gameObject.SetActive(false);
        this.chpater2_bg.gameObject.SetActive(false);
        this.chpater2_obj.gameObject.SetActive(false);
        this.chpater3_bg.gameObject.SetActive(false);
        this.chpater3_obj.gameObject.SetActive(false);


        this.warp_self.gameObject.SetActive(false);
    }
}