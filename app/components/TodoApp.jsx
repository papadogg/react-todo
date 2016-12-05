import React from 'react';
import uuid from 'node-uuid';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import TodoAPI from 'TodoAPI';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCompleted: false,
            searchText: '',
            todos: TodoAPI.getTodos()
        }

    }
    componentDidUpdate(){
      TodoAPI.setTodos(this.state.todos);
    }
    handleOnSearch(showCompleted, searchText) {
        this.setState({
          showCompleted: showCompleted,
          searchText: searchText.toLowerCase()
        });
    }
    handleAddTodo(text) {
        this.setState({
          todos: [
            ...this.state.todos,
            {
              id: uuid(),
              text:text,
              completed: false
            }
          ]
        });
    }
    handleToggle(id){
      let updatedTodos = this.state.todos.map((todo)=>{
        if(todo.id === id){
          todo.completed = !todo.completed;
        }
        return todo;
      });

      this.setState({todos:updatedTodos});
    }
    render() {
        let {todos} = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleOnSearch.bind(this)}/>
                <TodoList todos={todos} onToggle={this.handleToggle.bind(this)}/>
                <AddTodo onAddTodo={this.handleAddTodo.bind(this)}/>
            </div>
          );
        }
}

export default TodoApp;
