import * as ActionTypes from './actionTypes'

export const createTodo = (todo) => {
  return {
    type: actiontypes.CREATE_NEW_TODO,
    todo,
  }
}
export const deleteToDo = (id) => {
  return {
    type: actionTypes.REMOVE_TODO,
    id: id,
  }
}
