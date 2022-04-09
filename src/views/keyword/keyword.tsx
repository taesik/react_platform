import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { IRootState } from '../../shared/reducers';
import {
  KB_LOGO,
} from '../img';
import AnalysisReportItem from '../component/report/analysis-report-item';
import AnalysisReportList from '../component/report/analysis-report-list';


export const Keyword = (props: any) => {

  // const [userObj, setUserObj]=React.useState({
  // })


  useEffect(() => {

  }, []);

  return (
    <>

    </>
  );
}

const mapStateToProps = ({  }: IRootState) => ({

});

const mapDispatchToProps = {

};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;
export default connect(mapStateToProps, mapDispatchToProps)(Keyword);
