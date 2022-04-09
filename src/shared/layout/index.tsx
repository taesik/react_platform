import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { IRootState } from 'shared/reducers';
import ErrorBoundaryRoute from '../error/error-boundary-route';
import { Router, Switch } from 'react-router-dom';
import Main from '../../views/main/main';
import '../../assets/libs/bootstrap/bootstrap.min.css';
import '../../assets/libs/bootstrap/bootstrap-icon.min.css';
import '../../assets/css/styles.css';
import { Login } from '../../views/login/login';
import { Dashboard } from '../../views/dashboard/dashboard';
import { SearchResults } from '../../views/result/search-result';
import { MainTmp } from '../../views/main/mainTmp';
import WriteDashboard from '../../views/admin/write-dashboard';
import { KeywordNews } from '../../views/keyword/keyword-news';
import { AnalysisReport } from '../../views/report/analysis-report';
import { AnalysisReportDetail } from '../../views/report/analysis-report-detail';
import Header from '../../views/component/header/header';
import { SearchResultKeywordNews } from '../../views/keyword/search-result-keyword-news';
import {AdminDashBrd} from "../../views/admin/admin-dashboard";
import {AdminKeyword} from "../../views/admin/admin-keyword";
import Footer from '../../views/component/footer/footer';


export interface ITemplateProps extends StateProps, DispatchProps {}

export const Index = (props: ITemplateProps) => {

  const [user, setUser] = useState("");

  useEffect(() => {

  }, []);

  return (
    <>

      <Header match={undefined} history={undefined} location={undefined}  />

      <Switch>
        <ErrorBoundaryRoute path='/login' component={Login} />
        {/*<ErrorBoundaryRoute path='/main' component={Main} />*/}
        <ErrorBoundaryRoute path='/main' component={Main} />
        <ErrorBoundaryRoute path='/dashboard' component={Dashboard} />
        <ErrorBoundaryRoute path='/analysis-report' component={AnalysisReport} />
        <ErrorBoundaryRoute path='/analysis-report-detail' component={AnalysisReportDetail} />
        <ErrorBoundaryRoute path='/search-result' component={SearchResults} />
        <ErrorBoundaryRoute path='/keyword-news' component={KeywordNews} />
        <ErrorBoundaryRoute path='/result-keyword-news' component={SearchResultKeywordNews} />
        <ErrorBoundaryRoute path='/admin-dashboard' component={AdminDashBrd} />
        <ErrorBoundaryRoute path='/admin-keyword' component={AdminKeyword} />
      </Switch>

      <Footer />
    </>
  );
}

const mapStateToProps = ({ isLoading }: IRootState) => ({
  remainAxiosRequest: isLoading.remainAxiosRequest,
  // isAuthenticated: authentication.isAuthenticated,
  // isAdmin: hasAnyAuthority(authentication.account.authorities, [AUTHORITIES.ADMIN]),
});

const mapDispatchToProps = {
  // getSession
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Index);
