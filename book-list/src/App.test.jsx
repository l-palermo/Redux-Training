import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import Navbar from './components/navbar/Navbar';
import List from './components/list/List';
import AddBook from './components/addBooks/AddBook';

configure({ adapter: new Adapter() });

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App store={{}} />);
  });
  test('renders the app component', () => {
    expect(wrapper).toHaveLength(1);
  });
  test('render the Navbar', () => {
    const navbar = wrapper.find(Navbar);
    expect(navbar).toHaveLength(1);
  });
  test('renders the List', () => {
    const list = wrapper.find(List);
    expect(list).toHaveLength(1);
  });
  test('renders the AddBook', () => {
    const addBook = wrapper.find(AddBook);
    expect(addBook).toHaveLength(1);
  });
});
