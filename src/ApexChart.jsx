import React, { Component } from 'react'
import ReactApexCharts from 'react-apexcharts'
class ApexChart extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const series = [
      {
        name: 'Total Questions Attempted',
        data: this.props.totalQuestions,
      },
      {
        name: 'Correctly solved',
        data: this.props.correctSolved,
      },
    ]
    const options = {
      chart: {
        height: 370,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        },
      },
      // dataLabels: {
      //   enabled: true,
      //   formatter: function (val) {
      //     return val + '%'
      //   },
      //   offsetY: -20,
      //   style: {
      //     fontSize: '12px',
      //     colors: ['#304758'],
      //   },
      // },

      xaxis: {
        categories: this.props.tagsArray,
        position: 'top',
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + ''
          },
        },
      },
      title: {
        text: 'Performance of Student(Topicwise)',
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
          color: '#444',
        },
      },
    }
    console.log(this.props.totalQuestions)
    return (
      <div id="chart">
        <ReactApexCharts
          options={options}
          series={series}
          type="bar"
          height={380}
        />
      </div>
    )
  }
}
export default ApexChart
