const initial_state = {
  messagesArray: []
}

export default (state = initial_state, action) => {
    switch (action.type) {
      case 'ADD_MESSAGE':
      case 'MESSAGE_RECEIVED':
        let newMessages = state.messagesArray
          return {
            ...state,
            messagesArray: newMessages.concat([
              {
                message: action.message,
                author: action.author,
                id: action.id
              }
            ])
          }
      
      default:
        return {...state}
    }
  }