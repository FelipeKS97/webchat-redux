import { addMessage, addUser } from "../actions"


describe('adding a message', () => {
    it("should create an action to add a message with id 0", ()=> {
        const message = "Something"
        const action = {
            type: 'ADD_MESSAGE',
            message: message,
            author: 'Me',
            id: 0
        }

        expect(addMessage(message)).toEqual(action)
    })
})

describe('adding a second message', () => {
    it('should create an action to add a message with id 1', () => {
      const message = 'Something'
      const action = {
        type: 'ADD_MESSAGE',
        message: message,
        author: 'Me',
        id: 1
      }
      expect(addMessage(message)).toEqual(action)
    })
})

describe('adding a user', () => {
    it('should create an action to add a user with id 0', () => {
      const user = 'Mark Zuckerberg'
      const action = {
        type: 'ADD_USER',
        name: user,
        id: 0
      }
      expect(addUser(user)).toEqual(action)
    })
})
  
describe('adding a second user', () => {
    it('should create an action to add a message with id 1', () => {
      const user = 'Tony Stark'
      const action = {
        type: 'ADD_USER',
        name: user,
        id: 1
      }
      expect(addUser(user)).toEqual(action)
    })
})