export default [

    "connector.role.getRoleList", // 获取角色列表
    "connector.role.createRole", // 创建角色
    "connector.role.deleteRole", // 删除角色

    "connector.main.enter", // 选定角色进入游戏

    "map.main.enterMap", // 客户端加载场景完了，请求进入地图
    "map.main.move", // 移动
    "onMove",   // 通知，移动

    "onEntityChange",   // 新增或移除实体
    "onChatAOI",    // 视野内聊天
    "onChatMap",    // 本地图聊天
    "onNicknameChanged",    // 昵称修改

    "onGoldChanged",    // 金币变化
    "onKicked", // 被踢

    "onAskFriend",
    "onAddFriend",
    "onDelFriend",
    "onFriendInfoChange"
]