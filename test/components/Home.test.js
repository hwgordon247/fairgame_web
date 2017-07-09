import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Home from '../../client/components/Home';

describe('Home', () => {
  let wrapper;
  beforeAll((done) => {
    const mockStore = configureStore([]);
    const store = mockStore({});

    wrapper = shallow(
      <Provider store={store} >
        <Home />
      </Provider>
    );
    done();
  });

  it('should render the Home component', () => {
    expect(wrapper).toBeTruthy();
  });
});
