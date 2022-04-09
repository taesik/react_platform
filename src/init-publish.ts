
import jQuery from "jquery";
import $ from "jquery";

export const initPublish = () => {
  //팝업 중앙정렬
  jQuery.fn['center'] = function () {
    this.css("position", "absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
      $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
      $(window).scrollLeft()) + "px");
    return this;
  }
  //반응형 대응 - 레이어 위치 잡기
  $(window).resize(function () {
    $(".layer-wrap")['center']();
  });
}
