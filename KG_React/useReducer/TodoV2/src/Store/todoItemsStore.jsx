import { createContext } from "react";
import { useReducer } from "react";

export const ContextTodoItems = createContext([]);

function reducer(currTodoItems, action) {
  let newTodoList = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoList = [
      ...currTodoItems,
      {
        work: action.payload.itemName,
        Date: action.payload.dueDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoList = currTodoItems.filter(
      (item) => item.work !== action.payload.deleteItem
    );
  }

  return newTodoList;
}

const TodoItemsProvider = ({ children }) => {
  let [todoItemsList, dispatchTodoItems] = useReducer(reducer, []);

  const addNewItem = (todoName, todoDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName: todoName,
        dueDate: todoDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (deletedItem) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        deleteItem: deletedItem,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };
  return (
    <ContextTodoItems.Provider
      value={{
        todoitems: todoItemsList,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      {children}
    </ContextTodoItems.Provider>
  );
};

export default TodoItemsProvider;
