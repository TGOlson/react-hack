import React from 'react/addons';
import R     from 'ramda';


export default React.createClass({
  getInitialState: R.always({count: 0}),

  incCount: function() {
    this.setState({count: this.state.count + 1})
  },

  decCount: function() {
    this.setState({count: this.state.count - 1})
  },

  resetCount: function() {
    this.setState(this.getInitialState())
  },

  render: function() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incCount}>+1</button>
        <button onClick={this.decCount}>-1</button>
        <button onClick={this.resetCount}>0</button>
      </div>
    );
  }
});
