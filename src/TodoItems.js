import React, { Component } from "react";
 
class TodoItems extends Component {
  constructor(props) {
    super(props);
 
    this.createTasks = this.createTasks.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }

  createTasks(item) {
    return <li className="listaa"
            key={item.key}>{item.text}

            <button 
              className="fa fa-question-circle"
              onClick={() =>this.delete(item.key)}
            >
              Delete
            </button>
           </li>
  }
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};
 
export default TodoItems;