import React, { Component } from 'react'
import ReactApexCharts from 'react-apexcharts'
class QuestionAttemptedAnalysis extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    console.log(this.props.tagsArray)
    console.log(this.props.totalQuestions)
    const series = this.props.totalQuestions
    const options = {
      colors: [
        '#4d3a96',
        '#f55c47',
        '#cf0000',
        '#00cc00',
        '#ffc947',
        '#99154e',
        '#480032',
        '#fc92e3',
        '#1eae98',
        '#564a4a',
      ],
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: this.props.tagsArray,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    }
    return (
      <div id="chart">
        <ReactApexCharts
          options={options}
          series={series}
          type="pie"
          width={380}
        />
      </div>
    )
  }
}
export default QuestionAttemptedAnalysis
