import { ADD, DELETE, UPDATE } from "./users.actions.js";

const initialState = {
  usersList: [],
}

export const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD:
      return {
        usersList: state.usersList.concat(action.payload),
      };
    case DELETE:
      return {
        usersList: state.usersList.filter(user => user.id !== action.payload),
      };
    case UPDATE:
        return {
          usersList: state.usersList.map(user => {
            if (user.id !== action.payload.id) return user;
            return {
              ...user,
              ...action.payload.userData
            }
          }),
        };
    default:
      return state;
  }
}

