var targetDate;
var nowDate;
var time ;

function getTime(date){
    targetDate = new Date(date).getTime();
    nowDate = new Date().getTime();
    time = Math.floor((targetDate - nowDate) / 1000);
}
var MIN = 60;
var HOUR = 60 * MIN;
function handleStr(str) {
    str = str >= 0 ? '0' + str : "0";
    return str.substr(-2);
}
function showTime() {
    var hours = Math.floor(time / HOUR);
    var minutes = Math.floor(time % HOUR / MIN);
    var seconds = Math.floor(time % MIN);
    $('.cd-hours').text(handleStr(hours))
    $('.cd-minute').text(handleStr(minutes))
    $('.cd-second').text(handleStr(seconds))
}

function count() {
    showTime();
    setTimeout(function() {
        time --;
        showTime();
        setTimeout(arguments.callee, 1000);
    }, 1000);
}
count();

function jieCheng(num){
    if (num <= 1) {
        return 1;
    }else{
        return num * jieCheng(num-1);
    }
}