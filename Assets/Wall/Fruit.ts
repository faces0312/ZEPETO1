import { LineRenderer, Transform, Vector3, GameObject, WaitForSeconds, TouchScreenKeyboard, CharacterController, Time, MeshRenderer } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'


export default class Fruit extends ZepetoScriptBehaviour {
    
    public player: CharacterController;
    public mesh: MeshRenderer;

    public delay: float;
    public tmp_delay: float;
    public is_flying: bool;

    /*public startloc: Transform;
    public endloc: Transform;
    public bulloc: Transform;*/

    public stpos: Vector3;
    public endpos: Vector3;
    /*public center: Vector3;
    public bulpos: Vector3;
    public cal: Vector3;
    public dis: Vector3;
    public t: float;*/
/*
    Awake() {
        this.bulloc.position = this.startloc.position; //물건을 쏘는 물건으로 위치 이동
    }*/

    Start() {
        this.mesh.enabled = false;
        this.tmp_delay = this.delay;
    }

    Find_Player() {
        this.player = GameObject.FindObjectOfType<CharacterController>();

        this.endpos = this.player.transform.position;
        this.stpos = this.transform.position;
        
    }

    FixedUpdate() {
        if (this.tmp_delay > 0) {
            this.tmp_delay -= Time.deltaTime;
        }
        else {
            this.Find_Player();
            this.is_flying = true;
            this.tmp_delay = this. delay;
        }
    }


    /*Update() {
        //시작 지점 끝지점 임시변수에 둘 다 대입


        if (this.is_flying == true) {
            this.cal.y = this.stpos.y - this.endpos.y;
            this.dis.x = this.stpos.x - this.endpos.x;
            this.dis.z - this.stpos.z - this.endpos.z;
            this.dis.y = Math.sqrt(this.stpos.x * this.stpos.x + this.stpos.z * this.stpos.z);

            this.center.y = (this.stpos.y + this.endpos.y) / 2;
            this.center.y -= 10;         //높이 조절

            this.stpos.y = Math.abs(this.stpos.y - this.center.y);
            this.endpos.y = Math.abs(this.endpos.y - this.center.y);

            if (this.t < 1.01) {
                this.t = this.t + 0.002; //0.002를 바꾸며 속도 조절 가능
            }

            this.transform.position = Vector3.Slerp(this.stpos, this.endpos, this.t);
            this.transform.position.y = this.transform.position.y + this.center.y - 4;

            this.StartCoroutine(this.timee());
        }
    }*/
}