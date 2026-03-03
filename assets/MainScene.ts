
const { ccclass, property } = cc._decorator;
declare const tt: any;

@ccclass
export default class MainScene extends cc.Component {
  @property(cc.Prefab)
  prefabSlideUI: cc.Prefab = null;

  onClickEntryReward() {
    const node = cc.instantiate(this.prefabSlideUI);
    node.setPosition(0, 0)
    this.node.addChild(node);
  }


  start() {

  }
}
