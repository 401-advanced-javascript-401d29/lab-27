import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../../../../components/counter/counter' 

describe('<Counter />', () => {
  it('is alive at application start', () => {
    let app = shallow(<Counter />);
    expect(app.find('section').exists()).toBeTruthy();
  });

  it('changes state of down clicker on a click', () => {
    let app = mount(<Counter />);
    let link = app.find('a.down');
    link.simulate('click');
    expect(app.state('count')).toBe(-1);
    expect(app.state('polarity')).toEqual('negative');
  })

  it('changes state of up clicker on a click', () => {
    let app = mount(<Counter />);
    let link = app.find('a.up');
    link.simulate('click');
    expect(app.state('count')).toBe(1);
    expect(app.state('polarity')).toEqual('positive');
  })
});

//52:53