import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { IRootState } from '../../shared/reducers';


export const Keyword = (props: any) => {



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
