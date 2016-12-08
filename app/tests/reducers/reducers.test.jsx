let expect = require('expect');
let df = require('deep-freeze-strict');

let reducers = require('reducers');

describe('Reducers',()=>{
  describe('searchTextReducer',()=>{
    it('should set searchText',()=>{
      let action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      let res = reducers.searchTextReducer(df(''),df(action));
      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer',()=>{
    it('should toggle showCompleted',()=>{
      let action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      let res = reducers.showCompletedReducer(df(false),df(action));
      expect(res).toEqual(true);
    });
  });

  describe('todoReducer',()=>{
    it('should add new todo',()=>{
      let action = {
        type: 'ADD_TODO',
        text: 'Walk the dog'
      };
      let res = reducers.todoReducer(df([]),df(action));
      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle todo completed status',()=>{
      let todos = [
        {
        id:123,
        text:"Horse",
        completed:false,
        createdAt: 0,
        completedAt: undefined
        },
        {
          id:1234,
          text:"Duck",
          completed:true,
          createdAt: 22,
          completedAt: 33
        }
      ];
      let action = {
        type: 'TOGGLE_TODO',
        id: 123
      };
      let res = reducers.todoReducer(df(todos),df(action));

      expect(res[0].completed).toBe(true);
      expect(res[0].completedAt).toBeA('number');
    });
  });
});
