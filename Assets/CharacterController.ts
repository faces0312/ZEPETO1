import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { SpawnInfo, ZepetoPlayers, LocalPlayer, ZepetoCharacter } from 'ZEPETO.Character.Controller'
import { WorldService } from 'ZEPETO.World'; 

export default class CharacterController extends ZepetoScriptBehaviour {
    Start() {       
    ZepetoPlayers.instance.CreatePlayerWithZepetoId("21yee", "21yee", new SpawnInfo(), true);
 
       ZepetoPlayers.instance.OnAddedLocalPlayer.AddListener(() => {
           let _player = ZepetoPlayers.instance.LocalPlayer; 
        });
    }

}