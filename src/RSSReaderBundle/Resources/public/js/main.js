$(window).load(function(){

    var window = $(this);

    setInterval(function() {
        scroll(window);
    },100);

});


function scroll(window) {

    var articleList = $('.feeds-list .list-group');

    if (window.height() < articleList.height() ) {

        articleList.parent().css('overflow-y', 'scroll');

    } else {

        articleList.parent().css('overflow-y', 'none');

    }

}

$(function(){
    new AppView();
});

