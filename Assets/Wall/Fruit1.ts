import {
    LineRenderer, Transform, Vector3, GameObject, WaitForSeconds, TouchScreenKeyboard, CharacterController, Time, MeshRenderer, CapsuleCollider,
    Mathf, Quaternion
} from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class Fruit1 extends ZepetoScriptBehaviour {

    public monkey: GameObject;
    public player: CharacterController;
    public mesh: MeshRenderer;
    public capsule: CapsuleCollider;

    public is_flying: bool;

    public stpos: Vector3;
    public endpos: Vector3;
    public center: Vector3;



    public speed: float;

    Start() {
        this.transform.position = this.monkey.transform.position;
        this.mesh.enabled = false;
        this.capsule.enabled = false;

        this.Invoke("Find_Player", 3);
    }


    Find_Player() {
        this.player = GameObject.FindObjectOfType<CharacterController>();

        this.transform.position = this.monkey.transform.position;
        this.endpos = this.player.transform.position;
        this.stpos = this.transform.position;

        this.is_flying = true;
        this.mesh.enabled = true;
        this.capsule.enabled = true;


        this.Invoke("Dis_Mesh", 8);
        this.Invoke("Find_Player", 12);
        
    }

    Dis_Mesh() {
        this.is_flying = false;
        this.mesh.enabled = false;
        this.capsule.enabled = false;
    }


    FixedUpdate() {
        if (this.is_flying == true) {
            this.transform.position = Vector3.Slerp(this.stpos, this.endpos, 1 * Time.deltaTime);
            this.stpos = this.transform.position;
        }
    }
}