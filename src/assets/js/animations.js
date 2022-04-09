/**
 * [ 공지 ]
 * 본 js 파일의 스크립트는 리액트의 해당하는 화면에 포팅을 해야 하며,
 * animation.js 파일을 리액트로 복사해도 해당 js 파일은 동작하지 않는다.
 */

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
    $('.fold-db .obj-plus-box').click(function () {
        $(this).closest('tr').toggleClass('opener');
        $(".fold-db .opener + .alarm-info").slideDown(300);
    });

    // 메인 단선도
    $('.cnt-check.tag-datatype').click(function () {
        $('article.bushing').toggleClass('dis-none');
        $('article.table').toggleClass('dis-none');
    });
    $('.cnt-check.tag-updown').click(function () {
        $('.tag-down').toggleClass('dis-none');
        $('.tag-up').toggleClass('dis-none');
    });
    $('.cnt-check.tag-inout').click(function () {
        $('.tag-in').toggleClass('dis-none');
        $('.tag-out').toggleClass('dis-none');
    });
    $('#view-sensor').click(function () {
        $('.state span.tag-name').toggleClass('dis-none');
    });
    $('#view-lu').click(function () {
        $('.state span.tag-lu').toggleClass('dis-none');
    });
    $('#view-number').click(function () {
        $('.state span.tag-number').toggleClass('dis-none');
    });

    // 메인 단선도 센서 클릭시 나타나는 메뉴 추가
    $('.sector i.sign').click(function () {
        var menuOpen = $("div.state > div").hasClass("open-menu");
        if(menuOpen == 1){
            $("div.open-menu").remove();
        }else{
            $(this).closest('div.state').append($('<div class="open-menu">').load('sub/modal/main-menu.html'));
        }
    });
});

$(window).on("load", function () {
// Modal Window
    (() => {
        const modalBtns = Array.from(document.querySelectorAll(".call-popup"));
        modalBtns.forEach(btn => {
            btn.onclick = function() {
                const modal = btn.getAttribute('data-layer');
                document.getElementById(modal).style.display = "block";
                document.querySelector("body").style.overflow = 'hidden';
            }
        });

        const closeBtns = Array.from(document.querySelectorAll(".btn-close"));
        closeBtns.forEach(btn => {
            btn.onclick = function() {
                let modal = btn.closest('.layer-wrap');
                modal.style.display = "none";
                document.querySelector("body").style.overflow = 'visible';
            }
        });

        window.onclick = function(event) {
            if (event.target.className === "layer-wrap") {
                event.target.style.display = "none";
            }
        }
    })();
});
//end