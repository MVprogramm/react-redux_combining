export const ADD = 'USER/ADD_USER';
export const DELETE = 'USER/DELETE_USER';
export const UPDATE = 'USER/UPDATE_USER';

export const addUser = (userData) => {
  return {
    type: ADD,
    payload: userData
  }
}

export const deleteUser = (id) => {
  return {
    type: DELETE,
    payload: id
  }
}

export const updateUser = (id, userData) => {
  return {
    type: UPDATE,
    payload: { id, userData }
  }
}