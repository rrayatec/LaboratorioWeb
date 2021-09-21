import { useState } from "react";

export default function useTodoState (initialValue) {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,
    addTodo: (todoText) => {
      try{
      setTodos([...todos, ...todoText[0]]);
      }
      catch{
        console.log("Cargando modulos")
      }
    },
    addSingleTodo: (todoText) => {
      setTodos([...todos, todoText]);
    },
    deleteTodo: (todoIndex) => {
      const newTodos = todos.filter((_, index) => index !== todoIndex);
      setTodos(newTodos);
    },
  };
};

