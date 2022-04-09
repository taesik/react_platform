import React, { useEffect } from 'react';
import HighchartsReact from 'highcharts-react-official';
import * as Highcharts from 'highcharts';

export interface IHighchartAreaDefaultProps {
  chartWidth?: number | string,
  chartHeight?: number | string,
  categories?: Array<string>;        // 카테고리 (ex: ['2021 년 1 월', '2 월', '3 월'])
  titleText?: string;                // 타이틀명 (ex: 발생 횟수)
  labelsFormat: string;             // 라벨 포멧 (ex: {value}회)
  series: any[]; // 노출 데이터 (ex: [{type: 'line', name: '이벤트 발생', data: [[0],[21],[233],[12]}, ...])
  yAxisMin?: number;                // 세로축 최소기준값
  yAxisMax?: number;                // 세로축 최대기준값
}
export const HighchartAreaDefault = (props: IHighchartAreaDefaultProps) => {

  const options: Highcharts.Options = {
    chart: {
      type: 'area',
      width: props.chartWidth ? props.chartWidth : null,
      height: props.chartHeight ? props.chartHeight : null,
      // animation: false,
      // spacingRight: 50,
    },
    title: {
      text: ''
    },

    subtitle: {
      text: ''
    },

    yAxis: {
      title: {
        text: ''
      },
      labels: {
        format: '{value} mV',
        // align: 'right',
        // x: 880,
      },
      // startOnTick: false,
      // endOnTick: false,
      // max : props.yAxisMax,
      // min : props.yAxisMin
    },

    xAxis: {
      accessibility: {
        rangeDescription: 'Range: 0 to 101'
      }
    },

    legend: {
      enabled: false,
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },

    plotOptions: {
      series: {
        animation: false,
        label: {
          connectorAllowed: false
        },
        pointStart: 0
      }
    },
    series: props.series,
  };

  useEffect(() => {
  }, []);

  return (
    <>
      <HighchartsReact
        highcharts={Highcharts}
        options={options} />
    </>
  );
}
