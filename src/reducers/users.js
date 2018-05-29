const initial_state = {}

const users = (state = initial_state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state, 
        name: action.name, 
        id: action.id 
      }
    case 'USERS_LIST':
      return {
        ...state,
        users: action.users
      }
    default:
      return state
  }
}
  
  export default users