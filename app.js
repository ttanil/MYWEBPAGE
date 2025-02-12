const express = require('express');
const { engine } = require('express-handlebars');
const expressSession = require('express-session');
const fileUpload = require('express-fileupload');
const dotenv = require('dotenv');
const path = require('path');
const dbs = require(path.join(__dirname, 'dbs.js'));
const crypto = require('crypto');


dotenv.config();


// Database connection  
dbs();

//değişkenler
const time=1000*60*30; //30 dakika

// başlangıç ayarları
const app=express();
const SECRET_VALUE=process.env.SECRET_VALUE || 'kasapzakir';
const PORT=process.env.PORT || 5500;


//şablon motoru alanı
app.engine('handlebars',engine());
app.set('view engine','handlebars');
app.set('views', path.join(__dirname,'views'));


//middleware
app.use(express.json());
app.use(fileUpload());
app.use(expressSession({
    secret:SECRET_VALUE,
    resave:false,
    saveUninitialized:true,
    cookie:{path:'/',httpOnly:true, secure:false, maxAge:time}
}));
app.use(express.static(path.join(__dirname,'public')));



//router
const indexPage=require(path.join(__dirname,'router','indexPage.js'));
const magazaPage=require(path.join(__dirname,'router','magazaPage.js'));
const hakkimizdaPage=require(path.join(__dirname,'router','hakkimizdaPage.js'));
const urunPage=require(path.join(__dirname,'router','urunPage.js'));
const registerPage=require(path.join(__dirname,'router','registerPage.js'));
const loginPage=require(path.join(__dirname,'router','loginPage.js'));
const logoutPage=require(path.join(__dirname,'router','logoutPage.js'));
const sepetimPage=require(path.join(__dirname,'router','sepetimPage.js'));


//yetkilendirme
app.use('/',(req,res,next)=>{
    const{userId} = req.session
    if(userId){
        res.locals.user = true
        res.locals.userId=userId
    }
    else{
        res.locals.user = false
    }
    next()
})


app.use('/',indexPage);
app.use('/magaza',magazaPage);
app.use('/hakkimizda',hakkimizdaPage);
app.use('/urun',urunPage);
app.use('/register',registerPage);
app.use('/login',loginPage);
app.use('/logout',logoutPage);
app.use('/sepetim',sepetimPage);
app.use('*', (req, res) => {  
    res.status(404).render('404', { title: '404 Not Found' }); // 404 sayfası için
});



app.listen(PORT,()=>{
    console.log('http://127.0.0.1:5500')
});
