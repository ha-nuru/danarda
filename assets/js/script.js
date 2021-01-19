$(function () {

    $('.line_number_wrap li button').on('click', function () {
        var idx = $(this).parents('li').index();
        $(this).parents('li').addClass('active').siblings().removeClass('active');
        $('.bubble_text').eq(idx).addClass('active').siblings().removeClass('active');
        $('.thr_mob').hide().eq(idx).show();

    })

    $('.bubble_text').on('click', function () {
        var w_width = $(window).width();
        if (w_width > 720) {
            // 웹
            var idx = $(this).index();
            $(this).addClass('active').siblings().removeClass('active');
            $('.line_number_wrap li').eq(idx).addClass('active').siblings().removeClass('active');
            $('.thr_mob').hide().eq(idx).show();
            console.log(idx);
        }
    })
    // 스크롤 애니
    $(window).scroll(function () {
        let scroll = $(window).scrollTop() + 400;
        if (scroll >= $(".chat_content").offset().top) {
            var current_height = $(".phone_wrap_ani").prop("scrollHeight");
            $(".phone_wrap_ani li:nth-child(1)").show("drop", { direction: "down", easing: 'easeInOutExpo' }, 1000, function () {
                $(".phone_wrap_ani li:nth-child(2)").delay(600).show("drop", { direction: "down", easing: 'easeInOutCirc' }, 1000, function () {
                    $(".phone_wrap_ani li:nth-child(3)").delay(600).show("drop", { direction: "down", easing: 'easeInOutCirc' }, 1000, function () {
                        $(".phone_wrap_ani").animate({ top: '-15%' }, 600, function () {
                            $(".phone_wrap_ani li:nth-child(4)").delay(600).show("drop", { direction: "down", easing: 'easeInOutCirc' }, 1000, function () {
                                $(".phone_wrap_ani li:nth-child(5)").delay(600).show("drop", { direction: "down", easing: 'easeInOutCirc' }, 1000, function () {
                                    $(".phone_wrap_ani li:nth-child(6)").delay(600).show("drop", { direction: "down", easing: 'easeInOutCirc' }, 1000, function () {
                                    });
                                });
                            });
                        });
                    });
                });
            });
        }
    });
    // top 버튼
    $('.mov_top').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    })
})

