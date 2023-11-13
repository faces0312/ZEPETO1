import { Time, Vector3, GameObject, Mathf, Collider, Collision, BoxCollider, MeshRenderer, Rigidbody, WaitForSeconds } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { SpawnInfo, ZepetoPlayers, LocalPlayer, ZepetoCharacter } from 'ZEPETO.Character.Controller'

export default class Jump_Wall extends ZepetoScriptBehaviour {

    public i: int;

    public time: float;
    public tmpTime: float;//현재시간
    public mesh: MeshRenderer;
    public collider: BoxCollider;
    public active: bool;

    Start() {
        this.time = 4;
        this.tmpTime = 0;
        this.active = true;
    }
    Update() {
        if (this.tmpTime >= this.time) {
            this.active = true;
            this.mesh.enabled = this.active;
            this.collider.enabled = this.active;
            this.tmpTime = 0;
        }
        if (this.active == false) {
            this.mesh.enabled = this.active;
            this.collider.enabled = this.active;
            this.tmpTime += Time.deltaTime;
        }
    }
    OnTriggerEnter(col: Collider) {
        if (col.gameObject.layer == 20) {
            this.StartCoroutine(this.Jump_Up(col));
            this.active = false;
        }
    }

    * Jump_Up(col: Collider) {
        for (this.i = 0; this.i < 30; this.i++) {
                
            col.transform.Translate(new Vector3(0, 0.3, 0.3));
            yield new WaitForSeconds(0.003);
        }
    }
}