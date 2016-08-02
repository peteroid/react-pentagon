var React = require('react')
var Pentagon = require('./Pentagon')

var Main = React.createClass({
  randomizeRatio: function () {
    this.setState({
      ratio: (
        Array.apply(null, Array(5)).map(function () {
          return Math.random()
        })
      )
    })
  },
  getInitialState: function () {
    return {
      ratio: [1, 1, 1, 1, 1]
    }
  },
  componentDidMount: function () {
    setInterval(function () {
      this.randomizeRatio()
    }.bind(this), 2000)
  },
  render: function () {
    return (
      <div className="main">
        <section>
          <h1>
            {"ratio={[number]}"}
          </h1>
          <Pentagon ratio={this.state.ratio} isAnimating={true} size={150}
            fill={"#E6B95A"} duration={500} className="my-pentagon-2"/>
          <Pentagon size={150} fill="#A1EDDB" className="my-pentagon-3"/>
        </section>
        <section>
          <h1>
            {"size={number}"}
          </h1>
          <Pentagon size={100} />
        </section>
        <section>
          <h1>
            {"fill={string}"}
          </h1>
          <Pentagon size={75} fill="#3452a2" />
        </section>
        <section>
          <h1>
            {"Rock with your css!"}
          </h1>
          <Pentagon size={100} className="my-pentagon-1" />
        </section>
      </div>
    )
  }
})

module.exports = Main