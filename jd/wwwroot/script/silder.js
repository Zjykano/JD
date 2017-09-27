var bigIndex = 0;
var timer = setInterval(changeIndex, 2000);

function changeIndex() {
    bigIndex = bigIndex >= $('.slider-list li').length - 1 ? 0 : bigIndex + 1;
    changeImage();
}

function changeImage() {
    $('.slider-list li').eq(bigIndex).fadeIn('fast').siblings().fadeOut('fast');
    $('.slider-index li').eq(bigIndex).addClass('current').siblings().removeClass('current');
}

$('.silder-prev').click(function () {
    bigIndex = bigIndex <= 0 ? $('.slider-list li').length - 1 : bigIndex - 1;
    changeImage();
})

$('.silder-next').click(function () {
    changeIndex();
})

$('.slider-index li').hover(function(){
    clearInterval(timer);
    bigIndex = $(this).index();
    changeImage();
},function(){
    timer = setInterval(changeIndex,2000);
})

$('.slider-list li').hover(function(){
    clearInterval(timer);
    $('.silder-control').css('opacity','0.3')
},function(){
    $('.silder-control').css('opacity','0')
    timer = setInterval(changeIndex,2000);
    
})

$('.silder-control').hover(function(){
    clearInterval(timer);
    $('.silder-control').css('opacity','0.3')
    $(this).css('opacity','0.7')
},function(){
    $('.silder-control').css('opacity','0')
    timer = setInterval(changeIndex,2000);
})


var fineIndex = 0;
var finetimer = setInterval(changefineIndex, 2000);

function changefineIndex() {
    fineIndex = fineIndex >= $('.slider-fineGoods li').length - 1 ? 0 : fineIndex + 1;
    changefinePage();
}

function changefinePage() {
    $('.slider-fineGoods li').eq(fineIndex).fadeIn('fast').siblings().fadeOut('fast').removeClass('show');
    $('.fine-silder-list li').eq(fineIndex).addClass('current').siblings().removeClass('current');
}

$('.fbt-col2').on('click','.finesilder-prev',function () {
    fineIndex = fineIndex <= 0 ? $('.slider-fineGoods li').length - 1 : fineIndex - 1;
    changefinePage();
})

$('.fbt-col2').on('click','.finesilder-next',function () {
    changefineIndex();
})



$('.fbt-col2').on("mouseover",'.fine-silder-list li',function () {
    clearInterval(finetimer);
    fineIndex = $(this).index();
    changefinePage();
})

$('.fbt-col2').on("mouseleave",'.fine-silder-list li',function () {
    finetimer = setInterval(changefineIndex, 2000);
})

$('.fbt-col2').on("mouseover", '.slider-fineGoods li', function () {
    clearInterval(finetimer);
    $('.finesilder-control').css('opacity', '0.3')
})

$('.fbt-col2').on("mouseleave", '.slider-fineGoods li', function () {
    $('.finesilder-control').css('opacity', '0')
    finetimer = setInterval(changefineIndex, 2000);
})



$('.fbt-col2').on("mouseover",'.finesilder-control',function () {
    clearInterval(finetimer);
    $('.finesilder-control').css('opacity', '0.3')
    $(this).css('opacity', '0.7')
})

$('.fbt-col2').on("mouseleave",'.finesilder-control',function () {
    $('.finesilder-control').css('opacity', '0')
    finetimer = setInterval(changefineIndex, 2000);
})


var fewIndex = 0;
var fewtimer = setInterval(changefewIndex, 2000);

function changefewIndex() {
    fewIndex= fewIndex>= $('.few-silder-list li').length - 1 ? 0 : fewIndex+ 1;
    changefewImage();
}

function changefewImage() {
    $('.few-silder-list li').eq(fewIndex).fadeIn('fast').siblings().fadeOut('fast');
    $('.few-slider-index li').eq(fewIndex).addClass('current').siblings().removeClass('current');
}


$('#seckill').on('mouseover','.few-slider-index li',function(){
    clearInterval(fewtimer);
    fewIndex = $(this).index();
    changefewImage();
})
$('#seckill').on('mouseleave','.few-slider-index li',function(){
    fewtimer = setInterval(changefewIndex, 2000);
})


var newsIndex = 0;
var newstimer = setInterval(changenewsIndex, 2000);

function changenewsIndex() {
    newsIndex = newsIndex >= $('.news-img-silder li').length - 1 ? 0 : newsIndex + 1;
    changenewsPage();
}

function changenewsPage() {
    $('.news-img-silder li').eq(newsIndex).fadeIn('fast').siblings().fadeOut('fast').removeClass('show');
    $('.news-silder-list li').eq(newsIndex).addClass('current').siblings().removeClass('current');
}


$('.coupon-col2').on('click', '.news-silder-prev', function () {
    newsIndex = newsIndex <= 0 ? $('.news-img-silder li').length - 1 : newsIndex - 1;
    changenewsPage();
})


$('.coupon-col2').on('click', '.news-silder-next', function () {
    changenewsIndex();
})


$('.coupon-col2').on('mouseover', '.news-silder-list li', function () {
    clearInterval(newstimer);
    newsIndex = $(this).index();
    changenewsPage();
})
$('.coupon-col2').on('mouseleave', '.news-silder-list li', function () {
    newstimer = setInterval(changenewsIndex, 2000);
})



$('.coupon-col2').on('mouseover', '.news-img-silder li', function () {
    clearInterval(newstimer);
    $('.news-silder-control').css('opacity', '0.3')
})

$('.coupon-col2').on('mouseleave', '.news-img-silder li', function () {
    $('.news-silder-control').css('opacity', '0')
    newstimer = setInterval(changenewsIndex, 2000);
})


$('.coupon-col2').on('mouseover', '.news-silder-control', function () {
    clearInterval(newstimer);
    $('.news-silder-control').css('opacity', '0.3')
    $(this).css('opacity', '0.7')
})


$('.coupon-col2').on('mouseleave', '.news-silder-control', function () {
    $('.news-silder-control').css('opacity', '0')
    newstimer = setInterval(changenewsIndex, 2000);
})

var liveIndex = 0;
var livetimer = setInterval(changeliveIndex, 2000);

function changeliveIndex() {
    liveIndex = liveIndex >= $('.silder-live li').length - 1 ? 0 : liveIndex + 1;
    changelivePage();
}

function changelivePage() {
    $('.silder-live li').eq(liveIndex).fadeIn('fast').siblings().fadeOut('fast').removeClass('show');
    $('.silder-live-list li').eq(liveIndex).addClass('current').siblings().removeClass('current');
}

$('#always-Fun').on('click','.live-prev',function () {
    liveIndex = liveIndex <= 0 ? $('.silder-live li').length - 1 : liveIndex - 1;
    changelivePage();
})

$("#always-Fun").on('click','.live-next',function () {
    changeliveIndex();
})



$('#always-Fun').on("mouseover",'.silder-live-list li',function () {
    clearInterval(livetimer);
    liveIndex = $(this).index();
    changelivePage();
})

$('#always-Fun').on("mouseleave",'.silder-live-list li',function () {
    livetimer = setInterval(changeliveIndex, 2000);
})

$('#always-Fun').on("mouseover", '.mask', function () {
    clearInterval(livetimer);
    $('.live-control').css('opacity', '0.3')
})

$('#always-Fun').on("mouseleave", '.mask', function () {
    $('.live-control').css('opacity', '0')
    livetimer = setInterval(changeliveIndex, 2000);
})



$('#always-Fun').on("mouseover",'.live-control',function () {
    clearInterval(livetimer);
    $('.live-control').css('opacity', '0.3')
    $(this).css('opacity', '0.7')
})

$('#always-Fun').on("mouseleave",'.live-control',function () {
    $('.live-control').css('opacity', '0')
    livetimer = setInterval(changeliveIndex, 2000);
})
