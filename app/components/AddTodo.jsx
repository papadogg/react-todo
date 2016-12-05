import React from 'react';

class AddTodo extends React.Component {
  render(){
    return (
      <div className="container_footer">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="todoText" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
  handleSubmit(e){
    e.preventDefault();
    let todoText = this.refs.todoText.value;

    if(todoText.length > 0){
      this.props.onAddTodo(todoText);
      this.refs.todoText.value = "";
    } else {
      this.refs.todoText.focus();
    }

  }
}

export default AddTodo;
