const users = [
  {
    name: 'John',
    age: 20,
    gender: 'male'
  },
  {
    name: 'Jane',
    age: 23,
    gender: 'female'
  },
  {
    name: 'Adam',
    age: 40,
    gender: 'male'
  }
]

const getAgeByName = (name) => users?.find(user => user?.name === name)?.age

getAgeByName('Jane')
