import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import TodoList from 'TodoList';
import Todo from 'Todo';

describe('TodoList',()=>{
  it('should exist',()=>{
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item',()=>{
    let todos = [{
      id:1,
      text:"Horse"
    },{
      id:2,
      text:"Bull"
    }];
    let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList,Todo);

    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render empty message if no todos',()=>{
    let todos = [];
    let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    let $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container_message').length).toBe(1);
  });
});
