const initial_state = {
  usersArray: [],
}

export default (state = initial_state, action) => {
  switch (action.type) {
    case 'ADD_USER':

      let newUsers = state.usersArray
      
      return {
        ...state,
        usersArray: newUsers.concat([
          {
            name: action.name, 
            id: action.id
          }
        ])
      }
    case 'USERS_LIST':
      return {
        ...state,
        //users: action.users
      }
    default:
      return state
  }
}