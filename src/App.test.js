import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';

const props = {
  deleteTodo: jest.fn(),
  content: '',
  todos: [
      {id: 2, content: 'coco'},
    ]
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should renders correctly', () => {
  const tree = renderer
    .create(<App {...props} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})

it('deleteTodo', () => {
  const deleteTodo = jest.fn();
  deleteTodo(deleteTodo.id, [{id: 1, content: 'Love is the annswe'}]);
  expect(deleteTodo).toHaveBeenCalledTimes(1);
})
