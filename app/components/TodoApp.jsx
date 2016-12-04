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
                    text: 'Wak the dog'
                }, {
                    id: uuid(),
                    text: 'Clean the yard'
                }, {
                    id: uuid(),
                    text: 'Close the door'
                }, {
                    id: uuid(),
                    text: 'Wash the pants'
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
              text:text
            }
          ]
        });
    }
    render() {
        let {todos} = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleOnSearch.bind(this)}/>
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handleAddTodo.bind(this)}/>
            </div>
          );
        }
}

export default TodoApp;
