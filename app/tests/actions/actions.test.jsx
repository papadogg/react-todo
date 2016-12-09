import expect from 'expect';
let actions = require('actions');

describe('Actions',()=>{
  it('should generate search text action',()=>{
    let action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };
    let res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate add todo action',()=>{
    let action = {
      type: 'ADD_TODO',
      text: 'Todo text'
    };
    let res = actions.addTodo(action.text);

    expect(res).toEqual(action);
  });

    it('should generate add todos action object',()=>{
       let todos = [
           {
               id:111,
               text: 'anything',
               completed: false,
               completedAt: undefined,
               createdAt:3333
           }
       ];
        let action = {
            type: 'ADD_TODOS',
            todos
        }
        let res = actions.addTodos(todos);
        
        expect(res).toEqual(action);
    });
  it('should generate toggle show completed acton',()=>{
    let action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    let res = actions.toggleShowCompleted(action);

    expect(res).toEqual(action);
  });

  it('should generate toggle todo action',()=>{
    let action = {
      type: 'TOGGLE_TODO',
      id: 22
    };
    let res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });
});
