import React, { useEffect, useState } from 'react';
import { IRootState } from '../../../shared/reducers';
import { connect } from 'react-redux';

export interface IKeywordProps {
  keywords: string[],
  MyWrdsFunc?: (Arr:any) => void,
}

export const KeywordSbcrbList = (props:IKeywordProps) => {
  const[keywordArr, setkeywordArr] = useState(
    props.keywords
  );

  useEffect(() => {

  }, []);

  return (
    <>
            <div className="col-12 col-md-12 col-lg-6">
              <h3>나의 구독 키워드</h3>
              <p className="k-tag-1">
                {/*span 태그로 나의 키워드를 .map()으로 노출*/}
                {
                  keywordArr.map((value, index) => {
                    return (
                      <span key={index.toString()}>{value}</span>
                    );
                  })
                }
              </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(KeywordSbcrbList);
