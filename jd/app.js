const exp = require('express')
const bodyParser = require('body-parser')
const template = require('art-template')
const cookie = require('cookie-parser')
const fs = require('fs')
const app = exp()


app.use(exp.static('wwwroot'))
app.use(bodyParser.urlencoded({ extended: true }))



app.use(require('./route/register'))

app.get('/api/get/creat-data', (req, res) => {
    var navListdata = JSON.parse(fs.readFileSync('wwwroot/data/catedata.json').toString())
    var navList = template(__dirname + '/views/nav-list', { data: navListdata[1]});
    var finddata = JSON.parse(fs.readFileSync('wwwroot/data/find.json').toString())
    var find = template(__dirname + '/views/find', { data: finddata[0]});
    var supData = JSON.parse(fs.readFileSync('wwwroot/data/sup.json').toString())
    var sup = template(__dirname + '/views/sup', { data: supData[0]});
    var topdata =JSON.parse(fs.readFileSync('wwwroot/data/top.json').toString())
    var top = template(__dirname + '/views/top', { data: topdata[0]});
    var coupondata = JSON.parse(fs.readFileSync('wwwroot/data/quan.json').toString())
    var coupon = template(__dirname + '/views/coupon', { data: coupondata[0]});
    var findmeData = JSON.parse(fs.readFileSync('wwwroot/data/fineME.json').toString())
    var findme= template(__dirname + '/views/findme', { data: findmeData[0]});
    var seckilldata = JSON.parse(fs.readFileSync('wwwroot/data/jdms.json').toString())
    var seckill= template(__dirname + '/views/seckill', { data: seckilldata});
    
    res.send({
        navList: navList,
        find:find,
        sup:sup,
        top:top,
        coupon:coupon,
        findme:findme,
        seckill:seckill,
        date:'2017-09-30 00:00:00'
    })
})

app.get('/api/secget',(req,res)=>{
    var gddata =JSON.parse(fs.readFileSync('wwwroot/data/gd.json').toString())
    var gd1 = template(__dirname + '/views/gd-list', { data: gddata[0]});
    var gd2 = template(__dirname + '/views/gd-list', { data: gddata[1]});
    var gd3 = template(__dirname + '/views/gd-list', { data: gddata[2]});
    var gd4 = template(__dirname + '/views/gd-list', { data: gddata[3]});
    var funData = JSON.parse(fs.readFileSync('wwwroot/data/xpfb.json').toString())
    var fun = template(__dirname + '/views/always-fun', { data: funData});
    var girdData = JSON.parse(fs.readFileSync('wwwroot/data/girdItem+.json').toString())
    var loveLife = template(__dirname + '/views/title-chn', { data:girdData.slice(0,2)});
    var jdian = template(__dirname + '/views/chn', { data:girdData.slice(2,4)});
    var com = template(__dirname + '/views/big-chn', { data:girdData.slice(4,5)[0]});
    var playc = template(__dirname + '/views/chn', { data:girdData.slice(5,7)});
    var eat =template(__dirname + '/views/big-chn', { data:girdData.slice(7,8)[0]});
    var loveb = template(__dirname + '/views/chn', { data:girdData.slice(8,10)});
    var read = template(__dirname + '/views/chn', { data:girdData.slice(10,12)});
    var loveG = template(__dirname + '/views/chn', { data:girdData.slice(12,14)});
    var travel = template(__dirname + '/views/chn', { data:girdData.slice(14)});
    var featuredata = JSON.parse(fs.readFileSync('wwwroot/data/go.json').toString())
    var feature = template(__dirname + '/views/feature', { data: featuredata});
    res.send({
        gd1:gd1,
        gd2:gd2,
        gd3:gd3,
        gd4:gd4,
        fun:fun,
        loveLife:loveLife,
        jdian:jdian,
        com:com,
        playc :playc ,
        eat:eat,
        loveb:loveb,
        read:read,
        loveG:loveG,
        travel:travel,
        feature:feature
    })
})

app.get('/api/thget',(req,res)=>{
    var moredata = JSON.parse(fs.readFileSync('wwwroot/data/moregoods.json').toString())
    var moregoods = template(__dirname + '/views/moregoods', { data: moredata});
    res.send({moregoods:moregoods})
})


app.listen(3000, () => {
    console.log('server on 3000')
})