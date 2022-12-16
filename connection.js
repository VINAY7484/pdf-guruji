const mysql = require('mysql');
const connection =  mysql.createConnection({
 host:'localhost',
 user:'root',
 password:'',
 database:'pdf_guruji'
});
module.exports=connection;
//===============mongodb=====================================
/*
var mongoose = require('mongoose');
var picSchema= new mongoose.Schema({
    picpath:String
})

var picModel = mongoose.model('picsdemo',picSchema);
mongoose.connect('mongodb://localhost:27017/pdf_gurujji',{useNewUrlParser:true})
.then(()=>console.log('Database connected')).catch(err=>console.log('error ocured',err));
*/

//connect mongodb in node js ?







