import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { IRootState } from '../../shared/reducers';

export const AnalysisReportDetail = (props: {history}) => {

  useEffect(() => {

  }, []);

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


    </>
  );
}

const mapStateToProps = ({  }: IRootState) => ({

});

const mapDispatchToProps = {

};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AnalysisReportDetail);
