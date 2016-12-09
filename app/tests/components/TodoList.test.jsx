import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import {Provider} from 'react-redux';

import {configure} from 'configureStore';
import ConnectedTodo,{Todo} from 'Todo';
import ConnectedTodoList,{TodoList} from 'TodoList';

describe('TodoList',()=>{
  it('should exist',()=>{
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item',()=>{
    let todos = [{
      id:1,
      text:"Horse",
      completed: false,
      completedAt: undefined,
      createdAt: 500
    },{
      id:2,
      text:"Hurma",
      completed: false,
      completedAt: undefined,
      createdAt: 500
    }];
    let store = configure({
      todos
    });
    let provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>
    );
    let todoList = TestUtils.scryRenderedComponentsWithType(provider,ConnectedTodoList)[0];
    let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList,ConnectedTodo);

    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render empty message if no todos',()=>{
    let todos = [];
    let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    let $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container_message').length).toBe(1);
  });
});
