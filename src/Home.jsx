import React, { Component } from 'react'

import './Home.css'
import Store from './Store'
// import * as RecommendationModule from './RecommendationModule'
import Navbar from './navbar'
class Home extends Component {
  // recommendation = () => {
  //   RecommendationModule.getRecommendation()
  // }

  render() {
    console.log(Store.getState())
    const testData = [
      {
        id:
          'https://www.hackerearth.com/practice/data-structures/arrays/1-d/tutorial/',
        title: 'Array',
        description:
          'An array is a sequential collection of elements of same data type and stores data elements in a continuous memory location. The elements of an array are accessed by using an index. The index of an array of size N can range from 0  to N-1 . For example, if your array size is 5, then your index will range from 0 to 4 (5-1). Each element of an array can be accessed by using arr[index].An array is a sequential collection of elements of same data type and stores data elements in a continuous memory location. The elements of an array are accessed by using an index. The index of an array of size N can range from 0  to N-1 . For example, if your array size is 5, then your index will range from 0 to 4 (5-1). Each element of an array can be accessed by using arr[index].An array is a sequential collection of elements of same data type and stores data elements in a continuous memory location. The elements of an array are accessed by using an index. The index of an array of size N can range from 0  to N-1 . For example, if your array size is 5, then your index will range from 0 to 4 (5-1). Each element of an array can be accessed by using arr[index].An array is a sequential collection of elements of same data type and stores data elements in a continuous memory location. The elements of an array are accessed by using an index. The index of an array of size N can range from 0  to N-1 . For example, if your array size is 5, then your index will range from 0 to 4 (5-1). Each element of an array can be accessed by using arr[index].An array is a sequential collection of elements of same data type and stores data elements in a continuous memory location. The elements of an array are accessed by using an index. The index of an array of size N can range from 0  to N-1 . For example, if your array size is 5, then your index will range from 0 to 4 (5-1). Each element of an array can be accessed by using arr[index].',
      },
      { id: '1', title: '2', description: '2' },
      { id: '1', title: '3', description: '3' },
      { id: '1', title: '4', description: '4' },
      { id: '1', title: '5', description: '5' },
      { id: '1', title: '6', description: '6' },
    ]
    return (
      <div className="">
        <Navbar prev="Home" />
        <div className="body">
          <div className="tilehome">
            {testData.map((topic, i) => (
              <div className="tiles">
                <div className="title">{topic.title}</div>
                <div className="description">{topic.description}</div>
                <div className="topiclink">
                  <a href={topic.id}>{topic.id}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="footer"></div>
      </div>
    )
  }
}

export default Home
