let redux = require('redux');
let {searchTextReducer, showCompletedReducer,todoReducer} = require('reducers');

export let configure = () => {
  let reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todoReducer
  });

  let store = redux.createStore(reducer, redux.compose(

    window.devToolsExtension ? window.devToolsExtension() : f=>f
  ));

  return store;
}
