import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { IRootState } from 'shared/reducers';
import HighchartsReact from 'highcharts-react-official';
import * as Highcharts from 'highcharts';
import { SeriesOptionsType } from 'highcharts';

export interface IHighchartLineDefault {
  categories: Array<string>;        // 카테고리 (ex: ['2021 년 1 월', '2 월', '3 월'])
  titleText: string;                // 타이틀명 (ex: 발생 횟수)
  labelsFormat: string;             // 라벨 포멧 (ex: {value}회)
  series: Array<SeriesOptionsType>; // 노출 데이터 (ex: [{type: 'line', name: '이벤트 발생', data: [[0],[21],[233],[12]}, ...])
  yAxisMin?: number;                // 세로축 최소기준값
  yAxisMax?: number;                // 세로축 최대기준값
}
export interface IHighchartLineDefaultProps extends StateProps, DispatchProps, IHighchartLineDefault {}

export const HighchartLineDefault = (props: IHighchartLineDefaultProps) => {

  const options: Highcharts.Options = {
    chart: {
      zoomType: 'x',
      events: {
      },
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: props.categories
    },
    yAxis: {
      min: props.yAxisMin || null,
      max: props.yAxisMax || null,
      startOnTick: false,
      title: {
        text: props.titleText
      },
      labels: {
        format: props.labelsFormat,
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

const mapStateToProps = ({  }: IRootState) => ({
  // isAuthenticated: authentication.isAuthenticated,
  // isAdmin: hasAnyAuthority(authentication.account.authorities, [AUTHORITIES.ADMIN]),
});

const mapDispatchToProps = {
  // getSession
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(HighchartLineDefault);
