import React, { useEffect, useState } from 'react';
import { IDashboardProps as IProps } from './dashboard-list';
import NewsDetailModal from '../popup/news-contents-view';
import DashboardDetailModal from '../popup/dashboard-contents-view';
import { BLOG,
        FACEBOOK} from '../../../views/img';
// import {ReactComponent as Icon} from '../../../assets/img/icon/icon_area.svg';

const DashboardItem: React.FC<IProps> = () => {

  // const [isHover, setIsHover]=React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);

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

  // const handleMouseEnter = () => {
  //   setIsHover(true);
  //   console.log("IsHover : "+isHover?"YES":"NO");
  // }
  // const handleMouseLeave = () => {
  //   setIsHover(false);
  //   console.log("IsHover : "+isHover?"YES":"NO");
  // }


  return (
    <>

      <div className="col">
        <div className="card">
          <div className="card-list" onClick={() => {setModalShow(true) } }
                                                  // onMouseOver={
                                                  //   // ((e)=>{
                                                  //   //   console.log("hover")
                                                  //   // }).bind(this)
                                                  //   handleMouseEnter
                                                  // }
                                                  // onMouseOut={
                                                  //   // ((e)=>{
                                                  //   //   console.log("not hover")
                                                  //   // }).bind(this)
                                                  //   handleMouseLeave
                                                  // }
                                                  >
            {/*{isHover ? <img className="item-images d-inline-block mr-1" src={BLOG} />:<img className="item-images d-inline-block mr-1" src={FACEBOOK} />}*/}
            {/*<Icon className="item-images" />*/}
            <div className="bi-xy-2 bi-area"></div>
            <div className="card-item">
              <h5 className="card-item-title">신규 사용이</h5>
              <ul className="card-item-desc">
                <span><i className="bi bi-clock"/></span>
                <li>2020-12-31 23:57:14</li>
              </ul>
            </div>
            <div className="card-item-tag txt-post">
              <span>#KB국민카드</span>
              <span>#KB국민카드</span>
              <span>#KB국민카드</span>
              <span>#KB국민카드</span>
              <span>#KB국민카드</span>
            </div>
          </div>
        </div>
      </div>

      <DashboardDetailModal
        show={modalShow}
        onHide={() => setModalShow(false)}

      />
    </>
  );

}

export default DashboardItem;

