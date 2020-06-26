// 写登录注册

const express=require('express');
const router=express.Router();

const utility=require('utility');
const db=require('../db');
//接口挂在路由对象上
//注册
router.post('/reguser',async(req,res)=>{
    //给密码加密
    req.body.password=utility.md5(req.body.password);
    console.log(req.body);

    // 添加到数据库
    let r=await db('insert into user set ?',req.body);
    // console.log(r);
    if(r&&r.affectedRows>0){
        res.send({status:0,message:'注册成功'})
    }else{
        res.send({status:1,message:'注册失败'})

    }
    
    
})

module.exports=router;