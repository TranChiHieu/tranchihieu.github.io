var sectionArray = ['home', 'about', 'experience', 'projects', 'contact'];

$.each(sectionArray, function(index, value){

    $(document).scroll(function(){
        var offsetSection = $('#' + value).offset().top - 90; // giữ trừ header
        var docScroll = $(document).scrollTop() + 1; // +1 tránh lỗi so sánh

        if(docScroll >= offsetSection){
            $('.navbar-nav .nav-link, .sidebar-link').removeClass('active').addClass('inactive');
            $('.navbar-nav .nav-link').eq(index).addClass('active').removeClass('inactive');
            $('.sidebar-link').eq(index).addClass('active').removeClass('inactive');
        }
    });

    $('.click-scroll').eq(index).click(function(e){
        e.preventDefault();
        var offsetClick = $('#' + value).offset().top - 90; // giữ trừ header
        $('html, body').animate({scrollTop: offsetClick}, 300);
    });

});

$(document).ready(function(){
    $('.navbar-nav .nav-link, .sidebar-link').addClass('inactive');
    $('.navbar-nav .nav-link').eq(0).addClass('active').removeClass('inactive');
    $('.sidebar-link').eq(0).addClass('active').removeClass('inactive');
});
