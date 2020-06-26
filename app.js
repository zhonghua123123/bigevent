//入口文件
//搭建服务器
const express=require('express');
const app=express();
app.listen(3007,()=>console.log('启动了'));

//配置post中间件
app.use(express.urlencoded({extended: false}));

//配置跨域的中间件
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})
//加载路有文件，注册中间件
let loginRouter = require('./routers/login');
let categoryRouter = require('./routers/category');
let articleRouter = require('./routers/article');
let userRouter = require('./routers/user');

app.use('/api', loginRouter);
app.use('/my/article', categoryRouter);
app.use('/my/article', articleRouter);
app.use('/my', userRouter);