import messages from './messages'


describe('Messages reducer', () => {
    it('should return the initial state, empty', () => {
        expect(messages(undefined, {})).toEqual({
            messagesArray: []
        })
    })
  
    it('should handle ADD_MESSAGE and store every message', () => {
      expect(
        messages({ messagesArray: [] }, {
          type: 'ADD_MESSAGE',
          message: 'Hey',
          author: 'Me'
        })
      ).toEqual({
        messagesArray:[
            {
                message: 'Hey',
                author: 'Me'
            }
        ]
      })
  
      expect(
        messages(
            {
                messagesArray:[
                    {
                        message: 'Hey',
                        author: 'Me'
                    }
                ]
            },
            {
                type: 'ADD_MESSAGE',
                message: 'Hey again',
                author: 'Me again'
            }
        )
      ).toEqual({
        messagesArray:[
            {
                message: 'Hey',
                author: 'Me'
            },
            {
                message: 'Hey again',
                author: 'Me again'
            }
        ]
      })
    })
  })