const initialState = {
  users: [],
}

const ADD_USER = 'ADD_USER';
const DELETE_USER = 'DELETE_USER';
const ADD_DB_USERS = 'ADD_DB_USERS';

export const usersReducer = (state = initialState, action) => {
  switch(action.type) {
      case ADD_DB_USERS: 
          return {...state, users: [...state.users, ...action.payload]}

      case ADD_USER:
          return  {...state, users: [...state.users, action.payload]}

      case DELETE_USER:
          return  {...state, users: state.users.filter(user => user.id !== action.payload)}            
          
      default:
          return state;
  }
}

export const addDbUsersAction = (payload) => ({type: ADD_DB_USERS, payload});
export const addUserAction = (payload) => ({type: ADD_USER, payload});
export const deleteUserAction = (payload) => ({type: DELETE_USER, payload});