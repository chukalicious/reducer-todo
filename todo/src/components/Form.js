import React, { useState } from "react";
import { connect } from "react-redux";
import { holdTodo } from "../store/actions";

const Form = (props) => {
  const [todo, setTodo] = useState({
    item: "",
    id: "",
    completed: false,
  });

  const handleChange = (e) => {
    setTodo({
      item: e.target.value,
      id: Date.now(),
      completed: false,
    });
  };

  const captureTodo = (e) => {
    e.preventDefault();
    props.holdTodo(todo);
    setTodo({
      item: "",
      id: "",
      completed: false,
    });
  };

  return (
    <div>
      <h3>This is the Form component</h3>
      <form onSubmit={captureTodo}>
        <input
          type="text"
          placeholder="Enter a Todo Item"
          id="todo"
          value={todo.item}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    item: state.item,
    completed: state.completed,
    id: state.id,
  };
};
export default connect(null, { holdTodo })(Form);
