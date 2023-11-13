import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import Player_Manager from '../Player_Manager'
import { GameObject, CharacterController, Collider, Vector3 } from 'UnityEngine';

export default class Percent extends ZepetoScriptBehaviour {

    public player_manager: Player_Manager;

    OnTriggerEnter(col: Collider) {
        if (col.gameObject.layer == 20) {
            this.player_manager.percent++;
        }
    }

}