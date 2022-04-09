import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { IRootState } from '../../shared/reducers';
import SemanticContentsList from '../component/semantic/semantic-contents-list';


export const SemanticContents = (props: any) => {



  useEffect(() => {

  }, []);

  return (
    <>

      <div className="container row-custom">
        <div className="content mt-4">
          <div className="content-header">
            <div className="row">
              <div className="col-12 mx-2">
                <h5 className="content-header-title">대시보드</h5>
                <p className="title-en">Dashboard</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="cont py-4">

            <SemanticContentsList />
          </div>
        </div>

        <div className="content-bottom">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <button className="btn btn-lg-sm btn-md-sm btn-sm btn-secondary m-auto radius-30">more</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(SemanticContents);
