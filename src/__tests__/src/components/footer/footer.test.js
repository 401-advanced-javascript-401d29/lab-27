import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../../../../components/footer/footer' 

describe('<Footer />', () => {
  it('is alive at application start', () => {
    let app = shallow(<Footer />);
    expect(app.find('footer').exists()).toBeTruthy();
  });

  // it('changes state on a click', () => {
  //   let app = mount(<Counter />);
  //   let button = app.find('button');
  //   button.simulate('click');
  //   expect(app.state('stuff')).toBe(false);
  //   expect(app.state('polarity')).toEqual('negative');
  // })
});