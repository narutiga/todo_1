import { useReducer } from "react";

export const useTodos = () => {
  const initialState = {
    todo: "test",
    incompleteTodos: ["tailwindCSS", "Mantine"],
    completeTodos: ["ESlint", "Prettier"],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "change":
        return {
          ...state,
          todo: action.e.target.value,
        };
      case "add":
        return {
          ...state,
          todo: "",
          incompleteTodos: [...state.incompleteTodos, action.todo],
        };
      case "delete":
        const deleteIncompleteTodos = [...state.incompleteTodos];
        deleteIncompleteTodos.splice(action.index, 1);
        return {
          ...state,
          incompleteTodos: deleteIncompleteTodos,
        };
      case "complete":
        const completeIncompleteTodos = [...state.incompleteTodos];
        completeIncompleteTodos.splice(action.index, 1);
        return {
          ...state,
          incompleteTodos: completeIncompleteTodos,
          completeTodos: [
            ...state.completeTodos,
            state.incompleteTodos[action.index],
          ],
        };
      case "reverse":
        const reverseompleteTodos = [...state.completeTodos];
        reverseompleteTodos.splice(action.index, 1);
        return {
          ...state,
          incompleteTodos: [
            ...state.incompleteTodos,
            state.completeTodos[action.index],
          ],
          completeTodos: reverseompleteTodos,
        };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({ type: "change", e });
  };

  const handleAdd = (todo) => {
    dispatch({ type: "add", todo });
  };

  const handlDelete = (index) => {
    dispatch({ type: "delete", index });
  };

  const handlComplete = (index) => {
    dispatch({ type: "complete", index });
  };

  const handlReverse = (index) => {
    dispatch({ type: "reverse", index });
  };

  return {
    state,
    reducer,
    dispatch,
    handleChange,
    handleAdd,
    handlDelete,
    handlComplete,
    handlReverse,
  };
};
