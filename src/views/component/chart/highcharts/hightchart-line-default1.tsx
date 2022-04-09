import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { IRootState } from 'shared/reducers';
import HighchartsReact from 'highcharts-react-official';
import * as Highcharts from 'highcharts';
import more from 'highcharts/highcharts-more';
more(Highcharts);

export interface IHighchartLineDefault {
  categories?: Array<string>;        // 카테고리 (ex: ['2021 년 1 월', '2 월', '3 월'])
  titleText?: string;                // 타이틀명 (ex: 발생 횟수)
  labelsFormat?: string;             // 라벨 포멧 (ex: {value}회)
  series?: any[]; // 노출 데이터 (ex: [{type: 'line', name: '이벤트 발생', data: [[0],[21],[233],[12]}, ...])
  yAxisMin?: number;                // 세로축 최소기준값
  yAxisMax?: number;                // 세로축 최대기준값
  options?: any;					// 전체 옵션 주입시 사용
}
export interface IHighchartLineDefaultProps extends StateProps, DispatchProps, IHighchartLineDefault {}

export const emptyOptions = {
	title: {
		text: '',
	},
}

export const HighchartLineDefault = (props: IHighchartLineDefaultProps) => {

  const options: Highcharts.Options = props.options ?? {
    chart: {
      height: 200,
      animation: false,
      spacingRight: 50,
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
        // format: '{value} mV',
        // align: 'right',
        // x: 880,
      },
      // startOnTick: false,
      // endOnTick: false,
      max : props.yAxisMax,
      min : props.yAxisMin
    },

    xAxis: {
      accessibility: {
        rangeDescription: 'Range: 2010 to 2017'
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
        pointStart: 2010
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
