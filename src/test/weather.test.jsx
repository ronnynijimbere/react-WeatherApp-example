import React from "react";
import Weather from "./components/top/weather.";
import { Shallow } from 'enzyme';

describe('<Weather />', () => {
	it('renders correctly the <Weather /> component', () => {
	  const component = shallow(<Weather />);
	  expect(component).toMatchSnapshot();
	});
});


