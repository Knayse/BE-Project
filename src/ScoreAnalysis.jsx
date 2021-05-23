import React, { Component } from 'react'
import ReactApexCharts from 'react-apexcharts'
class ScoreAnalysis extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const series = [
      {
        name: 'Quiz Scores',
        data: this.props.scoreArray,
      },
    ]
    const options = {
      chart: {
        height: 350,
        type: 'line',
        dropShadow: {
          enabled: true,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ['#77B6EA'],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: 'smooth',
      },
      title: {
        text: 'Quiz performance Analysis of Students',
        align: 'left',
      },
      grid: {
        borderColor: '#e7e7e7',
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      markers: {
        size: 1,
      },
      xaxis: {
        categories: this.props.timelineArray,
        title: {
          text: 'Quiz Numbers',
        },
      },
      yaxis: {
        title: {
          text: 'Students Score',
        },
        min: 0,
        max: 40,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    }
    return (
      <div id="chart">
        <ReactApexCharts
          options={options}
          series={series}
          type="line"
          height={350}
        />
      </div>
    )
  }
}
export default ScoreAnalysis
