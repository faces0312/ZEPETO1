import { Time, Vector3, GameObject, Mathf, Collider, Collision, BoxCollider, MeshRenderer } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class Disable_Wall extends ZepetoScriptBehaviour {

    public time: float;
    public tmpTime: float;//현재시간
    public mesh: MeshRenderer;
    public collider: BoxCollider;
    public active: bool;

    public delay: float;

    Start() {
        this.time = 4;
        this.tmpTime = this.time;
    }

    Update() {

        if (this.delay > 0) {
            this.delay -= Time.deltaTime;
            return;
        }

        if (this.tmpTime > 0) {
            this.tmpTime -= Time.deltaTime;
        }
        else {
            this.tmpTime = this.time;
            this.active = !this.active;
            this.mesh.enabled = this.active;
            this.collider.enabled = this.active;
        }
        
    }
}