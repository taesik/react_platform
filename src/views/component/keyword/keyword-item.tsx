import React, { useEffect, useState } from 'react';
import { IRootState } from '../../../shared/reducers';
import { connect } from 'react-redux';
import { IKeywordProps as IProps} from './keyword-rcmd-list';
import PinkSwichButton from '../button/pinkSwichButton';

export const KeywordItem: React.FC<IProps> = (keywords) => {

  const renderKeyword = (): JSX.Element[] => {
    let id = keywords.keywords.length
    return keywords.keywords.map(keyword => {
      return (
        <>
          <div className="item-tag z-index">
            <ul className="toggle-list">
              <PinkSwichButton isKeyword={false} btnName={keyword} id={"reco-keyword"+id--} />
            </ul>
          </div>
        </>
      )
    })
  }


  return (
    <>
      <ul className="toggle-list">
        {renderKeyword()}
      </ul>
    </>
  );

}

const mapStateToProps = ({  }: IRootState) => ({
});

const mapDispatchToProps = {

};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(KeywordItem);

