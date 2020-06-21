// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // 类型 是黑子还是白子
        typeKey: {
            default: 0,
            type: cc.Integer
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    onLoad () {

    },

    // update (dt) {},
});
