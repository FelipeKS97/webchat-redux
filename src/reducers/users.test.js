import users from './users'

describe('Users reducer', () => {
  it('should return the initial state, empty', () => {
    expect(users(undefined, {})).toEqual({ usersArray: [] })
  })

  it('should handle ADD_USER and store every user', () => {
    expect(
      users({ usersArray: [] }, {
        type: 'ADD_USER',
          name: 'Tony Stark'
      })
    ).toEqual({
        usersArray:[
            {
                name: 'Tony Stark'
            }
        ]
      })

    expect(
      users(
        {
            usersArray: [
                {
                    name:'Mark Zuck'
                }
            ]
        },
        {
          type: 'ADD_USER',
          name: 'Tony Stark'
        }
      )
    ).toEqual({
        usersArray: [
            {
                name: 'Mark Zuck',
            },
            {
                name: 'Tony Stark'
            }
        ]
    })
  })
})