const initialState = {
  users: [],
}

export const usersReducer = (state = initialState, action) => {
  switch(action.type) {
      case 'ADD_USER':
          return  {...state, cash: state.cash + action.payload}

      case 'GET_USERS':
          return  {...state, cash: state.cash - action.payload}            
          
      default:
          return state;
  }
}