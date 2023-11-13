import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { SpawnInfo, ZepetoPlayers, LocalPlayer, ZepetoCharacter } from 'ZEPETO.Character.Controller'
import { WorldService } from 'ZEPETO.World';

export default class JoySitck extends ZepetoScriptBehaviour {
    Start() {
        // (Editor�� ���� �α�����)UserId�� �����ɴϴ�.  
        ZepetoPlayers.instance.CreatePlayerWithUserId(WorldService.userId, new SpawnInfo(), true);
        ZepetoPlayers.instance.OnAddedLocalPlayer.AddListener(() => {
            let _player: LocalPlayer = ZepetoPlayers.instance.LocalPlayer;
            _player.gameObject.layer = 20;
        });
    }
}