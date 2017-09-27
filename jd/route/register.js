const exp = require('express')
const fs = require('fs')
const register =exp()


register.post('/api/register',(req,res)=>{
    fs.exists('user',(exists)=>{
        if(!exists){
            fs.mkdir('user')
        }
        fs.exists(`user/${req.body.userName}.json`,(exists)=>{
            if(exists){
                res.status(200).json({
                    code:'error',
                    message:'该用户注册'
                })
            }
            else{
                fs.writeFile(`user/${req.body.userName}.json`,JSON.stringify(req.body))
                res.status(200).json({
                    code:'success',
                    message:'注册成功'
                })
            }
        })
    })
})


register.post('/api/sign',(req,res)=>{
    fs.exists(`user/${req.body.userName}.json`,(exists)=>{
        if(exists){
            var data = fs.readFileSync(`user/${req.body.userName}.json`)
            data = JSON.parse(data.toString())
            if(req.body.psw == data.password){
                res.cookie('userName',req.body.userName)
                res.status(200).json({
                    code:'success',
                    message:'登录成功'
                })

            }
            else{
                res.status(200).json({
                    code:'error',
                    message:'用户密码错误'
                })
            }
        }
        else{
            res.status(200).json({
                code:'error',
                message:'用户不存在'
            })
        }
    })
})


register.get('/signout',(req,res)=>{
    res.clearCookie('userName')
    res.redirect('/')
})

module.exports = register