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
        }
    })
    // 스크롤 애니
	
    // top 버튼
    $('.mov_top').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    })
})

