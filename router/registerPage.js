const express = require('express');
const router = express.Router();
const {join} = require('path')
const User =  require(join(__dirname,'..','models','userModel.js'))



router.get('/',(req,res)=>{
    res.render('site/register')
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
        const { email, name, surname, password } = req.body;  

        // Eksik veri girişi varsa  
        if (!email || !name || !surname || !password) {
            return res.json({  
                case: false,  
                message: 'Eksik bilgi girildi'  
            });  
        }


        // Mail kontrolü 
        if (email.length < 7 || email.length > 50) {
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


        // Name verisinin sadece string olarak girilmesini kontrol et  
        if (typeof name !== 'string' || name.trim() === '') {
            return res.json({
                case: false,
                message: 'İsim girişi hatalı'
            });
        }
        if (name.length < 2 || name.length > 30) {
            return res.json({
                case: false,
                message: 'İsim girişi hatalı'
            });
        }

        // Surname verisinin sadece string olarak girilmesini kontrol et  
        if (typeof surname !== 'string' || surname.trim() === '') {  
            return res.json({  
                case: false,  
                message: 'İsim girişi hatalı'  
            });  
        }  
        if (surname.length < 2 || surname.length > 30) {  
            return res.json({  
                case: false,  
                message: 'İsim girişi hatalı'  
            });  
        }

        const nameSurnameRGX = new RegExp(/^[a-zA-ZğüşöçİĞÜŞÖÇı\s]+$/);  
        if (!nameSurnameRGX.test(name)) {  
            return res.json({  
                case: false,  
                message: 'İsim girişi hatalı'  
            });  
        }  

        if (!nameSurnameRGX.test(surname)) {  
            return res.json({  
                case: false,  
                message: 'İsim girişi hatalı'  
            });  
        }


        // Password verisinin sadece string olarak girilmesini kontrol et  
        if (typeof password !== 'string' || password.trim() === '') {  
            return res.json({  
                case: false,  
                message: 'Geçersiz şifre'  
            });  
        }  
        if (password.length < 2 || password.length > 30) {  
            return res.json({  
                case: false,  
                message: 'Geçersiz şifre'  
            });  
        }


        // Veritabanında arama  
        const userDbCont = await User.find({ 'email': email }).exec();  
        if (userDbCont.length !== 0) {  
            return res.json({  
                case: false,  
                message: 'Sistemde kayıtlı'  
            });  
        }



        // Veritabanına kayıt işlemi  
        const user = new User({  
            'email': email,  
            'name': name,  
            'surname': surname,  
            'password': password  
        });  

        await user.save().then((data)=>{
            let ID=data._id
            ID=String(ID)
            console.log(ID)
            req.session.userId=ID
            const userId = localStorage.getItem('userId');
            console.log(userId);
            return res.json({  
                case: true,  
                message: 'Kullanıcı kaydı yapılmıştır.'
            });  
        }); // Asenkron kaydetme işlemini bekle
    } catch (error) {  
        console.log(error);  
        return res.json({  
            case: false,  
            message: 'Hata oluştu'  
        });  
    }  
});

module.exports = router;