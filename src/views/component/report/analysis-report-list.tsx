import React, { useEffect, useState } from 'react';
import AnalysisReportItem from './analysis-report-item';

const AnalysisReportList = (props: { moveFunc }) => {


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


