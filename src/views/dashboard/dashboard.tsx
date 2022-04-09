import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { IRootState } from '../../shared/reducers';
import DashboardList from '../component/dashboard/dashboard-list';


export const Dashboard = (props: any) => {

  const [userObj, setUserObj]=React.useState({
  })


  useEffect(() => {

  }, []);

  return (
    <>

        <div className="bg-primary-1">
          <div className="container">
            <div className="sub-top">
              <div className="sub-title">
                <h2>대시보드<span className="sub-title-en">Dashboard</span></h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="cont">
            <div className="cont-head">
              <div className="row">
                <div className="col-12">
                  <h5 className="cont-title">대시보드</h5>
                  <span className="cont-title-en">Dashboard</span>
                </div>
              </div>
            </div>
            <DashboardList />


            <div className="cont-bottom">
              <div className="row">
                <div className="col-12">
                  <div className="button-group-one">
                    <button className="btn btn-sm">more</button>
                  </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
