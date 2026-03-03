declare const tt: any;

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  private onGetEntryReward() {
    this.node.active = false;
  }
  protected onLoad(): void {
    cc.director.on("onGetEntryReward", this.onGetEntryReward, this);
    this.onSupportSlideBar(false);
    if (cc.sys.BYTEDANCE_GAME !== cc.sys.platform) {
      this.onSupportSlideBar(true);
      return
    }
    // 判断用户是否支持侧边栏进入功能，有些旧版的抖音没有侧边栏，这种情况就把入口有礼那个按钮给隐藏掉
    tt.checkScene({
      scene: "sidebar",
      success: (res) => {
        if (res.isExist) {
          this.onSupportSlideBar(true);
        }
      },
      fail: (err) => {
        this.onSupportSlideBar(false);
      }
    })
  }
  protected onDestroy(): void {
    cc.director.off("onGetEntryReward", this.onGetEntryReward, this);
  }
  private onSupportSlideBar(b: boolean) {
    this.node.active = !!b;
  }
}
