// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // 棋盘行列
        chessBoardColRows: 15,

        chessBoardSize: 500,

        // 轮到谁下棋
        flag: 0, // 0白棋 1黑棋

        chessMap: [],
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    onLoad () {
        this.node.setPosition(0, 0);
        this.node.setContentSize(this.chessBoardSize, this.chessBoardSize);
        this.drawChessBoard()
        this.initChessMap()
        this.initClickHandle()
    },

    initChessMap: function () {
        const chessCellSize = this.chessBoardSize / this.chessBoardColRows
        for (let i = 0; i < this.chessBoardColRows; i++) {
            this.chessMap.push([])
            for (let j = 0; j < this.chessBoardColRows; j++) {
                let node = new cc.Node('chesscell')
                let chessCell = node.addComponent(cc.Sprite)
                node.width = node.height = chessCell.size = chessCellSize
                node.x = chessCell.x = i * chessCellSize
                node.y = chessCell.y = j * chessCellSize
                node.color = cc.Color.RED;
                this.chessMap[i].push(chessCell)
            }
        }
        
    },

    initClickHandle: function () {
        this.node.on('mouseup', this.checkChessCellEvent, this);
    },

    checkChessCellEvent (e) {
        let clickX = e._x - (960 - 500) / 2
        let clickY = e._y - (600 - 500) / 2
        let cellSize = this.chessBoardSize / this.chessBoardColRows
        let i = (clickX - (clickX % cellSize)) / cellSize
        let j = (clickY - (clickY % cellSize)) / cellSize
        console.log(i, j)
    },

    drawChessBoard: function () {
        let graphics = this.node.getComponent(cc.Graphics)
        let startPoint = -(this.chessBoardSize / 2)
        // 棋盘背景
        graphics.fillColor = new cc.Color().fromHEX('#FFFF00')
        graphics.strokeColor = new cc.Color().fromHEX('#000000')
        graphics.rect(startPoint, startPoint, this.chessBoardSize, this.chessBoardSize)
        graphics.fill()
        // 棋盘分割线
        let space = this.chessBoardSize / this.chessBoardColRows
        for (let i = 0; i < this.chessBoardColRows; i++) {
            let start = startPoint + space * i
            graphics.moveTo(startPoint, start)
            graphics.lineTo(this.chessBoardSize, start)
            graphics.stroke()
        }
        for (let i = 0; i < this.chessBoardColRows; i++) {
            let start = startPoint + space * i
            graphics.moveTo(start, startPoint)
            graphics.lineTo(start, this.chessBoardSize)
            graphics.stroke()
        }
    }

    // update (dt) {},
});
