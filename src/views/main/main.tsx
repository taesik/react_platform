import React, { useEffect, useState } from 'react';
import { IRootState } from '../../shared/reducers';
import { connect } from 'react-redux';
import {
  getRcmdKeyword,
  getKeywordNewsList, getSearchPlaceholder,
} from '../../shared/reducers/api';
import {
  SEARCH_DOT_RIGHT,
  SEARCH_DOT_LEFT,
  YOUTUBE,
  FACEBOOK,
  INSTAGRAM,
  TWITTER,
  NAVER,
  BLOG,
  NEWS,
  COMMUNITY, CHANNEL_IMG,
} from '../../views/img';
import { INews } from '../../shared/model/news.model';
import NewsDetailModal from '../component/popup/news-contents-view';
import InitPage from '../init-page';


export interface IMainProps extends StateProps, DispatchProps {}

export const Main = (props: IMainProps) => {

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

  const keywords:string[] = [
    "card"
  ];

  const [orderedList, setOrderedList] = useState([]);


  useEffect(() => {
    initAPI()
  }, []);

  const initAPI = async () => {
    await props.getRcmdKeyword();

    const keys = new Array<string>(...props.rcmdKeywords.keywordList||[]);
    console.log("rcmdkwd keywordList1 : "+ keys);

    await props.getKeywordNewsList(keywords);

  }


  useEffect(() => {
    if( props.newsList.length == 0 )
      return;

    const origin = new Array<INews>(...props.newsList);
    const list = origin.sort( (a : INews, b : INews ) => { return a.date > b.date ? -1 : 1 });
    //최신 3개만

    setOrderedList(list.slice(0,3));
  }, [props.newsList]);

  const renderList = (): JSX.Element[] => {
    if (orderedList.length==0) return;

    return orderedList && orderedList.map(newsItem => {
      return (
        <main>
          <div className="container center">
            <div className="row mx-md-3">
              <div className="col-12">
                <div className="main-title">
                  {/*<img src={'/'}/>*/}
                    <h3>What is main issue</h3>
                </div>
            </div>

              <div className="col-12">
                <img src={SEARCH_DOT_LEFT} className="s-left"/>
                  <form className="main-search" action="">
                    <input type="text" placeholder="" name="search"/>
                      <button type="submit"><i className="bi bi-search"></i></button>
                  </form>
                  <img src={SEARCH_DOT_RIGHT} className="s-right"/>
              </div>

            <div className="col-12">
              <h5 className="cont-title">키워드 뉴스</h5>
              <span className="cont-title-en">Keyword News</span>
            </div>


            {
                orderedList && orderedList.map((value) => {
                  return (
                    <>
                      <div className="col-12">
                        <div className="cont-list-item"
                             onClick={() => {
                               setModalShow(true);
                               setChildItem({
                                   title: value.title,
                                   content: value.content,
                                   date: value.date,
                                   media: value.media,
                                   entities: value.entities,
                                   id: value.id
                                 }
                               )
                             }
                             }
                        >
                          <img className="item-img" src={itemChannelImg(value.channel)}/>
                          <div className="item-info" >
                            <h5 className="item-title">{value.title}</h5>
                            <ul className="item-desc">
                              <span><i className="bi bi-clock"></i></span>
                              <li>{value.date}</li>
                            </ul>
                            <ul className="item-desc">
                              <span><i className="bi bi-link-45deg"></i></span>
                              <li>{value.media}</li>
                            </ul>
                            <p className="item-text">
                              {value.content}
                            </p>
                          </div>
                        </div>
                      </div>
                    </>);
                })
              }
            </div>
          </div>
        </main>
      )
    })
  }

  return (
    <>
      {
      props.isLoading ?
         <InitPage />
      :
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
            newsEntities={['']}
          />
        </>
      }
    </>
  );

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
        console.log(channel);
        break;
    }
  }
}


const mapStateToProps = ({ api }: IRootState) => ({
  isLoading: api.loading,
  searchPlaceholder: api.searchPlaceholder,
  rcmdKeywords: api.rcmdKeywords,
  newsList: api.newsList,
});

const mapDispatchToProps = {
  getSearchPlaceholder,
  getRcmdKeyword,
  getKeywordNewsList,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Main);
