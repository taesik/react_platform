import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { IRootState } from '../../shared/reducers';
import {
  KB_LOGO,
} from '../img';
import AnalysisReportList from '../component/report/analysis-report-list';


export const AnalysisReport = (props ) => {

  useEffect(() => {

  }, []);


  const moveAnalysisReportDetail = () => {
    props.history.push('/analysis_report_detail', []);
  }

  return (
    <>
      <div className="bg-primary-1">
        <div className="container d-flex flex-column">
          <div className="sub-top">
            <div className="sub-title">
              <h2>분석보고서<span className="sub-title-en">Analysis Report</span></h2>
            </div>
          </div>
        </div>
      </div>

      {/*  분석보고서*/}
      <div className="container">
        <div className="cont py-4">

          <div className="cont-h">
            <div className="row pt-3 pb-1">
              <div className="col-12 px-2">
                <h5 className="cont-title">분석보고서</h5>
                <span className="cont-title-en">Analysis Report</span>
              </div>
            </div>
          </div>
          <AnalysisReportList moveFunc={moveAnalysisReportDetail} />
        </div>
      </div>
    </>
  );
}

const mapStateToProps = ({  }: IRootState) => ({

});

const mapDispatchToProps = {

};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AnalysisReport);
