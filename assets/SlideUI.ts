const { ccclass, property } = cc._decorator;
declare const ShowResult: any;
declare const tt: any;

function isInstallByteDancePlugin() {
  return typeof ShowResult !== "undefined";
}

function isFromSlidebar() {
  return ShowResult.location && ShowResult.location === "sidebar_card" && ShowResult.launch_from && ShowResult.launch_from === "homepage";
}

@ccclass
export default class SlideUI extends cc.Component {
  @property(cc.Node)
  nodeGoSlide: cc.Node = null;
  @property(cc.Node)
  nodeGetReward: cc.Node = null;

  protected onLoad(): void {
    cc.game.on(cc.game.EVENT_SHOW, this.fresh, this);
  }
  protected onDestroy(): void {
    cc.game.off(cc.game.EVENT_SHOW, this.fresh, this);
  }
  onGotoSidebar() {
    if (cc.sys.BYTEDANCE_GAME !== cc.sys.platform) {
      return
    }
    tt.navigateToScene({ scene: "sidebar" })
  }
  onGetReward() {
    console.log("领取奖励")
  }
  fresh() {
    this.nodeGetReward.active = false;
    this.nodeGoSlide.active = false;
    if (!isInstallByteDancePlugin()) {
      console.log("请安装抖音侧边栏插件");
      return;
    }
    if (isFromSlidebar()) {
      this.nodeGetReward.active = true;
    } else {
      this.nodeGoSlide.active = true;
    }
  }
  start() {

  }

}
