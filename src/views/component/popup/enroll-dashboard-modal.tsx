import React, {FunctionComponent, useEffect, useState} from 'react';
import { Modal} from "react-bootstrap";
import DateRangePicker from "react-bootstrap-daterangepicker";
import moment from "moment";

/**
 * 이 하단 임포트는 안할경우 daterangepicker의 캘린더가 출력되지않는다.
 * 임포트하면 다른 css가 깨져서 임시적으로 주석처리함
 */

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-daterangepicker/daterangepicker.css";


export interface  ModalProps {
  isShow: boolean;
  modalContent?: JSX.Element;
  closeFunc:() => void;
}
const EnrollDshBrdModal = (props:ModalProps) => {
  const Options = [
    {key:1, value:"매일"},
    {key:2, value:"주간"},
    {key:3, value:"월간"},
  ];
  /**
   * 대시보드 신규등록시 입력될 데이터
   */
  const [title, setTitle] = useState("");
  const [belong, setBelong] = useState("");
  const [name, setName] = useState("");
  const [updateCycle, setUpdateCycle] = useState("");
  const [dateCreated, setDateCreated] = useState("");
  const [dashboardType, setDashboardType] = useState("");
  const [keyword, setKeyword] = useState("");
  const [url, setUrl] = useState("");
  const [fromdate, setFromDate] = useState(new Date().toISOString().substring(0,10));
  const [toDate, setToDate] = useState("");

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  }
  const onChangeBelong = e => {
    setBelong(e.target.value);
  }
  const onChangeName = e => {
    setName(e.target.value);
  }
  const onChangeUpdateCycle = e => {
    setUpdateCycle(e.currentTarget.value);
  }
  const onChangeDashboardType = e => {
    setDashboardType(e.currentTarget.id);
  }
  const onChangeDateCreated = e => {
    setDateCreated(e.target.value);
  }
  const onChangeKeyword = e => {
    setKeyword(e.target.value);
  }
  const onChangeUrl = e => {
    setUrl(e.target.value);
  }
  // const onChangeDate = e=> {setDate(e.target.value);}
  const handleChangeS = e => {
    // e.preventDefault();
    // e.stopPropagation();
    setFromDate(e.target.value);
  }

  useEffect(() => {
    // console.log(`title:${title}`);
    // console.log(`belong:${belong}`);
    // console.log(`name:${name}`);
    // console.log(`updateCycle:${updateCycle}`);
    // console.log(`dateCreated:${dateCreated}`);
    // console.log(`dashboardType:${dashboardType}`);
    // console.log(`keyword:${keyword}`);
    // console.log(`url:${url}`);
    console.log(`date: ${fromdate}`);

  }, [
    // title,belong,name,updateCycle,
    // dateCreated,dashboardType,keyword,url
  ]);
  const enrollWithAPI = () => {
    alert(`title: ${title} belong:${belong}name:${name}updateCycle:${updateCycle}    date: ${fromdate}  dateCreated:${dateCreated}dashboardType:${dashboardType}
    keyword:${keyword}url:${url}`);
    props.closeFunc();
    setTitle("");
    setBelong("");
    setName("");
    setUrl("");
    setKeyword("");
    setDashboardType("");
    setDateCreated("");
    setUpdateCycle("");
  }

  return (
    <Modal
      {...props}
      show={props.isShow}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/*div.className>div#idName*/}
      <Modal.Header>
        <Modal.Title id="props.">
          <div className="modal-head border-0">
            <h5 className="modal-title">대시보드 신규등록</h5>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-12">
            <form>
              <table className="write-dashboard-table">
                <tbody>
                <tr>
                  <td>
                    <h6>제목</h6>
                  </td>
                  <td colSpan={5}>
                    <input type="text" placeholder="제목을 입력하세요"
                           value={title} onChange={onChangeTitle}/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>소속</h6>
                  </td>
                  <td colSpan={2}>
                    <input type="text" placeholder="소속을 입력하세요"
                           value={belong} onChange={onChangeBelong}/>
                  </td>
                  <td>
                    <h6>이름</h6>
                  </td>
                  <td colSpan={2}>
                    <input type="text" placeholder="이름을 입력하세요"
                           value={name} onChange={onChangeName}/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>갱신주기</h6>
                  </td>
                  <td colSpan={2}>

                    <select onChange={onChangeUpdateCycle} value={updateCycle}>
                      {Options.map((item, index) => {
                        return(<><option key={item.key} value={item.value}>{item.value}</option></>);
                      })}
                    </select>
                  </td>
                  <td>
                    <h6>작성일</h6>
                  </td>
                  <td colSpan={2}>
                    {/*TODO daterangepicker로 선택한 값에 대한 setDateCreated()*/}
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker/daterangepicker.css"/>
                    <DateRangePicker
                      initialSettings={
                        {
                          // startDate: fromdate.toISOString().substring(0,9) ,
                          // endDate:toDate.toISOString(),
                          singleDatePicker:true,
                          alwaysShowCalendars:true,
                          autoUpdateInput:false,
                          locale:{format:"YYYY-MM-DD"},
                          autoApply:true,
                          ranges:{},
                        }

                      }
                      onApply={(event,picker)=>{
                      setFromDate(picker.startDate.format("YYYY-MM-DD"));
                      setToDate(picker.endDate.format("YYYY-MM-DD"));
                      }
                    }
                      onEvent={(event,picker)=>{
                      setFromDate(picker.startDate.format("YYYY-MM-DD"));
                      setToDate(picker.endDate.format("YYYY-MM-DD"));
                    }}

                      >
                      <input type={"text"} value={fromdate.substring(0,10)} onChange={handleChangeS}/>
                    </DateRangePicker>
                  </td>
                </tr>
                <tr className="border-0">
                  <td rowSpan={4}>
                    <h6>유형</h6>
                  </td>
                  <td colSpan={5}>
                    <ul>
                      <li>
                        <div className="radio-group">
                          <label htmlFor="area">
                            <input type="radio" id="area" name="type"
                                 onChange={onChangeDashboardType} />
                              <i className="bi-xy bi-area"></i>
                          </label>
                          <p className="bi-desc">area</p>
                        </div>
                      </li>
                      <li>
                        <div className="radio-group">
                          <label htmlFor="controls">
                            <input type="radio" id="controls" name="type"
                                   onChange={onChangeDashboardType}/>
                              <i className="bi-xy bi-controls"></i>
                          </label>
                          <p className="bi-desc">controls</p>
                        </div>
                      </li>
                      <li>
                        <div className="radio-group">
                          <label htmlFor="coordinate-map">
                            <input type="radio" id="coordinate-map" name="type"
                                   onChange={onChangeDashboardType}/>
                              <i className="bi-xy bi-coordinate-map"></i>
                          </label>
                          <p className="bi-desc">coordinate map</p>
                        </div>
                      </li>
                      <li>
                        <div className="radio-group">
                          <label htmlFor="data-table">
                            <input type="radio" id="data-table" name="type"
                                   onChange={onChangeDashboardType}/>
                              <i className="bi-xy bi-data-table"></i>
                          </label>
                          <p className="bi-desc">data table</p>
                        </div>
                      </li>
                      <li>
                        <div className="radio-group">
                          <label htmlFor="gauge">
                            <input type="radio" id="gauge" name="type"
                                   onChange={onChangeDashboardType}/>
                              <i className="bi-xy bi-gauge"></i>
                          </label>
                          <p className="bi-desc">gauge</p>
                        </div>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr className="border-0">
                  <td colSpan={5}>
                    <ul>
                      <li>
                        <div className="radio-group">
                          <label htmlFor="goal">
                            <input type="radio" id="goal" name="type"
                                   onChange={onChangeDashboardType}/>
                              <i className="bi-xy bi-goal"></i>
                          </label>
                          <p className="bi-desc">goal</p>
                        </div>
                      </li>
                      <li>
                        <div className="radio-group">
                          <label htmlFor="heat-map">
                            <input type="radio" id="heat-map" name="type"
                                   onChange={onChangeDashboardType}/>
                              <i className="bi-xy bi-heat-map"></i>
                          </label>
                          <p className="bi-desc">heat map</p>
                        </div>
                      </li>
                      <li>
                        <div className="radio-group">
                          <label htmlFor="horizontal-bar">
                            <input type="radio" id="horizontal-bar" name="type"
                                   onChange={onChangeDashboardType}/>
                              <i className="bi-xy bi-horizontal-bar"></i>
                          </label>
                          <p className="bi-desc">horizontal bar</p>
                        </div>
                      </li>
                      <li>
                        <div className="radio-group">
                          <label htmlFor="line">
                            <input type="radio" id="line" name="type"
                                   onChange={onChangeDashboardType}/>
                              <i className="bi-xy bi-line"></i>
                          </label>
                          <p className="bi-desc">line</p>
                        </div>
                      </li>
                      <li>
                        <div className="radio-group">
                          <label htmlFor="maps">
                            <input type="radio" id="maps" name="type"
                                   onChange={onChangeDashboardType}/>
                              <i className="bi-xy bi-maps"></i>
                          </label>
                          <p className="bi-desc">maps</p>
                        </div>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr className="border-0">
                  <td colSpan={5}>
                    <ul className="radio-group">
                      <li>
                        <div className="radio-group">
                          <label htmlFor="mark-down">
                            <input type="radio" id="mark-down" name="type"
                                   onChange={onChangeDashboardType}/>
                              <i className="bi-xy bi-mark-down"></i>
                          </label>
                          <p className="bi-desc">markdown</p>
                        </div>
                      </li>
                      <li>
                        <div className="radio-group">
                          <label htmlFor="metric">
                            <input type="radio" id="metric" name="type"
                                   onChange={onChangeDashboardType}/>
                              <i className="bi-xy bi-metric"></i>
                          </label>
                          <p className="bi-desc">metric</p>
                        </div>
                      </li>
                      <li>
                        <div className="radio-group">
                          <label htmlFor="pie">
                            <input type="radio" id="pie" name="type"
                                   onChange={onChangeDashboardType}/>
                              <i className="bi-xy bi-pie"></i>
                          </label>
                          <p className="bi-desc">pie</p>
                        </div>
                      </li>
                      <li>
                        <div className="radio-group">
                          <label htmlFor="region-map">
                            <input type="radio" id="region-map" name="type"
                                   onChange={onChangeDashboardType}/>
                              <i className="bi-xy bi-region-map"></i>
                          </label>
                          <p className="bi-desc">region map</p>
                        </div>
                      </li>
                      <li>
                        <div className="radio-group">
                          <label htmlFor="tag-cloud">
                            <input type="radio" id="tag-cloud" name="type"
                                   onChange={onChangeDashboardType}/>
                              <i className="bi-xy bi-tag-cloud"></i>
                          </label>
                          <p className="bi-desc">tag cloud</p>
                        </div>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td colSpan={5}>
                    <ul>
                      <li>
                        <div className="radio-group">
                          <label htmlFor="timelion">
                            <input type="radio" id="timelion" name="type"
                                   onChange={onChangeDashboardType}/>
                              <i className="bi-xy bi-timelion"></i>
                          </label>
                          <p className="bi-desc">timelion</p>
                        </div>
                      </li>
                      <li>
                        <div className="radio-group">
                          <label htmlFor="tsvb">
                            <input type="radio" id="tsvb" name="type"
                                   onChange={onChangeDashboardType}/>
                              <i className="bi-xy bi-tsvb"></i>
                          </label>
                          <p className="bi-desc">tsvb</p>
                        </div>
                      </li>
                      <li>
                        <div className="radio-group">
                          <label htmlFor="vega">
                            <input type="radio" id="vega" name="type"
                                   onChange={onChangeDashboardType}/>
                              <i className="bi-xy bi-vega"></i>
                          </label>
                          <p className="bi-desc">vega</p>
                        </div>
                      </li>
                      <li>
                        <div className="radio-group">
                          <label htmlFor="vertical-bar">
                            <input type="radio" id="vertical-bar" name="type"
                                   onChange={onChangeDashboardType}/>
                              <i className="bi-xy bi-vertical-bar"></i>
                          </label>
                          <p className="bi-desc">vertical bar</p>
                        </div>
                      </li>
                      <li></li>
                    </ul>
                  </td>
                </tr>

                <tr>
                  <td>
                    <h6>키워드</h6>
                  </td>
                  <td colSpan={5}>
                    <input type="text" placeholder="키워드를 입력하세요"
                           value={keyword} onChange={onChangeKeyword}/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>URL</h6>
                  </td>
                  <td colSpan={5}>
                    <input type="text" placeholder="대시보드 URL을 입력하세요"
                           value={url} onChange={onChangeUrl}/>
                  </td>
                </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>


      </Modal.Body>
      <Modal.Footer>
        <button type="button" className="btn btn-cancel" data-bs-dismiss="modal"
                onClick={props.closeFunc}
              >취소</button>
        <button type="button" className="btn btn-update"
                onClick={enrollWithAPI}>등록</button>
      </Modal.Footer>
    </Modal>
  );


}

export default EnrollDshBrdModal;
