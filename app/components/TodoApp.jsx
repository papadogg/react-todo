import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import uuid from 'node-uuid';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uuid(),
                    text: 'Wak the dog',
                    completed: false
                }, {
                    id: uuid(),
                    text: 'Clean the yard',
                    completed: false
                }, {
                    id: uuid(),
                    text: 'Close the door',
                    completed: true
                }, {
                    id: uuid(),
                    text: 'Wash the pants',
                    completed: false
                }
            ]
        }

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
