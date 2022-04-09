import React, { useEffect, useState } from 'react';
import { ISemanticContentsProps as IProps} from './semantic-contents-list';
import { NEWS, FACEBOOK } from '../../../views/img';
// import {ReactComponent as Icon} from '../../../assets/img/icon/icon_area.svg';


const SemanticContentsItem: React.FC<IProps> = () => {

  const renderKeyword = (): JSX.Element[] => {
    // let id = keywords.keywords.length
    // return keywords.keywords.map(keyword => {
    //   return (
    //     <>
    //       <PinkSwichButton isKeyword={false} btnName={keyword} id={"reco-keyword"+id--} />
    //     </>
    //   )
    // })
    return ;
  }

  return (
    <>

      <div className="col">
        <table className="card radius-2">
          <tbody className="card-b">
          <tr>
            {/*파일이 퍼블 리포지토리에 아직 없어서 페이스북으로ㅓ 넣음*/}
            <td className="va-top"><img src="img/icon/fb.png" className="i-img"/></td>
            <td className="c-title">오늘 인터넷 중단사태에 따른 KB PAY 관련 중요 이슈는 무엇인가요?</td>
          </tr>
          </tbody>
        </table>
      </div>

    </>
  );

}

export default SemanticContentsItem;

