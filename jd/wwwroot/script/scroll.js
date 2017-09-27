var scrollTimer
$(document).scroll(function () {
    if ($(document).scrollTop() >= 1940) {
        getSecond()
    }
    if ($(document).scrollTop() >= 7200) {
        getThird()
    }
    clearTimeout(scrollTimer)
    scrollTimer = setTimeout(function () {
        if ($(document).scrollTop() >= 7745) {
            $('.left-nav').show()
            $('.href-item').eq(10).addClass('chosen').siblings().removeClass('chosen')
            return
        }
        if ($(document).scrollTop() >= 7200) {
            $('.left-nav').show()
            $('.href-item').eq(9).addClass('chosen').siblings().removeClass('chosen')
            getThird()
            return
        }
        if ($(document).scrollTop() >= 6655) {
            $('.left-nav').show()
            $('.href-item').eq(8).addClass('chosen').siblings().removeClass('chosen')
            return
        }
        if ($(document).scrollTop() >= 6110) {
            $('.left-nav').show()
            $('.href-item').eq(7).addClass('chosen').siblings().removeClass('chosen')
            return
        }
        if ($(document).scrollTop() >= 5565) {
            $('.left-nav').show()
            $('.href-item').eq(6).addClass('chosen').siblings().removeClass('chosen')
            return
        }
        if ($(document).scrollTop() >= 5020) {
            $('.left-nav').show()
            $('.href-item').eq(5).addClass('chosen').siblings().removeClass('chosen')
            return
        }
        if ($(document).scrollTop() >= 4335) {
            $('.left-nav').show()
            $('.href-item').eq(4).addClass('chosen').siblings().removeClass('chosen')
            return
        }
        if ($(document).scrollTop() >= 3810) {
            $('.left-nav').show()
            $('.href-item').eq(3).addClass('chosen').siblings().removeClass('chosen')
            return
        }
        if ($(document).scrollTop() >= 3265) {
            $('.left-nav').show()
            $('.href-item').eq(2).addClass('chosen').siblings().removeClass('chosen')
            return
        }
        if ($(document).scrollTop() >= 2665) {
            $('.left-nav').show()
            $('.href-item').eq(1).addClass('chosen').siblings().removeClass('chosen')
            return
        }

        if ($(document).scrollTop() >= 1940) {
            $('.left-nav').show()
            $('.href-item').eq(0).addClass('chosen').siblings().removeClass('chosen')
            getSecond()
            return
        }
        if ($(document).scrollTop() < 1940) {
            $('.left-nav').hide()
            return
        }
    }, 300)

})

$('.href-item').click(function () {
    $(this).addClass('chosen').siblings().removeClass('chosen')
    if ($(this).index() == 0) {
        $('body').finish().animate({ scrollTop: 1945 })
        return
    }
    if ($(this).index() == 1) {
        $('body').finish().animate({ scrollTop: 2670 })
        return
    }
    if ($(this).index() == 2) {
        $('body').finish().animate({ scrollTop: 3270 })
        return
    }
    if ($(this).index() == 3) {
        $('body').finish().animate({ scrollTop: 3815 })
        return
    }
    if ($(this).index() == 4) {
        $('body').finish().animate({ scrollTop: 4340 })
        return
    }
    if ($(this).index() == 5) {
        $('body').finish().animate({ scrollTop: 5025 })
        return
    }
    if ($(this).index() == 6) {
        $('body').finish().animate({ scrollTop: 5570 })
        return
    }
    if ($(this).index() == 7) {
        $('body').finish().animate({ scrollTop: 6115 })
        return
    }
    if ($(this).index() == 8) {
        $('body').finish().animate({ scrollTop: 6660 })
        return
    }
    if ($(this).index() == 9) {
        $('body').finish().animate({ scrollTop: 7204 })
        return
    }
    if ($(this).index() == 10) {
        $('body').finish().animate({ scrollTop: 7750 })
        return
    }
    if ($(this).index() == 11) {
        $('body').finish().animate({ scrollTop: 0 })
        return
    }
})
