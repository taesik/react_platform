
//레이어팝업 위치 지정 function 만들기
export const layer_position = () => {
  //    var win_W = $(window).width();
  //    var win_H = $(window).height();
  //    $(".layer-wrap").css({'left':(win_W-300)/2, 'top':(win_H-100)/2});
  $(".layer-wrap")['center']();
};

//레이어팝업 open 상태 function 만들기
export const layer_open = (no) => {
  $(".layer-wrap[data-layer=" + no + "]").slideDown(500);
  $(".layer-bg").fadeIn(300);
  layer_position();
  //레이어 영역 외 바탕화면 클릭시 화면 닫기
  $(".layer-bg").click(function (e) {
    if (!$(".layer-wrap").has(e.target).length) {
      layer_close();
    };
  });
};

//레이어팝업 close 상태 function 만들기
export const layer_close = () => {
  $(".layer-wrap").slideUp(500);
  $(".layer-bg").fadeOut(300);
};
