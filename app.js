const express=require('express');
const app=express();
const connection=require('./connection');
const bodyParser= require('body-parser');
const fs = require('fs');
//const fs= require(./uploads);
//const session=require('express-session');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true }));

const port=3000;


app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.static('upload'));

// =================get method start====================
app.get('/',(req,res)=>{
    res.render("index");
});

app.get('/service-page',(req,res)=>{
    res.render("service-page");
});
app.get('/payment-page',(req,res)=>{
    res.render("payment-page");
});
app.get('/about-us',(req,res)=>{
    res.render("about-us");
});
app.get('/contact-us',(req,res)=>{
    res.render("contact-us");
});
app.get('/pricing',(req,res)=>{
    res.render("pricing");
});
app.get('/about-us',(req,res)=>{
    res.render("about-us");
});
app.get('/notes',(req,res)=>{
    res.render("notes");
});
/*
app.get('/first',(req,res)=>{
    res.render("first");
});
*/
app.get('/first',(req,res)=>{
    connection.query("select * from tbl_uploadnotes",(error,result)=>{
        if(result.length>0)
        {
            res.render("first",{data:result});
        }
        else
        {
            throw error;
        }
    })
    
});
app.get('/second',(req,res)=>{
    res.render("second");
});
app.get('/third',(req,res)=>{
    res.render("third");
});
app.get('/forth',(req,res)=>{
    res.render("forth");
});
app.get('/pdf',(req,res)=>{
    res.render("pdf");
});
app.get('/pdf',(req,res)=>{
    res.render("pdf");
});

//==================== admin Zone  start============================
 
app.get('/dashboard',(req,res)=>{
    res.render("./adminZone/dashboard");
});
app.get('/login',(req,res)=>{
    res.render("./adminZone/login");
});
app.get('/profile',(req,res)=>{
    res.render("./adminZone/profile");
});
app.get('/table',(req,res)=>{
    res.render("./adminZone/table");
});
app.get('/register',(req,res)=>{
    res.render("./adminZone/register");
});
app.get('/upload_notes',(req,res)=>{
    res.render("./adminZone/upload_notes");
});
//===================== Admin Zone end=======================================

// ========================get method end==================================

// =========================post method start====================



//==============multer================
var multer= require('multer');
 //var cname=" ";
 var pdfname=" ";
var storage = multer.diskStorage({
    destination:function(req,file,callback){
        callback(null,'./uploads');
    },
    filename:function(req,file,callback){
        callback(null,file.originalname);
 //       cname=file.originalname
        pdfname=file.originalname
    }
});
//var upload = multer({storage:storage}).single('cover');
var upload = multer({storage:storage}).single('pdf');
// upload notes 
app.post('/upload_notes',(req,res)=>{
 
    upload(req,res,function(err){
        var name,subject,pdf;
        name=req.body.name;
        subject=req.body.subject;
        //cover=cname;
        //pdf=req.body.pdf;
        pdf=pdfname
        if(err)  throw err;
        
          else{    // res.end("file is upload successfully!"+fname);
        connection.query("insert into tbl_uploadnotes(name,subject,pdf) values(?, ?, ?)",[name,subject,pdf],(error,result)=>{
            if(error) throw error;
            else
            res.end("<script>alert('product added into databse ');window.location.href='/upload_notes'</script>");
        })
    }
});


    

});
//upload  end here
app.post('/subscribe',(req,res)=>{
    var Email;
    Email=req.body.email;
    connection.query('insert into tbl_scb(email) values(?)',[Email],(error,result)=>{
            if(error){
                throw error;

            }
            else{
                res.end("<script> alert ('submitted on databse ');window.location.href='/ '   </script>");
            }
    } );

});


// =========================post method end====================
// ===================pdf start======================
 

 app.post('/first',function(req,res){
    var name=req.body.id;
    res.download(pdfname);
    console.log("pdfname")
 });
//===========pdf end======================


app.listen(port,(error)=>{
    if(error) throw error;
    else
    console.log('server is connected on port %d ',port);
    console.log('click here open http://localhost:%d ',port);

});