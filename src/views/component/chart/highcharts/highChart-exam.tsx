import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { IRootState } from '../../../../shared/reducers';
import { connect } from 'react-redux';

export interface IHighChartExam {
  height?: number;
  width?: number;
  text?: string;
}

export interface IHighChartExamProps extends StateProps, DispatchProps, IHighChartExam{}

export const HighChartExam = (props : IHighChartExamProps) =>
{
  const options: Highcharts.Options = {
    chart:{
      height: props.height,
      width: props.width,
    },
    title: {
      text: props.text
    },
    series: [{
      type: 'line',
      data: [1, 2, 3]
    }]
  };

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
  mapStateToProps, mapDispatchToProps)(HighChartExam);
