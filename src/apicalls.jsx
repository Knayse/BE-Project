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

export const registerAPI = async (name, username, password, email, college) => {
  const response = await axios.post('http://localhost:9001/users', {
    user_name: username,
    name: name,
    email: email,
    password: password,
    college: college,
  })
  return response
}

export const getFirstQuestion = async (email, topic) => {
  const response = await axios.post('http://localhost:9001/getFirstQuestion', {
    topic: topic,
    email: email,
  })
  return response
}

export const getNextQuestion = async (email, id, correct) => {
  const response = await axios.post('http://localhost:9001/getQuestion', {
    id: id,
    email: email,
    correct: correct,
  })
  return response
}

export const getEndTest = async (email, id, score, correct) => {
  const response = await axios.post('http://localhost:9001/submitTest', {
    id: id,
    email: email,
    score: score,
    correct: correct,
  })
  return response
}

export const getTheory = async () => {
  const response = await axios.get('http://localhost:9001/getTheory')
  return response
}
