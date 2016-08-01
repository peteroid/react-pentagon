var React = require('react')

var Pentagon = React.createClass({
  getInitialState: function () {
    return {}
  },
  componentDidMount: function () {
  },
  toRadian: function (deg) {
    return deg /180 * Math.PI
  },
  caluatePoints: function (ratios) {
    if (!ratios)
      ratios = [1.0, 1.0, 1.0, 1.0, 1.0]
    var x = this.props.size
    var _36R = this.toRadian(36)
    var _18R = this.toRadian(18)
    var sin18D = Math.sin(_18R)
    var cos18D = Math.cos(_18R)

    var xTan36D = Math.tan(_36R) * x
    var xOverCos36D = x / Math.cos(_36R)
    var points = [
      {
        x: x,
        y: 0
      },{
        x: x * 2,
        y: xTan36D
      },{
        x: xOverCos36D * (sin18D + 1),
        y: xOverCos36D * cos18D + xTan36D
      },{
        x: xOverCos36D * sin18D,
        y: xOverCos36D * cos18D + xTan36D
      },{
        x: 0,
        y: xTan36D
      }
    ]

    var c = this.caluateMidPoint()

    var returnPoints = points.map((p, index) => {
      return [
        p.x * ratios[index] + c.cx * (1 - ratios[index]),
        p.y * ratios[index] + c.cy * (1 - ratios[index])
      ]
    })
    // console.log(returnPoints)
    return returnPoints
  },
  caluateMidPoint: function () {
    return {
      cx: this.props.size,
      cy: this.props.size / Math.cos(this.toRadian(36)) / Math.sin(this.toRadian(72)) * Math.sin(this.toRadian(54))
    }
  },
  render: function() {
    return (
      <svg width={this.props.size * 3} height={this.props.size * 3}>
        <polygon points={this.caluatePoints()} fill="black"/>
        <polygon points={this.caluatePoints(this.props.ratios)} fill="red"/>
      </svg>
    )
  }
})

module.exports = Pentagon