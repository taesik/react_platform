import React, { useEffect, useState } from 'react';
import { IRootState } from '../../shared/reducers';
import { connect } from 'react-redux';
import { INewsListProps } from '../component/news/news-list';
import {
        getSearchPlaceholder,
        getRcmdKeyword,
        getKeywordNewsList,
        } from '../../shared/reducers/api';
import {
  YOUTUBE,
  FACEBOOK,
  INSTAGRAM,
  TWITTER,
  NAVER,
  BLOG,
  NEWS,
  COMMUNITY, CHANNEL_IMG,
} from '../../views/img';
import NewsDetailModal from "../component/popup/news-contents-view";
import { INews } from '../../shared/model/news.model';

export interface IMainProps extends StateProps, DispatchProps {}

export const MainTmp = (props:IMainProps) => {

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
    "고객정보 유출",
    "대박 상품",
    "해외 직구"
  ];

  const kwdNewsList: INewsListProps["newsList"] = [
    {
      "id": "25ae24bc9a52138fbb6725dfe8396489",
      "title": "아주경제 실시간 뉴스",
      "content": "[사진=게티이미지뱅크] \r\n카드업계의 고객 모집 관련 사업 체질 재편 작업이 가속화되고 있다. 기존 모집인 의존도를 줄이는 대신, 온라인 채널 활용도를 높이는 추세가 뚜렷하다. 이에 따라 관련 비용 절감 등 부수적인 효과도 발생하고 있다.\r\n31일 여신금융협회에 따르면, 올 상반기 기준 7개 전업 카드사(신한��삼성��KB국민��현대��롯데��우리��하나카드)의 신용카드 모집인은 8533명으로 집계됐다. 이는 작년 동기(1만1703명)보다 27%(3170명) 감소한 수치다. 전체 모집인 수가 8000명대로 주저앉은 건 이번이 처음이다.\r\n모집인 수는 2016년 2만2872명에서 2017년 1만6658명까지 줄어들었다. 이후 2018년 1만2607명, 2019년 1만1382명, 2020년 9217명으로 줄곧 내리막길을 걷고 있다. 올 들어 짐을 싼 모집인 수만 544명에 달하는 것으로 조사됐다.\r\n여기엔 &lsquo;코로나19&rsquo; 이후 급물살을 탄 비대면 전환이 영향을 미쳤다. 이에 따라 그간 백화점��영화관��놀이공원 등 인구 밀집 공간에서 활발하게 이뤄졌던 모집 활동에 급제동이 걸렸다. PLCC(상업자 표시 신용카드)가 주류로 떠오른 점도 이를 유발한 요인 중 하나다. PLCC 카드는 제휴사 채널을 통해 유입이 이뤄지는 경우가 일반적이다.\r\n업계에서는 이러한 현상을 두고 &lsquo;건강한 변화&rsquo;로 바라보는 시각이 우세하다. 그간 모집인을 통해 카드 발급 규모를 빠르게 키울 수 있었지만, 대신 과도한 경쟁으로 휴면카드가 급증하는 등 부작용도 발생했기 때문이다. 실제로 올 2분기 전체 휴면 신용카드 수는 1206만7000장으로 작년 동기(1068만장)보다 12.9%(138만7000장)나 늘었다. 평균 휴면카드 비중은 16.04%에 달했다.\r\n이를 대체하기 위해 온라인을 통한 카드 발급 규모를 빠르게 키워가고 있다. 올 상반기 기준 온라인 발급 비중은 42.6%로 작년 말(37%)보다 5.6% 포인트 늘었다. 2015년 6.3%에 불과하던 온라인 신규발급 비중은 2017년 처음으로 두 자릿수(12.7%)를 기록한 이후 2018년 17.8%, 2019년 26.6%, 2020년 37.0%로 매년 확대됐다.\r\n이를 뒷받침하기 위한 마케팅 활동도 적극적으로 펼치고 있다. KB국민카드는 온라인으로 카드를 신규 발급하는 회원에게 연회비 100%를 되돌려주는 이벤트를 진행 중이다. 롯데카드도 우리은행과 제휴를 맺고 신규 카드를 발급한 뒤 매달 10만원 이상 사용할 경우, 연회비 100%를 캐시백해 주는 이벤트를 실시하고 있다.\r\n이에 따른 비용 절감효과도 뚜렷하다. 7개 카드사의 올 1분기 말 합산 모집 비용은 1793억800만원으로 작년 동기(2017억1100만원)보다 11%가량 줄었다. 현대카드(101억900만원&rarr;181억9600만원)를 제외한 나머지 카드사들의 관련 비용이 일제히 하락했다. 삼성카드의 낙폭(352억1000만원&rarr;285억9200만원)이 19%로 가장 컸다.\r\n이어 신한(477억7600만원&rarr;395억1100만원) 17.3%, 국민(468억&rarr;395억6800만원) 15.5%, 롯데(259억5100만원&rarr;221억3100만원) 14.7%, 우리(263억8500만원&rarr;229억5600만원) 13%, 하나(94억8000만원&rarr;83억5400만원)　11.9%　순으로 뒤를 이었다.\r\n카드업계 관계자는 &ldquo;올 하반기에도 온라인을 통한 카드 발급 규모가 늘고, 모집인 수는 줄어드는 기조가 더욱 가속화될 것&rdquo;이라며 &ldquo;다만 모집인의 대체할 수 없는 역할도 뚜렷한 만큼, 일정 규모까지 쪼그라들면 감소세에 제동이 걸릴 것&rdquo;이라고 말했다.",
      "media": "아주경제",
      "channel": "news",
      "url": "http://www.ajunews.com/util/sokbo_view?newsId=20210831144658366",
      "date": "2021-08-31T09:00:00",
      "entities": [
        "KB국민카드"
      ]
    },
    {
      "id": "3832567a47781b5680907b318f03c0aa",
      "title": "올 3분기 카드승인액 8.6%↑…'코로나19' 회복 기대감 반영",
      "content": "[자료=여신금융협회 제공 ] \r\n올 3분기 카드 승인실적이 큰 폭으로 개선됐다. ‘코로나19’ 백신 접종 확대에 따른 경제회복 기대감, 코로나 상생 국민지원금 지급 등이 복합적으로 작용한 결과다.\r\n29일 여신금융협회가 발표한 ‘2021년 3분기 카드승인실적 분석’ 자료에 따르면, 올 3분기 전체 카드 승인금액은 248조원으로 집계됐다. 이는 전년 동기보다 8.6% 증가한 수치다. 같은 기간 승인 건수 역시 60억7000만 건으로 7.3% 늘었다.\r\n이 중 신용카드 승인금액 및 건수는 각각 192조5000억원, 37억2000만건으로 전년 동기보다 8.5%, 8.0%씩 증가했다. 체크카드 역시 54조3000억원, 23억건으로 8.6%, 6.2%씩 늘었다.\r\n직접적인 원인은 ‘코로나 백신’ 접종률 확대 효과다. 이후 경제회복에 대한 기대감이 고조되며, 소비 심리 회복세를 이끌었다. 실제로 앞서 한국은행이 발표한 소비자심리지수는 7월 103.2, 8월 102.5, 9월 103.8으로 양호한 수준을 유지했다.\r\n여기에 비대면·온라인을 통한 구매 수요도 늘며 힘을 보탰다. 통계청에 따르면 올 7~8월 온라인쇼핑 거래액은 31조9560억원으로 작년 동기(27조650억원)보다 18.1%나 늘었다. 이외 지난 9월 코로나 상생 국민지원금 신청 및 지급이 시작된 점도 긍정 작용했다.\r\n카드 종류별로 보면, 개인카드의 승인금액 및 승인 건수는 204조4000억원, 57억1000건으로 작년 동기보다 8.6%, 7.4%씩 각각 증가했다. 같은 기간 법인카드도 43조7000억원, 3억5000건으로 8.3%, 5.2%씩 늘었다.\r\n업종별로는 도매 및 소매업(12.2%), 운수업(5.1%), 교육서비스업(18.5%) 등이 증가세를 보인 반면, 숙박 및 음식점업(-7.0%)은 줄었다. 도소매업은 비대면 ·온라인 구매 증가, 대형마트 중심의 매출 회복 영향이 컸다. 숙박 및 음식점업은 여행·이동 및 회식 자제 등의 여파가 여전히 이어졌다. \r\n한영훈 기자 han@ajunews.com\r\n★관련기사 \r\n공정위, 부처 간 갈등 불거지자 '협업 카드' 꺼내들었다 \r\n훨훨 날던 '카드론 증가세'…대출규제로 성장 꺾였다 \r\n?금융위, 적극행정 사례로 '카드포인트 현금화' 선정 \r\nKB국민카드, 금융회사 지배구조 평가 2년 연속 ‘A+’등급 획득 \r\n[카드뉴스] 정선 하늘길트레킹, 호텔뷔페처럼 즐기는 방법 \r\n★추천기사 \r\n[단독] 카카오, 서울대 시흥캠퍼스에 데이터센터 짓는다 \r\n?페이스북, '메타'로 이름 바꾸고 새로운 정체성 확립한다 \r\n?\"유지냐 철거냐\" 김포 장릉 아파트 운명의 날…문화재청 심사 \r\n[단독] 바이든 출범 후 中 연구용역 줄었다…美로 기우는 외교 저울 \r\n광명8구역, 성남 금광2동 등 도심 주택공급 후보지로 선정 \r\n- Copyright ⓒ [아주경제 ajunews.com] 무단전재 배포금지 -",
      "media": "네이트",
      "channel": "news",
      "url": "https://news.nate.com/view/20211029n09993?mid=n0100",
      "date": "2021-10-29T19:21:00",
      "entities": [
        "KB국민카드"
      ]
    },
    {
      "id": "3ca51404bea81c1fb302c39c94cd52c5",
      "title": "리브메이트 29일 오늘의 퀴즈 정답 공개 \"밧세바 신드롬\"",
      "content": "'리브메이트' 오늘(29일) 오늘의 퀴즈 정답이 공개됐다.\r\n이날 오전 10시 리브메이트 측은 매일매일 색다른 오늘의 퀴즈 문제를 제시했다.\r\n공개된 문제는 \"밧세바 신드롬은 권력자의 추문 등 사회 지도층의 도덕의식 결핍을 뜻하는 용어이다\"이다.\r\n정답은 'O', 'X' 중에 선택하면 되며, 퀴즈의 정답은 'O'이다.\r\n오늘의 퀴즈 정답을 맞히면 소정의 포인트가 적립된다.\r\n이밖에도 리브메이트는 출석체크, 바로적립, 일반상식퀴즈 등 이벤트를 진행 중이다.\r\n한편, '리브메이트'는 KB국민카드의 마이데이터 서비스 플랫폼이다.\r\n데일리한국",
      "media": "네이트",
      "channel": "news",
      "url": "https://news.nate.com/view/20211029n09136?mid=n0100",
      "date": "2021-10-29T19:03:00",
      "entities": [
        "KB국민카드"
      ]
    }
  ]

  const [orderedList, setOrderedList] = useState([]);

  useEffect(() => {
    props.getSearchPlaceholder();
    console.log("getSearchPlaceholder : "+props.searchPlaceholder);
  }, [props.searchPlaceholder]);

  useEffect(() => {
    props.getRcmdKeyword();
    console.log("getRcmdKeyword : "+props.rcmdKeywords);
  }, [props.rcmdKeywords]);

  // useEffect(() => {
  //   props.getKeywordNewsList(keywords);
  //   console.log("getSearchPlaceholder"+props.searchPlaceholder);
  // }, [props.newsList]);

  // useEffect(() => {
  //   if( props.newsList.length == 0 )
  //     return;
  //
  //   const origin = new Array<INews>(...props.newsList);
  //   const list = origin.sort( (a : INews, b : INews ) => { return a.date > b.date ? -1 : 1 });
  //
  //   setOrderedList(list);
  // }, [props.newsList]);

  const renderList = (): JSX.Element[] => {
    if (kwdNewsList.length==0) return;

    return kwdNewsList && kwdNewsList.map(newsItem => {
      return (
        <main>
          <div className="container center">
            <div className="row">
              <div className="col-12 mb-2 mb-md-4">
                <a className="text-decoration-none" href="#">
                </a>
              </div>

              <div className="col-12 mb-4">
                <form className="search">
              <span className="position-absolute search-icon">
                <i className="fe fe-search"></i>
              </span>
                  <input type="search" className="form-control ps-6"
                         placeholder="문장이나 단락을 통해 의도를 이해하는 시맨틱 검색을 경험해 보세요"
                  />
                </form>
              </div>
            </div>

            <div className="row w-792">
              <div className="col-12 mb-2">
                <h5 className="cont-title">키워드 뉴스</h5>
                <span className="cont-title-en">Keyword News</span>
              </div>

              {
                kwdNewsList && kwdNewsList.map((value) => {
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
      console.log(channel);
      break;
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

export default connect(mapStateToProps, mapDispatchToProps)(MainTmp);
