import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';

import App from '../../App';

// put this in following the tutorial, but doesn't seem to be required
// should remove after I understand this a bit better
beforeAll(() => {
  global.localStorage = {
    getItem: () => 'someToken'
  };
});

test('App renders without crashing', () => {
  const wrapper = shallow(<App/>);
})

test('App will call componentWillMount when mounted', () => {
  const onDidMount = jest.fn();
  App.prototype.componentDidMount = onDidMount;
  const wrapper = mount(<Router><App/></Router>);
  expect(onDidMount).toHaveBeenCalledTimes(1)
});