const exp = require('express')
const fs = require('fs')
const template = require('art-template');
const reader =exp()

reader.get('/api/get/creat-data',(req,res)=>{
    fs.readFile('wwwroot/data/catedata.json',(error,data)=>{
        data = JSON.parse(data.toString())
        var strHtml = template(__dirname + '/views/nav-list', data[1]);
        // res.status(200).json({
        //     code:'success',
        //     message:'成功',
        //     data:data[1]
        // })
        console.log(strHtml)
    })
})





module.exports = reader;