import React from 'react';
import {connect} from 'react-redux';
let actions = require ('actions');


export class AddTodo extends React.Component {
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
    let {dispatch} = this.props;
    let todoText = this.refs.todoText.value;

    if(todoText.length > 0){
      dispatch(actions.addTodo(todoText));
      this.refs.todoText.value = "";
    } else {
      this.refs.todoText.focus();
    }

  }
}

export default connect()(AddTodo);
