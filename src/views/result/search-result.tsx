import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { IRootState } from '../../shared/reducers';
import {
  KB_LOGO,
} from '../img';
import DashboardList from '../component/dashboard/dashboard-list';
import AnalysisReportList from '../component/report/analysis-report-list';

import SemanticContentsList from '../component/semantic/semantic-contents-list';
import KeywordNewsListInSearchResult from "../component/keyword/keyword-news-list-in-search";
import { RouteComponentProps } from 'react-router-dom';
import Footer from '../component/footer/footer';


export interface ITemplateProps extends StateProps, DispatchProps, RouteComponentProps {}

export const SearchResults = (props: ITemplateProps) => {

  // const history = useHistory();

  const [userObj, setUserObj]=React.useState({})

  useEffect(() => {
  }, []);

  const moveDashboard = () => {
    props.history.push('/dashboard', []);
  }

  const moveAnalysisReport = () => {
    props.history.push('/analysis-report', []);
  }

  const moveKeywordNews = () => {
    props.history.push('/result-keyword-news', []);
  }

  const moveAnalysisReportDetail = () => {
    props.history.push('/analysis-report-detail', []);
  }

  return (
    <>
      <div className="bg-primary-1">
        <div className="container d-flex flex-column">
          <div className="sub-top">
            <div className="sub-title">
              <h2>검색결과<span className="sub-title-en"><b>"{"어쩌고 저쩌고"}"</b>(으)로 검색한 결과 입니다.</span></h2>
              <div className="dropdown d-inline-block f-rifgt">
                <a className="dropdown-toggle" href="#" id="check_dropdown" role="button" data-bs-toggle="dropdown"
                   aria-haspopup="true" aria-expanded="false">
                  <i className="bi bi-check2-square va-middle"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 대시보드 */}
      <div className="container">
        <div className="content py-4">
          <div className="cont-h">
            <div className="row pt-3 pb-1">
              <div className="col-12 px-2">
                <h5 className="cont-title">대시보드</h5>
                <span className="cont-title-en">Dashboard</span>
              </div>
            </div>
          </div>

          <DashboardList />

        <div className="cont-f">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <button className="btn btn-lg-sm btn-md-sm btn-sm btn-secondary m-auto radius-30" onClick={moveDashboard} >more</button>
              </div>
            </div>
          </div>
        </div>
       </div>
      </div>


      {/* 분석보고서 */}
      <div className="container">
        <div className="cont py-4">
          <div className="content">
            <div className="cont-h">
              <div className="row pt-3 pb-1">
                <div className="col-12 px-2">
                  <h5 className="cont-title">분석보고서</h5>
                  <span className="cont-title-en">Analysis Report</span>
                </div>
              </div>
            </div>
          </div>

          <AnalysisReportList moveFunc={moveAnalysisReportDetail}/>

        <div className="cont-f">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <button className="btn btn-lg-sm btn-md-sm btn-sm btn-secondary m-auto radius-30" onClick={moveAnalysisReport} >more</button>
              </div>
            </div>
          </div>
         </div>
        </div>
      </div>


      {/* 키워드뉴스 */}
      <div className="container">
        <div className="cont pt-4">
          <div className="cont-h">
            <div className="row pt-3 pb-1">
              <div className="col-12 px-2">
                <h5 className="cont-title">키워드 뉴스</h5>
                <span className="cont-title-en">Keyword News</span>
              </div>
            </div>
          </div>

          <KeywordNewsListInSearchResult />

        <div className="cont-f">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <button className="btn btn-lg-sm btn-md-sm btn-sm btn-secondary m-auto radius-30" onClick={moveKeywordNews} >more</button>
              </div>
            </div>
          </div>
        </div>
       </div>
      </div>


      {/* 시멘틱콘텐츠 */}
      <div className="container">
        <div className="cont py-4">
          <div className="cont-h">
            <div className="row pt-3 pb-1">
              <div className="col-12 px-2">
                <h5 className="cont-title">시멘틱 콘텐츠</h5>
                <p className="cont-title-en">Semantic contents</p>
              </div>
            </div>
          </div>

          <SemanticContentsList />
      </div>
        <div className="content-bottom mb-4">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <button className="btn btn-lg-sm btn-md-sm btn-sm btn-secondary m-auto radius-30">more</button>
              </div>
            </div>
          </div>
         </div>
        </div>


      <Footer />
    </>
  );
}


const mapStateToProps = ({  }: IRootState) => ({
});

const mapDispatchToProps = {
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
