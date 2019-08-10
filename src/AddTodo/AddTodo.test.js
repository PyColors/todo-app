import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import AddTodo from './AddTodo';

const props = {
    handleChange: jest.fn(),
    content: '',
    todos: [
        {id: 2, content: 'coco'},
      ]
};

it('should renders correctly', () => {
  const tree = renderer
    .create(<AddTodo {...props} />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});


it('should renders correctly', () => {
const wrapper = shallow((
    <AddTodo

    />
  ));
  console.log(wrapper.debug());
});