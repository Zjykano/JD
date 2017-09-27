$.get('/api/get/creat-data', (data) => {
    $('.nav-sortlist').html(data.navList)
    $('.fbt-col1').html(data.find)
    $('.fbt-col2').html(data.sup)
    $('.slider-fineGoods-item').eq(0).addClass('show')
    $('.fbt-col3').html(data.top)
    $('.rank-show ul').eq(0).addClass('show')
    $('.coupon-col1').html(data.coupon)
    $('.coupon-col2').html(data.findme)
    $('.news-img-item').eq(0).addClass('show')
    $('#seckill').html(data.seckill)
    $('.few-silder-item').eq(0).addClass('show')
    getTime(data.date)
})


var secondGet = true
var thirdGet = true



function getSecond() {
    if (secondGet) {
        $.get('/api/secget', (data) => {
            $('#always-Fun').empty().html(data.fun)
            $("#love-life").empty().html(data.loveLife)
            $('#jidian').empty().html(data.jdian)
            $('#computer').empty().html(data.com)
            $('#tc').empty().html(data.playc)
            $('#eat').empty().html(data.eat)
            $('#love-baby').empty().html(data.loveb)
            $('#love-read').empty().html(data.read)
            $('#love-game').empty().html(data.loveG)
            $('#travel').empty().html(data.travel)
            $('#feature').empty().html(data.feature)
            $("#rec1").empty().html(data.gd1)
            $("#rec2").empty().html(data.gd2)
            $("#rec3").empty().html(data.gd3)
            $("#rec4").empty().html(data.gd4)
        })
        secondGet = false
    }

}


function getThird(){
    if(thirdGet){
        $.get('/api/thget',(data)=>{
            $('#moregoods').empty().html(data.moregoods)
        })
        thirdGet = false;
    }
}