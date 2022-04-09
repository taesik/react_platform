import React, { useEffect, useRef, useState } from 'react';
import { IRootState } from '../../../shared/reducers';
import { connect } from 'react-redux';
import { INewsListProps, INewsListProps as Props } from './news-list';
import SwichButton from '../button/swichButton';
import {
  CHANNEL_IMG,
  YOUTUBE,
  NEWS,
  COMMUNITY,
  INSTAGRAM,
  BLOG,
  NAVER,
  TWITTER,
  FACEBOOK
} from '../../img';
import NewsDetailModal from '../popup/news-contents-view';
import KeywordsModal from '../popup/keywords-modal';
import { INews } from '../../../shared/model/news.model';
import {event} from "jquery";


interface INewsItemProps {
  newsList: readonly INews[],
  myKeywords : string[],
  MyWrdsFunc ?: (arr:any) => void,
}

export const NewsItem: React.FC<Props> = (props:INewsItemProps) => {

  const [recievedMyWrds,setRecievedMyWrds] = useState(props.myKeywords);
  const [modalShow, setModalShow] = React.useState(false);
  const [childItem, setChildItem] = React.useState(
    {
      id : "",
      title : "",
      content : "",
      date : "",
      media : "",
      entities : []
    }
  );


  const [checkItem,setCheckItem] = useState({
    keywrd:'',
    checked:false,
    isAdd:false
  })
  const checkRef = useRef();
  const [isAddBool, setIsAddBool] = useState(true);

  useEffect(()=>{
    console.log(`props.myKeywords : ${props.myKeywords}`);
  },[ props.myKeywords]);

  const [isShow, setShow] = React.useState(false);
  //+ - 클릭시 새로운 키워드로 추가될 배열
  const [wordPlus,setWordPlus] = useState([] as string[]);
  const [beforeCheck,setBeforeCheck] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const renderList = (): JSX.Element[] => {

    if( props.newsList.length == 0 )
    {
      return;
    }

    const keywrds = checkItem;

    const onChange = e =>{
      const { value,checked } = e.target;
      setCheckItem({
        ...checkItem,
        [checked] : checked,
        [value] : value,
        isAdd : checked
      });

      console.log("checked " +checkItem.checked+" / value : " + checkItem.keywrd+" / isAdd : "+ checkItem.isAdd)
      if(checked!==beforeCheck){
        setIsAddBool(!isAddBool);
        setBeforeCheck(checked);
      }else{

      }
      handleShow();
    }

    return props.newsList.map(newsItem => {

      return (
        <>
          <div className="cont-list-item border-0">
            <img className="item-img" src={itemChannelImg(newsItem.channel)} />
            <div className="item-info"
                 onClick={() => {setModalShow(true);
                                 setChildItem({title:newsItem.title,
                                                    content: newsItem.content,
                                                    date: newsItem.date,
                                                    media: newsItem.media,
                                                    entities: newsItem.entities,
                                                    id: newsItem.id
                                                  }
                                 )}
                }>
              <h5 className="item-title">{newsItem.title}</h5>
                 <ul className="item-desc">
                  <span><i className="bi bi-clock" /></span>
                  <li>{newsItem.date}</li>
                 </ul>
                  <ul className="item-desc">
                    <span><i className="bi bi-link-45deg" /></span>
                    <li>{newsItem.media}</li>
                  </ul>
              <p className="item-text">
                {
                  newsItem && newsItem.content
                }
              </p>
            </div>

            <div className="k-tag z-index">
              {newsItem.entities.map((value,index) =>{
                // let isCheck:boolean = recievedMyWrds.includes(item);
                console.log("recievedMyWrds : "+recievedMyWrds);
                return (
                    (<>
                    <div className="cb-group">
                      <input type="checkbox"
                             ref={checkRef}
                             id={`${index.toString()}-${value}`}
                             onChange={onChange}
                             onClick={(event) => {
                               // - 클릭시는 새로운 키워드에 빈 배열로 set하여 안나오도록 하기위한 조건문

                             setWordPlus([`${value}`]);
                             console.log(`wordPlus = ${wordPlus}`);
                             }}
                             /* 나의 구독 키워드에 있다면 checked로 */
                             checked={props.myKeywords.includes(value)}
                             value={value}
                             />
                      <label htmlFor={`${index.toString()}-${value}`}>{value}<span></span></label>
                    </div>
                  </>)
                );
              })
              }
            </div>
          </div>
        </>
      )
    })
  }

  return (
    <>
      {renderList()}
      <NewsDetailModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        newsTitle={childItem.title}
        newsContent={childItem.content}
        newsDate={childItem.date}
        newsMedia={childItem.media}
        newsID={childItem.id}
        newsEntities={childItem.entities}
      />
      {/*isAdd : 키워드 빼기인 경우 false 더할경우는 true;*/}
      <KeywordsModal
        isShow={isShow}
        isAdd={isAddBool}
        /*TODO 모달에서 취소클릭시 상태값유지*/
        /**
         * TODO API로 받아온 "나의 구독 키워드" 배열을 subscrbArr에 넣자
         **/
        subscrbArr={recievedMyWrds || []}
        keywordArr={wordPlus}
        MyWrdsFunc={props.MyWrdsFunc}
        closeFunc=
        {
          ()=>
          {
            handleClose();
          }
        }/>
    </>
  );
}

function itemChannelImg (channel : string){
  switch (channel) {
    case CHANNEL_IMG.YOUTUBE:
      return YOUTUBE;
    case CHANNEL_IMG.NEWS:
      return NEWS;
    case CHANNEL_IMG.NAVER:
      return NAVER;
    case CHANNEL_IMG.BLOG:
      return BLOG;
    case CHANNEL_IMG.INSTAGRAM:
      return INSTAGRAM;
    case CHANNEL_IMG.FACEBOOK:
      return FACEBOOK;
    case CHANNEL_IMG.TWITTER:
      return TWITTER;
    case CHANNEL_IMG.COMMUNITY:
      return COMMUNITY;
    default:
      break;
  }
}


const mapStateToProps = ({  }: IRootState) => ({
});

const mapDispatchToProps = {
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(NewsItem);

