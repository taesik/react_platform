import React from 'react';
import Pagination from "react-js-pagination";

// https://github.com/wwwaiser/react-js-pagination 라이브러리 사용

const Pager = ({handlePageChange, activePage, totalItemsCount, itemsCountPerPage}) => {
  return (
    <>
      {
        !totalItemsCount ? '' :
          <div className={'table-page'}>
            <Pagination
              activePage={activePage}
              itemsCountPerPage={itemsCountPerPage}
              totalItemsCount={totalItemsCount}
              pageRangeDisplayed={10}                       // 하단에 보여질 페이지 개수
              onChange={handlePageChange}                   // 페이지 이동 시 호출될 함수
              prevPageText={<i className="icon-arrow"></i>}
              nextPageText={<i className="icon-arrow"></i>}
              hideFirstLastPages={true}
              activeClass={'on'}
              itemClass={'navi number'}
              itemClassPrev={'left'}
              itemClassNext={'right'}
            />
          </div>
      }
    </>
  );
}

export default Pager;
