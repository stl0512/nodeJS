// 注册和登录的处理

const express = require('express')
const path = require('path')



//创建路由对象
const accountRouster = require(path.join(__dirname,"../controllers/accountController"))

//MVC
accountRouter.get('/register',accountController.getRegisterPage)