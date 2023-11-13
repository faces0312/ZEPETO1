import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { Time, Vector3, GameObject, Mathf, Collider, Collision, BoxCollider, MeshRenderer, TextMesh } from 'UnityEngine';

export default class Time_Stop extends ZepetoScriptBehaviour {

    public is_Time: bool;
    public time_cnt: float;
    public time_cnt_min: int;

    public zepetoCamera: GameObject;
    public time_Stop_Parent: GameObject;
    public time_Min: TextMesh;
    public time_Sec: TextMesh;

    public time_Min_Record: TextMesh;
    public time_Sec_Record: TextMesh;


    Start() {
        this.is_Time = false;
        this.time_cnt_min = 0;
        this.zepetoCamera = GameObject.Find("ZepetoCamera");
        this.time_Stop_Parent.gameObject.transform.SetParent(this.zepetoCamera.transform);
        ///this.player = GameObject.FindObjectOfType<CharacterController>();
    }

    Update() {
        if (this.is_Time) {
            this.time_cnt += Time.deltaTime;
            if (this.time_cnt > 59) {
                this.time_cnt_min++;
                this.time_cnt = 0;
            }
            this.time_Min.text = (this.time_cnt_min).toString();
            this.time_Sec.text = (this.time_cnt % 60).toFixed().toString();
           
            if (this.time_Min.text.length == 1)
                this.time_Min.text = "0" + (this.time_cnt_min).toString();
            else
                this.time_Min.text = (this.time_cnt_min).toString();


            if (this.time_Sec.text.length == 1)
                this.time_Sec.text = "0" + (this.time_cnt % 60).toFixed().toString();
            else
                this.time_Sec.text = (this.time_cnt % 60).toFixed().toString();





            this.time_Min_Record.text = (this.time_cnt_min).toString();
            this.time_Sec_Record.text = (this.time_cnt % 60).toFixed().toString();

            if (this.time_Min_Record.text.length == 1)
                this.time_Min_Record.text = "0" + (this.time_cnt_min).toString();
            else
                this.time_Min_Record.text = (this.time_cnt_min).toString();


            if (this.time_Sec_Record.text.length == 1)
                this.time_Sec_Record.text = "0" + (this.time_cnt % 60).toFixed().toString();
            else
                this.time_Sec_Record.text = (this.time_cnt % 60).toFixed().toString();
            
        }
    }

    OnTriggerEnter(col: Collider) {
        if (col.gameObject.layer == 20) {
            this.is_Time = true;
        }
    }

}