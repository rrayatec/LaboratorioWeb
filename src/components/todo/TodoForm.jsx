import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "../../functions/useInputState";

const TodoForm = ({ addSingleTodo }) => {
  const { value, reset, onChange } = useInputState();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        addSingleTodo({ name: value });
        reset();
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default TodoForm;
