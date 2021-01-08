export const CREATE_TASK = "CREATE_TASK";
export const HOLD_TODO = "HOLD_TODO";
export const MARK_COMPLETED = "MARK_COMPLETED";

export const createTask = (item) => {
  return {
    type: CREATE_TASK,
    payload: item,
  };
};

export const holdTodo = (todo) => {
  return {
    type: HOLD_TODO,
    payload: todo,
  };
};

export const markCompleted = (item) => {
  return {
    type: MARK_COMPLETED,
    payload: item,
  };
};
