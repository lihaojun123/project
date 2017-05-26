$(function () {
    $('.tab_bar ul li').click(function () {
        $('.tab_bar ul li').eq($(this).index()).children().addClass("active");
        $('.tab_bar ul li').eq($(this).index()).siblings().children().removeClass('active');
        $(".tab_content").hide().eq($(this).index()).show();
    });
})