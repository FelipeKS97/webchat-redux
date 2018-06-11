const initial_state = {
  usersArray: [],
}

export default (state = initial_state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      
      return {
        ...state,
        usersArray: [...state.usersArray,
          {
            name: action.name, 
            id: action.id
          }
        ]
      }
    case 'USERS_LIST':
    console.log(action)
      return {
        ...state,
        usersArray: [...state.usersArray, action.users]
      }
    default:
      return state
  }
}