import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../../../../components/header/header' 

describe('<Header />', () => {
  it('is alive at application start', () => {
    let app = shallow(<Header />);
    expect(app.find('header').exists()).toBeTruthy();
  });

  // it('changes state on a click', () => {
  //   let app = mount(<Counter />);
  //   let button = app.find('button');
  //   button.simulate('click');
  //   expect(app.state('stuff')).toBe(false);
  //   expect(app.state('polarity')).toEqual('negative');
  // })
});