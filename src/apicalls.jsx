import axios from 'axios'
export const loginAPI = (username, password) => {
  const response = {}
  axios
    .post('http://localhost:9001/login', {
      email: username,
      password: password,
    })
    .then(
      (response) => {
        console.log(response)
      },
      (error) => {
        console.log(error)
      },
    )
}

export const registerAPI = () => {
  const response = {}
  axios
    .post('http://localhost:9001/users', {
      user_name: 'user1',
      name: 'user1',
      email: 'user1@gmail.com',
      password: 'qwerty',
      college: 'PICT,Pune',
    })
    .then(
      (response) => {
        console.log(response)
      },
      (error) => {
        console.log(error)
      },
    )
}
