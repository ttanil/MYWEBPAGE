const express = require('express')
const router = express.Router()
const { join } = require('path');
const { createSepet,Sepetim } =  require(join(__dirname,'..','models','sepetim.js'))


router.get('/', (req, res)=>{
     return res.render('site/sepetim')
})


router.post('/', async (req, res) => {
     try {  
          const userId = req.body.userId;
          const products = req.body.products;

          const deviceId = products[0].deviceId;
          console.log('tt '+deviceId);
          // Veritabanında arama
          const dbCont = await Sepetim.find({'deviceId': deviceId }).exec();
          if (dbCont.length !== 0) {
               console.log('yess');
          }

          // Sepeti oluştur  
          //await createSepet(userId, products);  
  
          // Başarılı yanıt gönder  
          res.status(201).json({ message: 'Sepet başarıyla oluşturuldu.' });  
      } catch (error) {  
          console.error('Sepet oluşturma hatası:', error);  
          res.status(500).json({ message: 'Sepet oluşturulurken bir hata oluştu.' });  
      }  
   
});


module.exports = router