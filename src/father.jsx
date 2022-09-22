import React from 'react';
import EchartsPro from './components';

function Father() {
  const seriesData = [
    {
      name: '药品',
      type: 'bar',
      barGap: '0%',
      stack: 'first',
      tooltip: {
        valueFormatter(value) {
          return value + ' ml';
        }
      },
      data: [76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 0]
    },
    {
      name: '用剂',
      type: 'bar',
      stack: 'first',
      tooltip: {
        valueFormatter(value) {
          return value + ' ml';
        }
      },
      data: [76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
    },
    {
      name: '用量',
      type: 'bar',
      stack: 'sec',
      tooltip: {
        valueFormatter(value) {
          return value + ' ml';
        }
      },
      data: [70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
    },
    {
      name: '用123',
      type: 'bar',
      stack: 'sec',
      itemStyle: {
        color: 'skyblue'
      },
      tooltip: {
        valueFormatter(value) {
          return value + ' ml';
        }
      },
      data: [70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
    },
    {
      name: '温度',
      type: 'line',
      // 使用哪个y坐标轴  存在多个y轴时有用
      yAxisIndex: 1,
      tooltip: {
        valueFormatter(value) {
          return value + ' °C';
        }
      },
      data: [10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
      // lineStyle: {
      //   color: 'red'
      // },
      // 图形的颜色
      itemStyle: {
        color: 'red'
      }
    }
  ];
  // 顶部标识
  const legend = {
    data: ['药品', '用剂', '用量', '用123', '温度']
  };

  const xAxis = [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisPointer: {
        type: 'shadow'
      }
    }
  ];

  const yAxis = [
    {
      type: 'value',
      name: '降水量',
      // min: 0,
      // max: 250,
      interval: 50,
      axisLabel: {
        formatter: '{value} ml'
      }
    },
    {
      type: 'value',
      name: '温度',
      // min: 0,
      // max: 25,
      interval: 5,
      axisLabel: {
        formatter: '{value} °C'
      }
    }
  ];

  return <EchartsPro legend={legend} xAxis={xAxis} yAxis={yAxis} series={seriesData} />;
}

export default Father;
