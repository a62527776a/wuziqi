// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        size: {
            type: cc.Integer,
            default: 0
        },
        x: {
            type: cc.Integer,
            default: 0
        },
        y: {
            type: cc.Integer,
            default: 0
        },
        // 棋子资源
        chessPrefab: {
            default: null,
            type: cc.Prefab
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        console.log('onLoad')
        this.node.on('mousedown', e => console.log(e), this)
        console.log(this)
    },

    handleEvent (e) {
        console.log(e)
    },

    start () {
    },

    // update (dt) {},
});
