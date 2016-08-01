var React = require('react')
var Pentagon = require('./Pentagon')

var Main = React.createClass({
  render: function () {
    return (
      <div className="main">
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
          <Pentagon size={100} fill="#3452a2" />
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