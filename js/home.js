$(function() {
    var pagetop = $('#pagetop');
    $('#pagetop').hide();
    // ボタン非表示
    pagetop.hide();
    // 80px スクロールしたらボタン表示
    $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        pagetop.fadeIn(300);
    } else {
        pagetop.fadeOut(300);
    }
    });
    pagetop.click(function() {
        $('body, html').animate({ scrollTop: 0 }, 600);
        return false;
    });
});

$(function() {

    const ham = $('#js-hamburger');
    const nav = $('#js-nav');
    ham.on('click', function() { //ハンバーガーメニューをクリックしたら
        ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
        nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し

    });

    const team = $();

});

$(document).on('ready', function() {
    $(".regular_2").slick({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
    });
});
