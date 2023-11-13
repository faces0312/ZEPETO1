import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { Time, Vector3, GameObject, Mathf, Collider, Collision, BoxCollider, MeshRenderer, WaitForSeconds } from 'UnityEngine';


export default class Drop_Wall extends ZepetoScriptBehaviour {

    public pre_location: Vector3;

    public is_player: bool;//플레이어가 블록위에있는지
    public is_die: bool;//블록이 죽었는지


    public time: float;
    public tmpTime: float;//현재시간

    public die_time: float;//블록이 사라져있는 시간
    public die_tmpTime: float;//현재시간

    public i: int;
    public drop_wall: GameObject;
    public mesh: MeshRenderer;
    public collider: BoxCollider;
    public mesh_child: MeshRenderer;
    public collider_chlid: BoxCollider;
    public startPos: GameObject;
    public endPos: GameObject;

    Start() {
        this.pre_location = this.transform.position;

        this.tmpTime = this.time;

        this.die_time = 4;
        this.die_tmpTime = 0;

        this.is_player = false;
        this.is_die = false;
    }

    Update() {
        if (this.is_die == true) {
            this.die_tmpTime -= Time.deltaTime;
            if (this.die_tmpTime <= 0) {
                this.is_die = false;
                this.tmpTime = this.time
                this.drop_wall.transform.position = this.pre_location;
                this.mesh.enabled = true;
                this.collider.enabled = true;
                this.mesh_child.enabled = true;
                this.collider_chlid.enabled = true;
            }
        }
        if (this.is_player == true) {
            this.tmpTime -= Time.deltaTime;
            if (this.tmpTime <= 0) {
                this.drop_wall.transform.Translate(new Vector3(0, -100 * Time.deltaTime, 0));
                this.Invoke("Dis_Wall", 1);
            }
        }
    }

    OnTriggerEnter(col: Collider) {
        if (col.gameObject.layer == 20) {
            this.StartCoroutine(this.Shake());
            this.is_player = true;
        }
    }


    Dis_Wall() {
        this.mesh.enabled = false;
        this.collider.enabled = false;
        this.mesh_child.enabled = false;
        this.collider_chlid.enabled = false;
        this.is_die = true;
        this.die_tmpTime = this.die_time;
        this.is_player = false;
    }

    * Shake() {
        for (this.i = 0; this.i < 20; this.i++) {
            this.drop_wall.transform.position = Vector3.MoveTowards(this.transform.position, this.startPos.transform.position, 0.3);
            yield new WaitForSeconds(0.1);
            this.drop_wall.transform.position = Vector3.MoveTowards(this.transform.position, this.endPos.transform.position, 0.3)
            yield new WaitForSeconds(0.1);
        }
    }
}