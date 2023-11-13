import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { GameObject, CharacterController, Collider, Vector3 } from 'UnityEngine';

export default class Player_Manager extends ZepetoScriptBehaviour {

    public respawn1: GameObject;


    OnTriggerEnter(col: Collider) {
        if (col.gameObject.layer == 20) {
            col.enabled = false;
            col.transform.position = this.respawn1.transform.position;
            col.enabled = true;
        }
    }

    /*public player: CharacterController;
    public respawn1: GameObject;

    Start() {    

    }

    FindPlayer() {
        this.player = GameObject.FindObjectOfType<CharacterController>();
    }

    Update() {
        if (!this.player) {
            this.FindPlayer();
            return;
        }

        if (!this.CheckAlive()) {
            this.RespawnPlayer();
        }
    }

    CheckAlive() {
        return this.player.transform.position.y > -10;
    }

    RespawnPlayer() {
        this.player.enabled = false;
        this.player.transform.position = this.respawn1.transform.position;
        this.player.enabled = true; 
    }*/

}