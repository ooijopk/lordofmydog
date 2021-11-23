export default [

    "connector.role.getRoleList", // 获取角色列表
    "connector.role.createRole", // 创建角色
    "connector.role.deleteRole", // 删除角色

    "connector.main.enter", // 选定角色进入游戏

    "map.main.enterMap", // 客户端加载场景完了，请求进入地图
    "map.main.move", // 移动
    "onMove",   // 通知，移动
    "map.main.getPlayerInfo", // 点击玩家查看信息
    "map.main.changeNoFight",   // 切换战斗模式
    "map.main.useSkill",   // 使用技能

    "onEntityChange",   // 新增或移除实体
    "onChatAOI",    // 视野内聊天
    "onChatMap",    // 本地图聊天
    "onNicknameChanged",    // 昵称修改
    "onHpMaxChanged",   // 血上限变化了
    "onMpMaxChanged",   // 蓝上限变化了

    "onGoldChanged",    // 金币变化
    "onKicked", // 被踢

    "onAskFriend",
    "onAddFriend",
    "onDelFriend",
    "onFriendInfoChange",


    "info.bag.delItem",
    "info.bag.dropItem",
    "onItemChanged",
    "info.bag.changePos",
    "info.bag.equipItem",   // 装备道具
    "onEquipChanged",   // 通知 装备改变
    "onHpMpPosChanged", // hp mp 快速使用栏变化
    "info.bag.useHpMpAdd",  // hp mp 快速使用

    "info.main.gmCommit",   // gm命令
    "info.main.learnSkill",   // 学习技能
    "info.main.equipSkill",   // 装备技能

    "onLvExpChanged",   // 等级经验发生变化
]