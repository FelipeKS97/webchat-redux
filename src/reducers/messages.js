const initial_state = {}

const messages = (state = initial_state, action) => {
    switch (action.type) {
      case 'ADD_MESSAGE':
      case 'MESSAGE_RECEIVED':
        return {
            ...state,
            message: action.message,
            author: action.author,
            id: action.id
          }
      
      default:
        return state
    }
  }
  
  export default messages