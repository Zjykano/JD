$('#removeGd').click(function () {
    $('#event').remove();
})

$('.show-hide').hover(function () {
    var showid = $(this).attr('id')
    if (showid) {
        $(this).addClass('hover-active')
        $(`[ned-show=${showid}]`).show()
    }
}, function () {
    var hideid = $(this).attr('id')
    if (hideid) {
        $("[ned-show]").hover(function () {
            var id = $(this).attr('ned-show')
            $(`[id=${id}]`).addClass('hover-active')
            $(this).show()
        }, function () {
            $('.hover-active').removeClass('hover-active')
            $(this).hide();
        })
    }
    $(this).removeClass('hover-active')
    $("[ned-show]").hide();
})

$('#phonejd').hover(function () {
    $('#phonejd-list').show()
}, function () {
    $('phonejd-list').hover(function () {
        $(this).show()
    },
        function () {
            $(this).hide()
        })
    $('#phonejd-list').hide()
})


$('.proclamation li').hover(function () {
    $('.show-news').hide()
    $(`[id=${$(this).attr('show-data')}]`).show()
    $('#pro-silder-block').animate({
        left: $(this).position().left
    }, 200)
})


$(document).scroll(function () {
    if ($(document).scrollTop() >= 780) {
        $('#search').addClass('search-fix')
        $('.small-logo').show()
    }
    else {
        $('#search').removeClass('search-fix')
        $('.small-logo').hide()
    }
})

$('.up-img').hover(function () {
    $(this).stop().animate({ top: -10 }, 200)
}, function () {
    $(this).stop().animate({ top: 0 }, 200)
})


$('#seckill').on('mouseover','.show-seckill',function(){
    $('.click-control').css('opacity', '0.7')
})
$('#seckill').on('mouseleave','.show-seckill',function(){
    $('.click-control').css('opacity', '0')
})

$('#seckill').on('mouseover','.click-control',function(){
    $('.click-control').css('opacity', '0.7')
})
$('#seckill').on('mouseleave','.click-control',function(){
    $('.click-control').css('opacity', '0')
})


$('#seckill').on('click','.click-prev',function(){
    $('.seckill-goods ul').finish().animate({
        left: $('.seckill-goods ul').position().left + 1000
    }, 800, function () {
        if ($('.seckill-goods ul').position().left >= 0) {
            $('.seckill-goods ul').css('left', -4000)
        }
    })
})


$('#seckill').on('click','.click-next',function(){
    $('.seckill-goods ul').finish().animate({
        left: $('.seckill-goods ul').position().left - 1000
    }, 800, function () {
        if ($('.seckill-goods ul').position().left <= -5000) {
            $('.seckill-goods ul').css('left', -1000)
        }
    })
})

$('body').on('mouseover', '.slider-left', function () {
    $(this).stop().animate({ right: 10 }, 300)
})
$('body').on('mouseleave', '.slider-left', function () {
    $(this).stop().animate({ right: 0 }, 300)
})

$('.fbt-col3').on('mouseover', '.rank-list li', function () {
    $('.rangk-slider-block').finish().animate({ left: $(this).position().left + 8 }, 200)
    $('.rank-show ul').eq($(this).index()).addClass('show').siblings().removeClass('show')
})


$('body').on('mouseover', '.silder-right', function () {
    $(this).stop().animate({ right: 0 }, 200)
})
$('body').on('mouseleave', '.silder-right', function () {
    $(this).stop().animate({ right: 10 }, 200)
})

$('body').on('mouseover', '.Bslider-left', function () {
    $(this).stop().animate({ right: 10 }, 200)
})
$('body').on('mouseleave', '.Bslider-left', function () {
    $(this).stop().animate({ right: 0 }, 200)
})

var outtimer;
$('.sort').hover(function () {
    clearTimeout(outtimer)
    $('.nav-sortlist').show();
    $('.sorts-item').eq($(this).index()).show().siblings().hide()
    $(this).addClass('sort-current').siblings().removeClass('sort-current')
}, function () {
    $('.sorts-item').hover(function () {
        clearTimeout(outtimer)
    }, function () {
        $('.sort').eq($(this).index()).removeClass('sort-current')
        $(this).hide();
        $('.nav-sortlist').hide();
    })
    var tr = this
    outtimer = setTimeout(function (tr) {
        $(this).removeClass('sort-current')
        $('.nav-sortlist').hide();
        $('.sorts-item').eq($(this).index()).hide()
    }, 150);
})




$(".toolbar div").hover(function () {
    $(this).find('i').addClass('toolbar-show')
    $(this).find('em').addClass('toolbar-show').stop().animate({
        left: -60
    }, 200)
}, function () {
    $(this).find('i').removeClass('toolbar-show')
    $(this).find('em').removeClass('toolbar-show').stop().animate({
        left: 60
    }, 200)
})

$('.hover-show').hover(function () {
    $('.img-list').hide()
    $('.conceal-b').show()
    $('.conceal-item').eq($(this).index()).addClass('chosed').siblings().removeClass('chosed')
    $('.conceal-box').show()
    $('.con-b').eq($(this).index()).show()
})

$('.conceal-item').hover(function(){
    $(this).addClass('chosed').siblings().removeClass('chosed')
    $('.con-b').hide()
    $('.con-b').eq($(this).index()).show()

})

$('.form-top li').hover(function(){
    $(this).addClass('has').siblings().removeClass('has')
})

$('.hide-conceal').click(function(){
    $('.img-list').show()
    $('.con-b').hide()
})

$('body').on('mouseover','.qr-area',function(){
    $(this).find('.qr-con').show()
})

$('body').on('mouseleave','.qr-area',function(){
    $(this).find('.qr-con').hide()
})