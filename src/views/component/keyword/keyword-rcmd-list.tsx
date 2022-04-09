import React, { useEffect, useState } from 'react';
import { IRootState } from '../../../shared/reducers';
import { connect } from 'react-redux';
import {Button} from "react-bootstrap";
import KeywordsModal from '../popup/keywords-modal';

export interface IKeywordProps {
  //타인 또는 추천으로 뜬 키워드
  keywords: string[],
  myWrds?:string[],
  MyWrdsFunc?: (arr:any)=>void,
}

export const KeywordRcmdList = (props:IKeywordProps) => {

  const [subscrbArr,setSubscrbArr] =useState<IKeywordProps["keywords"]>(
    props.myWrds
  );
  const[keywordArr, setkeywordArr] = useState<IKeywordProps["keywords"]>(
    props.keywords
  );
  const [checkedItems,setCheckedItems] = useState(
    new Set(subscrbArr as string[])
  );
  const checkedItemHandler = (id, isChecked) => {
    if(isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
    }else if ((!isChecked) && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems)
    }
  }

  useEffect(() => {

  }, []);


  const [isShow, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  }

  return (
    <>
      <div className="col-12 col-md-12 col-lg-6">
        <h3 className="d-inline-block va-middle">추천 키워드</h3>
        <Button variant="primary" className="btn btn-primary tag-b" onClick={handleShow}>내 키워드에 반영</Button>
        <p className="k-tag-2">
          {
            keywordArr.map((value, index) => {
              return (
                <span key={value+index}>{value}</span>
              );
            })
          }
        </p>
      </div>
      {/*isAdd : 키워드 빼기인 경우 false 더할경우는 true;*/}
      <KeywordsModal isShow={isShow} isAdd={true} subscrbArr={subscrbArr} keywordArr={keywordArr} closeFunc={handleClose}/>
    </>
  );
}

const mapStateToProps = ({  }: IRootState) => ({

});

const mapDispatchToProps = {

};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(KeywordRcmdList);
