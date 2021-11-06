public class Cmd
{
	/// <summary>
	/// 获取角色列表
	/// </summary>
	public const string connector_role_getRoleList = "connector.role.getRoleList";
	/// <summary>
	/// 创建角色
	/// </summary>
	public const string connector_role_createRole = "connector.role.createRole";
	/// <summary>
	/// 删除角色
	/// </summary>
	public const string connector_role_deleteRole = "connector.role.deleteRole";
	/// <summary>
	/// 选定角色进入游戏
	/// </summary>
	public const string connector_main_enter = "connector.main.enter";
	/// <summary>
	/// 客户端加载场景完了，请求进入地图
	/// </summary>
	public const string map_main_enterMap = "map.main.enterMap";
	/// <summary>
	/// 移动
	/// </summary>
	public const string map_main_move = "map.main.move";
	/// <summary>
	/// 通知，移动
	/// </summary>
	public const string onMove = "onMove";
	/// <summary>
	/// 点击玩家查看信息
	/// </summary>
	public const string map_main_getPlayerInfo = "map.main.getPlayerInfo";
	/// <summary>
	/// 新增或移除实体
	/// </summary>
	public const string onEntityChange = "onEntityChange";
	/// <summary>
	/// 视野内聊天
	/// </summary>
	public const string onChatAOI = "onChatAOI";
	/// <summary>
	/// 本地图聊天
	/// </summary>
	public const string onChatMap = "onChatMap";
	/// <summary>
	/// 昵称修改
	/// </summary>
	public const string onNicknameChanged = "onNicknameChanged";
	/// <summary>
	/// 金币变化
	/// </summary>
	public const string onGoldChanged = "onGoldChanged";
	/// <summary>
	/// 被踢
	/// </summary>
	public const string onKicked = "onKicked";
	public const string onAskFriend = "onAskFriend";
	public const string onAddFriend = "onAddFriend";
	public const string onDelFriend = "onDelFriend";
	public const string onFriendInfoChange = "onFriendInfoChange";
	public const string info_bag_delItem = "info.bag.delItem";
	public const string info_bag_dropItem = "info.bag.dropItem";
	public const string onItemChanged = "onItemChanged";
	public const string info_bag_changePos = "info.bag.changePos";
	/// <summary>
	/// 装备道具
	/// </summary>
	public const string info_bag_equipItem = "info.bag.equipItem";
	/// <summary>
	/// 通知 装备改变
	/// </summary>
	public const string onEquipChanged = "onEquipChanged";
	/// <summary>
	/// hp mp 快速使用栏变化
	/// </summary>
	public const string onHpMpPosChanged = "onHpMpPosChanged";
	/// <summary>
	/// gm命令
	/// </summary>
	public const string info_main_gmCommit = "info.main.gmCommit";
	/// <summary>
	/// 学习技能
	/// </summary>
	public const string info_main_learnSkill = "info.main.learnSkill";
	/// <summary>
	/// 装备技能
	/// </summary>
	public const string info_main_equipSkill = "info.main.equipSkill";
	/// <summary>
	/// 等级经验发生变化
	/// </summary>
	public const string onLvExpChanged = "onLvExpChanged";
}