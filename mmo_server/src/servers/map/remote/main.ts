import { E_itemT } from "../../../app/svr_info/roleInfo";
import { MapMgr } from "../../../app/svr_map/mapMgr";
import { svr_map } from "../../../app/svr_map/svr_map";


declare global {
    interface Rpc {
        map: {
            main: Remote
        }
    }
}

export default class Remote {
    private mapMgr: MapMgr;
    constructor() {
        this.mapMgr = svr_map.mapMgr;
    }



    /** 离开地图 */
    leaveMap(mapIndex: number, uid: number, cb?: (err: number) => void) {
        console.log("leaveMap")
        let player = this.mapMgr.getPlayer(mapIndex, uid);
        if (player) {
            player.leaveMap();
        }
        cb && cb(0);
    }

    // /** 观察地图 */
    // watchMap(mapId: number, uid: number, sid: string) {
    //     // let role = this.mapMgr.getRole(mapId, uid);
    //     // if (role) {
    //     //     role.watchMap(sid);
    //     // }
    // }

    // /** 不再观察地图 */
    // unwatchMap(mapId: number, uid: number) {
    //     let role = this.mapMgr.getRole(mapId, uid);
    //     if (role) {
    //         role.unwatchMap();
    //     }
    // }


    isMapOk(mapId: number, mapIndex: number, uid: number, cb: (err: number, ok: boolean) => void) {
        let map = this.mapMgr.getMap(mapIndex);
        if (!map) {
            return cb(0, false);
        }
        cb(0, map.isPlayerHere(mapId, uid));
    }

    /** 装备变化了 */
    onEquipChanged(mapIndex: number, uid: number, equip: { "t": E_itemT, "id": number }) {
        let p = this.mapMgr.getPlayer(mapIndex, uid);
        p.onEquipChanged(equip);
    }

    /** 英雄升级了 */
    onHeroLvUp(mapIndex: number, uid: number, lv: number) {
        let p = this.mapMgr.getPlayer(mapIndex, uid);
        p.onLvUp(lv);
    }
}