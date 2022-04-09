// 레이어 팝업
$(window).on("load", function () {
    // 레이어 display none 상태
    $(".layer-bg, .layer-wrap").hide();
    //레이어팝업 위치 지정 function 만들기
    function layer_position() {
        //    var win_W = $(window).width();
        //    var win_H = $(window).height();
        //    $(".layer-wrap").css({'left':(win_W-300)/2, 'top':(win_H-100)/2});
        $(".layer-wrap").center();
    };
    //레이어팝업 open 상태 function 만들기
    function layer_open(no) {
        $(".layer-wrap[layer=" + no + "]").slideDown(500);
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
    function layer_close() {
        $(".layer-wrap").slideUp(500);
        $(".layer-bg").fadeOut(300);
    };
    //링크 클릭시 해당 레이어팝업 호출
    $(".call-popup").click(function () {
        var no = $(this).attr("layer");
        layer_open(no);
    });
    //닫기 버튼 클릭시 레이어 닫기
    $(".btn-close").click(function () {
        layer_close();
    });
    //반응형 대응 - 레이어 위치 잡기
    $(window).resize(function () {
        layer_position();
    });
});

//팝업 중앙정렬
jQuery.fn.center = function () {
    this.css("position", "absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
        $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
        $(window).scrollLeft()) + "px");
    return this;
}

$(window).on("load", function () {

    // 전체 체크박스
    $('.check-all').click(function () {
        $('.obj-check').prop('checked', this.checked);
    });

    // 알람창 전체 체크박스
    $('.check-all-alarm').click(function () {
        $('.obj-text').prop('checked', this.checked);
    });

    // 좌측 네비게이션
    $('label[for="toggle"]').click(function () {
        $('#nav-icon3').toggleClass('open');
        $('.toggle-menu').toggleClass('open');
        $('.pull-width').toggleClass('opened');
    });
    $('input[id="puller"]').click(function () {
        $('label[for*="rd-1"]').toggleClass('back-trans');
        $('label[for*="rd-1"] + .tree-2depth').toggleClass('off');
        $('label[for*="rd-101"]').click(function () {
            $(this).toggleClass('highlights');
            $('label[for*="rd-102"]').removeClass('highlights');
        });
        $('label[for*="rd-102"]').click(function () {
            $(this).toggleClass('highlights');
            $('label[for*="rd-101"]').removeClass('highlights');
        });
    });

    $('.fold-db td > .obj-plus-box').click(function () {
        $(this).closest('tr').toggleClass('opener');
        $(".fold-db .opener + .alarm-info").slideDown(300);
    });

});


//end