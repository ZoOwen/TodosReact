import React from 'react'
import { Button,Label, Input,ListGroup, ListGroupItem} from 'reactstrap';
import '../App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// A little enhanced of Facebook's React TODO example.
// Want to be looked Reminder alike.

export default class TodosCb extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        items: [],
        text: ""
      };
      
    }
    handleTextChange = (event) => {
      this.setState({
        text: event.target.value
      });
    }
    handleAddItem = (event) => {
      event.preventDefault();
      
      var newItem = {
        id: Date.now(),
        text: this.state.text,
        done: false
      };
      
      this.setState((prevState) => ({
        items: prevState.items.concat(newItem),
        text: ""
      }));
    }
    markItemCompleted = (itemId)=> {
      var updatedItems = this.state.items.map(item => {
        if (itemId === item.id)
          item.done = !item.done;
        
        return item;
      });
      
      
      this.setState({
        items: [].concat(updatedItems)
      });
    }
    handleDeleteItem = (itemId) => {
      var updatedItems = this.state.items.filter(item => {
        return item.id !== itemId;
      });
      
      this.setState({
        items: [].concat(updatedItems)
      });
    }
    render() {
      return (
        <div className="container">
          <h3>TODOLIST CLASS BASE</h3>
          
          <form >
          <div >
            <input className="form-control" type="text" onChange={this.handleTextChange} value={this.state.text} placeholder="fill here" />
          </div>
          <div >
            <button className="btn btn-danger" onClick={this.handleAddItem} disabled={!this.state.text}>{"Add"}</button>
          </div>
        </form>
  
          <div>
            <div >
              <TodoList items={this.state.items} onItemCompleted={this.markItemCompleted} onDeleteItem={this.handleDeleteItem} />
            </div>
          </div>
             </div>
      );
    }
  }
  
  class TodoItem extends React.Component {
    constructor(props) {
      super(props);
      this.markCompleted = this.markCompleted.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
    }
    markCompleted(event) {
      this.props.onItemCompleted(this.props.id);
    }
    deleteItem(event) {
      this.props.onDeleteItem(this.props.id);
    }
    
    render() {
      var itemClass = "form-check todoitem " + (this.props.completed ? "done" : "undone");
      return (
        <ListGroupItem className={itemClass} ref={li => this._listItem = li }>
          <label className="form-check-label">
            <input type="checkbox" onChange={this.markCompleted} /> &nbsp;&nbsp;&nbsp;&nbsp;{this.props.text}
            &nbsp;&nbsp;&nbsp;&nbsp;</label>
          <button  className="btn btn-danger"  type="button" onClick={this.deleteItem}>x</button>
        </ListGroupItem>
      );
    }
  }
  
  class TodoList extends React.Component {
    render() {
      return (
        <ListGroup>
          {this.props.items.map(item => (
            <TodoItem key={item.id} id={item.id} text={item.text} completed={item.done} onItemCompleted={this.props.onItemCompleted} onDeleteItem={this.props.onDeleteItem} />
          ))}
        </ListGroup>
      );
    }
  }
  