import { ADD_TO_LIST } from "../actions/index";

const initialState = {
  item: "Learn about reducers",
  completed: false,
  id: 3892987589,
  tasks: [],
};

export const listReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_LIST: {
      return {
        ...state,
        tasks: [...action.payload],
      };
    }
    default:
      return state;
  }
};
