import React from 'react';
import ReactECharts from 'echarts-for-react';
import 'echarts/i18n/langFR';

const Page = ({ legend, xAxis, yAxis, series }) => {
  return (
    <ReactECharts
      option={{
        tooltip: {
          trigger: 'axis'
          // 鼠标悬浮显示横纵坐标
          // axisPointer: {
          //   type: 'cross',
          //   crossStyle: {
          //     color: '#999'
          //   }
          // }
        },
        // 顶部工具栏
        // toolbox: {
        //   feature: {
        //     dataView: { show: true, readOnly: false },
        //     magicType: { show: true, type: ['line', 'bar'] },
        //     restore: { show: true },
        //     saveAsImage: { show: true }
        //   }
        // },
        legend,
        xAxis,
        yAxis,
        series
      }}
      style={{ height: '100vh' }}
      opts={{ renderer: 'canvas' }}
    />
  );
};

export default Page;
