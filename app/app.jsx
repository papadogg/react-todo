let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');

import TodoApp from 'TodoApp';

let actions = require('actions');
let store = require('configureStore').configure();

store.subscribe(()=>{
  console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
    <TodoApp/>,
    document.getElementById('app')
);
