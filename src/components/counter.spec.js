import React   from 'react/addons';
import Counter from './counter';

var TestUtils = React.addons.TestUtils;

describe('Counter', function() {
  var counter;

  beforeEach(function() {
    counter = TestUtils.renderIntoDocument(<Counter />);
  });

  it('should be initialized with a count of zero', function() {
    expect(counter.state).toEqual({count: 0});
  });

  it('should be able to increase the count', function() {
    counter.incCount();
    expect(counter.state).toEqual({count: 1});
  });

  it('should be able to decrease the count', function() {
    counter.decCount();
    expect(counter.state).toEqual({count: -1});
  });

  it('should be able to reset the count', function() {
    counter.setState({count: 2});
    expect(counter.state).toEqual({count: 2});

    counter.resetCount();
    expect(counter.state).toEqual({count: 0});
  });
});
