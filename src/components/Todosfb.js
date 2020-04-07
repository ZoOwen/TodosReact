import React, { useState } from 'react';
import logo from '../logo.svg';
import { Button,Label, Input,ListGroup, ListGroupItem} from 'reactstrap';
import '../App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


// import "./styles.css";

 function Todosfb() {
  const [Todo, setTodo] = useState("");
  const [TodoList, setTodoList] = useState([]);

   const handleDeleteItem = (e) => {
      var id = e.target.element;
      TodoList.splice(id, 1)
        setTodoList([...TodoList])
    }
    const handleklik =() =>{
         setTodoList([...TodoList, Todo])
      
    }

    
    const handleChange = (e) =>{
        setTodo(e.target.value)
    }


  return (
    <div className="container">
      <input
      className="form-control"
        type="text"
        value={Todo}
        placeholder="type here..."
        name="inputan"
        onChange={handleChange}
      />
      
      <button  className="btn btn-primary" onClick={handleklik}>Add</button>
      <br/>
      <ul>
        {TodoList.map((item , index) => (
          <ListGroup  key={index}>{item }<button  className="btn btn-danger"  style={{"width": "20px"}} type="button"  onClick={handleDeleteItem}>x</button> </ListGroup> 
        ))}
      </ul>
    </div>
    
  );
}

export default Todosfb;