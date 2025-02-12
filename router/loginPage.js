const express = require('express');
const router = express.Router();
const {join} = require('path')
const User =  require(join(__dirname,'..','models','userModel.js'))



router.get('/',(req,res)=>{
    res.render('site/login')
});

router.post('/', async (req, res) => {  
    try {  
        // Kullanıcının düzgün veri girmemesi durumu  
        if (!req.body) {  
            return res.json({  
                case: false,  
                message: 'Hatalı veri'  
            });  
        }  

        // Veri düzgünse  
        const { email, password } = req.body;  

        // Eksik veri girişi varsa  
        if (!email || !password) {  
            return res.json({  
                case: false,  
                message: 'Eksik bilgi girildi'  
            });  
        }  


        // Mail kontrolü 
        if (email.length < 5 || email.length > 50) {  
            return res.json({  
                case: false,  
                message: 'Mail bilgisi eksik veya hatalı'  
            });  
        }
        const emailRGX = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);  
        if (!emailRGX.test(email)) {  // E-posta regex ile kontrol ediliyor
            return res.json({  
                case: false,  
                message: 'Mail bilgisi eksik veya hatalı'  
            });  
        } 


        // Password verisinin sadece string olarak girilmesini kontrol et  
        if (typeof password !== 'string' || password.trim() === '') {
            return res.json({  
                case: false,  
                message: 'Şifre girişi hatalı'  
            });  
        }
        if (password.length < 2 || password.length > 20) {  
            return res.json({  
                case: false,  
                message: 'Şifre girişi hatalı'  
            });  
        }


        // Veritabanında arama
        const userDbCont = await User.find({'email': email }).exec();
        if (userDbCont.length !== 0) {

            const registeredUsers = [];

            userDbCont.forEach(user => {
                registeredUsers.push({
                    name: user.name,
                    surname: user.surname,
                    email: user.email,
                    password: user.password,
                    id:String(user._id)
                });
            });

            if(password===registeredUsers[0].password){
                req.session.userId=registeredUsers[0].id
                console.log(req.session.userId);
                return res.json({  
                    case: true,  
                    message: 'Kullanıcı kayıtlı'
                });
            } else{
                return res.json({  
                    case: false,  
                    message: 'Şifre girişi hatalı'  
                });
            } 
        } else {
            return res.json({  
                case: false,  
                message: 'Kayıt bulunamadı'  
            });
        }

        // Eğer buraya kadar gelindiyse, email ve password doludur  
        //console.log(email, password);




    } catch (error) {  
        console.log(error);  
        return res.json({  
            case: false,  
            message: 'Hata oluştu'  
        });  
    }  
});  




module.exports = router;