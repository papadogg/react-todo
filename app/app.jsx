let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');
import {Provider} from 'react-redux';

import TodoApp from 'TodoApp';
import TodoAPI from 'TodoAPI';

let actions = require('actions');
let store = require('configureStore').configure();

store.subscribe(()=>{
  let state = store.getState();
  console.log('New state', state);
  TodoAPI.setTodos(state.todos);
});

let initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));



//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
    document.getElementById('app')
);
