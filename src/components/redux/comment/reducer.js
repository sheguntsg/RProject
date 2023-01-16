import { INCREMENT, DECREMENT } from "./types";
const initialState = {
  likes: 0,
  text: "",
  comments: [],
};
export const likesReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        likes: state.likes + 1,
      };
      break;

    case DECREMENT:
      return {
        ...state,
        likes: state.likes - 1,
      };
    default:
      return state;
  }
};
