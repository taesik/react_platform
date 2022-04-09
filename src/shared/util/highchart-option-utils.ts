import * as Highcharts from 'highcharts';

/**
 * 하이차트를 이용한 라인차트에서 기본적으로 사용할 옵션
 */
export const highchartDefaultLineOption: Highcharts.Options = {
  chart: {
    zoomType: 'x',
    events: {
    },
  },
  title: {
    text: '',
  },
  xAxis: {
    // 사용 시 categories 항목 업데이트 필요
    // categories: ['2021 년 1 월', '2 월', '3 월']
  },
  yAxis: {
    min: 0,
    startOnTick: false,
    title: {
      // 사용 시 text 항목 업데이트 필요
      // text: '발생 횟수'
    },
    labels: {
      // 사용 시 format 항목 업데이트 필요
      // format: `{value} 회`,
      style: {
        color: Highcharts.getOptions().colors[1]
      }
    },
    plotLines: [{
      value: 0,
      width: 1,
      color: '#808080'
    }]
  },
  tooltip: {
    shared: true,
    style: {
      cursor: 'default'
    },
    pointFormat: `<span style="color:{point.color}">\u25CF</span> {point.series.name}: <b>{point.y:.f}</b></br>`
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    borderWidth: 0
  },
  plotOptions: {
    series: {
      turboThreshold: 15000,
      dataGrouping: {
        enabled: false
      }
    }
  },
  series: [
  // 사용 시 series 업데이트 필요
  ],
};
