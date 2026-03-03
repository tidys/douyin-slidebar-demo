declare const tt: any;

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

  protected onLoad(): void {
    this.onSupportSlideBar(false);
    debugger
    if (cc.sys.BYTEDANCE_GAME !== cc.sys.platform) {
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
  private onSupportSlideBar(b: boolean) {
    this.node.active = !!b;
  }
}
