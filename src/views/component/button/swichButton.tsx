import React, { useEffect, useState } from 'react';
import { IRootState } from '../../../shared/reducers';
import { getKeywordNewsList } from '../../../shared/reducers/api';
import { connect, useSelector } from 'react-redux';
import { Main } from '../../main/main';
import { NodeLib } from 'three/examples/jsm/nodes/core/NodeLib';



interface IBTNProp {
  isKeyword: boolean,
  btnName: string,
  id:string
}
const SwichButton = (props:IBTNProp) => {

  const [bChecked, setChecked] = useState(false);


  useEffect(() => {

    // getKeywordNewsList()
  }, [props.isKeyword]);



  return (
    <>
      {
        <li>
          <div className="toggle-group">
            <input type="checkbox" id={props.id} className="input-toggle" checked={props.isKeyword}  />
            <label htmlFor={props.id} className="label-toggle"><span className="toggle">{props.btnName}</span></label>
          </div>
        </li>
      }
    </>
  );
}

const mapStateToProps = ({ api }: IRootState) => ({
  myKeywords: api.myKeywords,
  rcmdKeywords: api.rcmdKeywords,
});

const mapDispatchToProps = {
  getKeywordNewsList
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(SwichButton);
