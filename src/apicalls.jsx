import axios from 'axios'
import { testData } from './RecommendationModule'
export const loginAPI = async (username, password) => {
  const data = await axios.post('http://localhost:9001/login', {
    email: username,
    password: password,
  })
  // .then(
  //   (responseData) => {
  //     console.log(responseData)
  //     return responseData.data
  //   },
  //   (error) => {
  //     console.log(error)
  //   },
  // )
  // console.log(data)
  return data
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
      (data) => {
        response = data
      },
      (error) => {
        console.log(error)
      },
    )
  return response
}
