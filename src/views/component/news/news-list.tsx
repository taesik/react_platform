import React, { useEffect, useState } from 'react';
import { IRootState } from '../../../shared/reducers';
import { connect } from 'react-redux';
import { NewsItem } from './news-item';
import { YOUTUBE } from '../../../views/img';
import { INews } from '../../../shared/model/news.model';

export interface INewsListProps {
	newsList: readonly INews[],
  myKeywords : string[]
  MyWrdsFunc?: (arr:any) =>void,
}

export const NewsList = (props:INewsListProps) => {

  const[newsList, setNewsList] = useState<INewsListProps["newsList"]>(
    props.newsList.slice(0,3)
  )

  const moreAction = () => {
    let j:number = 3

    setNewsList(props.newsList.slice(0,newsList.length+j))
  }

	useEffect(() => {
		// 현재는 데이터가 새로고침할 때만 받아와 짐
    setNewsList(props.newsList.slice(0,3));
  }, [props.newsList]);

  return (
    <>
      <div className="cont-body">
        <div className="cont-list">
          <div className="row">
            <div className="col-12">
                <NewsItem myKeywords={props.myKeywords} newsList={newsList}  MyWrdsFunc={props.MyWrdsFunc}/>
            </div>
          </div>
        </div>
      </div>
      <div className="cont-bottom">
        <div className="row">
          <div className="col-12">
            <div className="button-group-one">
              <button className="btn btn-sm" onClick={moreAction}>more</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


const mapStateToProps = ({ api }: IRootState) => ({

});

const mapDispatchToProps = {

};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
