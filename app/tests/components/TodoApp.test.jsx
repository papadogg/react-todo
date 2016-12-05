import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import TodoApp from 'TodoApp';

describe('TodoApp',()=>{
  it('should exist',()=>{
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state on handleAddTodo',()=>{
    let todoText = "test text";
    let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.state.todos = [];
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle called',()=>{
    let todoData = {
      id:11,
      text: 'Test feature',
      completed:false,
      createdAt:0,
      completedAt:undefined
    };
    let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos:[todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false);

    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  it('should set completedAt to undefined when set completed status to false',()=>{
    let todoData = {
      id:11,
      text: 'Test feature',
      completed:true,
      createdAt:0,
      completedAt:60
    };
    let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos:[todoData]});

    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completedAt).toNotBeA('number');
  });
});
