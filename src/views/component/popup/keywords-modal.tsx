import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { IRootState } from '../../../shared/reducers';
import { connect } from 'react-redux';
import { Keyword } from '../../keyword/keyword';
import {IKeywordProps} from "../keyword/keyword-rcmd-list";


export interface IMainProps extends StateProps, DispatchProps {
  isShow : boolean,
  isAdd : boolean,
  subscrbArr : string[],
  keywordArr : string[],
  closeFunc:() => void;
  singleWord?: string,
  MyWrdsFunc?: (arr:string[]) => void,
  // singleWord 는 + 또는 -로 클릭 시 받는 단어 하나
}

const KeywordsModal = (props:IMainProps) => {

  const [recievedMyWrds,setRecievedMyWrds] = useState<IKeywordProps["keywords"]>(props.subscrbArr);
  const [recievedOtherWrds,setRecievedOtherWrds] = useState<IKeywordProps["keywords"]>(props.keywordArr);
  let a=0;
  const [parameterItem,setParameterItem] = useState([]);

  useEffect(() => {
    // parameterArr 초기값
    let newArr = new Array<string>(...props.subscrbArr);
    console.log(`recievedOtherWrds : ${recievedOtherWrds[0]}`);
    console.log(`props.keywordArr :  ${props.keywordArr}`);
    if(props.isAdd===false)newArr.splice(newArr.indexOf(props.keywordArr.join()), 1);

    setParameterItem(newArr);
    console.log(`newArr : ${newArr}`);
    console.log("init param : "+parameterItem);
  }, [props.keywordArr]);

  const checkRef = useRef();

  const [checkItem,setCheckItem] = useState({
    keywrd:'',
    checked:false
  });

  const keywrd = checkItem;

  const onChange = e =>{
    const { value,checked } = e.target;
    setCheckItem({
      ...checkItem,
      [checked] : checked,
      [value] : value
    });
    console.log("checkItem : "+ value+" / checked : "+checked);
    console.log(...checkItem.keywrd);

    if (checked === true ) {
      if(!parameterItem.includes(value)){
        setParameterItem([...parameterItem, value]);
      }
    } else {
      if(parameterItem.includes(value)) {
        parameterItem.splice(parameterItem.indexOf(value), 1);
      }
    }
    console.log(parameterItem);
  }

  const enrollWithAPI = () => {
    let keywrds = [...parameterItem];
    console.log("Sum : "+ keywrds);
    // 저장 클릭 시 반영된 나의 키워드로 노출시키기
    setRecievedMyWrds(keywrds);
    props.MyWrdsFunc(keywrds);
    console.log(`recievedMyWrds : ${recievedMyWrds}`);
    props.closeFunc();
  }

  return (
    <Modal
      {...props}
      show={props.isShow}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="props.">
          <h5 className="modal-title bb-1">구독 키워드 관리</h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <div className="modal-body">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <dl className="my-keyword">
                <dt>나의 구독 키워드</dt>
                {
                  recievedMyWrds && recievedMyWrds.map((value, index) => {

                    return (
                      <>
                        <dd>
                          <h6>{value}</h6>
                          <div className="toggle-group">
                            <input key={`${index.toString()}-${value}`} id={`m-${index.toString()}-${value}`}
                                   ref={checkRef}
                                   className="checkbox-toggle toggle-switch"
                                   type="checkbox"
                                   value={value}
                                   onChange={onChange}
                                   defaultChecked={
                                     props.isAdd===false&&value===props.keywordArr[0]? false:true
                                   } />
                            <label htmlFor={`m-${index.toString()}-${value}`} data-on="ON" data-off="OFF"></label>
                          </div>
                        </dd>
                      </>
                    );
                  })
                }
              </dl>

            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <dl className="my-keyword">
                <dt>새로운 구독 키워드</dt>
                {
                  props.keywordArr && props.keywordArr.map((value:string, index:number) => {

                    return (
                      <>
                        <dd hidden={!props.isAdd}>
                          {/*TODO value 단어 를 인덱스로 다시 접근*/}
                          <h6>{value}</h6>
                          <div className="toggle-group" >
                            <input key={`${(index+recievedMyWrds.length).toString()}-${value}`} id={`m-${(index+recievedMyWrds.length).toString()}-${value}`} className="checkbox-toggle toggle-switch"
                                   type="checkbox"
                                   ref={checkRef}
                                   value={value}
                                   defaultChecked={recievedMyWrds.includes(value)}
                                   onChange={onChange}/>
                            <label htmlFor={`m-${(index+recievedMyWrds.length).toString()}-${value}`} data-on="ON" data-off="OFF"></label>
                          </div>
                        </dd>
                      </>
                    );
                  })
                }
              </dl>
            </div>
          </div>
        </div>

      </Modal.Body>
      <Modal.Footer>
        <div className="modal-footer">
          <Button className="btn btn-cancel" data-bs-dismiss="modal"
                  onClick={
                    ()=>{
                      props.closeFunc();
                    }
                  }
          >취소</Button>
          <Button className="btn btn-update"
                  onClick={enrollWithAPI}>등록</Button>

        </div>
      </Modal.Footer>
    </Modal>
  );
}


const mapStateToProps = ({  }: IRootState) => ({
});

const mapDispatchToProps = {
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(KeywordsModal);
