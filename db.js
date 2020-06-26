///封装db 
// mysql    
const mysql = require('mysql');
function db(aql, value = null) {
    return new Promise((reslove,reject)=>{
        const conn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'bigevent'
        });
        conn.connect();
        conn.query(sql,value,(err,result)=>{
            err?reject(err):reslove(result);
        });
        conn.end();
    }).catch(err=>{
        console.log(err.message);
        
    })
};
module.exports=db;
