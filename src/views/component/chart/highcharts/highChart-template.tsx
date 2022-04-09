import React, {useState, useEffect } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { IRootState } from '../../../../shared/reducers';
import { connect } from 'react-redux';


export interface IHighChartTemplate {

}

// 리덕스/액션함수를 포함하는 인터페이스 (명명규칙: I + 컴포넌트명 + Porps)
export interface IHighChartTemplateProps extends StateProps, DispatchProps, IHighChartTemplate{}

// 이벤트 회수 (HighChart basic template)
export const HighCharTemplate = (props : IHighChartTemplateProps) => {

  const [chartData, setChartData] = useState({
  })


  useEffect(() => {

  }, [chartData]);

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
      /*categories: props.spdcTrendXAxis*/
      /*categories: props.spdcTrendList.XAxis*/
    },

    yAxis: {
      min: -55,
      startOnTick: false,
      title: {
        text: '방전 크기'
      },
      labels: {
        format: `{value} dBm`,
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

    series: [{
      type: 'line',
      name: '최대방전크기(dBm)',
      /*data: props.spdcTrenddbmMax,*/
    }, {
      type: 'line',
      name: '평균방전크기(dBm)',
      /*data: props.spdcTrenddbmAvg,*/
    }
    ],
  };



  /*  useEffect(() => {
      props.getTrendGisSpdc(chartData.fromDate, chartData.toDate, chartData.eqipId, chartData.snsrId);
    },[]);*/

  return (
    <>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}>

      </HighchartsReact>
    </>
  );
}

// 리덕스 스토어를 가지는 객체
const mapStateToProps = ({  }: IRootState) => ({
  //리덕스 스토어
});

// 리듀스 액션 함수를 가지는 객체
const mapDispatchToProps = {
  //리듀스 액셤함수
};

// 스토어/액션함수 객체의 타입을 정의
// (상단 컴포넌트의 파라미터에서 받을 인터페이스에서 사용)
type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

// 스토어, 액션함수를 컴포넌트에 연결
export default connect(
  mapStateToProps, mapDispatchToProps)(HighCharTemplate);
