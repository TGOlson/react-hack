import React from 'react/addons';
import R     from 'ramda';

export default class Counter extends React.Component {
  constructor() {
    super();

    this.state = {count: 0};

    this.incCount   = () => this.modifyCount(R.add(1));
    this.decCount   = () => this.modifyCount(R.add(-1));
    this.resetCount = () => this.modifyCount(R.always(0));

    // this.setCount = R.compose(this.setState, R.createMapEntry('count'));
    this.setCount = (x) => this.setState({count: x});

    // this.modifyCount = R.compose(this.setCount, R.apply(R.__, [this.state.count]));
    this.modifyCount = (f) => this.setCount(f(this.state.count));
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incCount}>+1</button>
        <button onClick={this.decCount}>-1</button>
        <button onClick={this.resetCount}>0</button>
      </div>
    );
  }
}
