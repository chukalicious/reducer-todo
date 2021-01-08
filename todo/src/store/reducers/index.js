import { CREATE_TASK, HOLD_TODO, MARK_COMPLETED } from "../actions/index";

const initialState = {
  list: [],
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TASK: {
      return {
        ...state,
      };
    }
    case HOLD_TODO: {
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    }
    case MARK_COMPLETED: {
      return {
        ...state,
        list: state.list.filter((li) => li.id !== action.payload.id),
      };
    }
    default:
      return state;
  }
};
