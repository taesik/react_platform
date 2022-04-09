import React, { useEffect, useState } from 'react';
import AnalysisReportItem from './analysis-report-item';
import { RouteComponentProps } from 'react-router-dom';
import { IRootState } from '../../../shared/reducers';
import { connect } from 'react-redux';

const AnalysisReportList = (props: { moveFunc }) => {

  const[keywordArr, setkeywordArr] = useState(

  );

  const moveAnalysisReportDetail = () =>(
    props.moveFunc()
  )

  useEffect(() => {

  }, []);

  return (
    <>
      <div className="cont-b">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 mb-2">
          <AnalysisReportItem moveFunc={moveAnalysisReportDetail} />
        </div>
      </div>
    </>
  );
}

export default AnalysisReportList;


