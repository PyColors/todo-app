import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Todos from './Todos';

const props = {
    todos: [
        {id: 1, content: 'Love is the annswe'},
        {id: 2, content: 'coco'},
      ]
};

it('should renders correctly', () => {
  const tree = renderer
    .create(<Todos {...props} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


