const mongoose = require('mongoose');  
const { v4: uuidv4 } = require('uuid'); // UUID kütüphanesini içe aktar  
 

const Schema = mongoose.Schema;  

// Sepetim şemasını tanımlama  
const sepetimSchema = new Schema({  
    deviceId: { type: String, required: true }, // deviceId String türünde  
    products: [  
        {  
            userId: { type: String, required: false }, // userId, res.locals.user'dan alınacak  
            productName: { type: String, required: true }, // Ürün adı  
            productImg: { type: String, required: true }, // Ürün resmi (image src)  
            quantity: { type: Number, required: true, default: 1 },  
            price: { type: Number, required: true }  
        }  
    ],  
    createdAt: { type: Date, default: Date.now }  
});  

// Sepetim modelini tanımlama  
const Sepetim = mongoose.model('Sepetim', sepetimSchema); // Model tanımını burada yapıyoruz  

// Sepet oluşturma fonksiyonu  
async function createSepet(userId, products) {  
    let deviceId = getComputerIdentifier(); // Bilgisayar numarasını al  

    // Her ürün için userId'yi ekle, yoksa deviceId kullan  
    const updatedProducts = products.map(product => ({  
        ...product,  
        userId: userId || deviceId // userId yoksa deviceId kullan  
    }));  

    const newSepet = new Sepetim({  
        deviceId,  
        products: updatedProducts // Güncellenmiş ürünleri kullan  
    });  

    // Sepeti kaydet  
    await newSepet.save();  
    console.log('Sepet oluşturuldu:', newSepet);  
}  

// Bilgisayar numarasını almak için bir fonksiyon  
function getComputerIdentifier() {  
    // UUID kullanarak benzersiz bir değer döndür  
    return uuidv4(); // UUID oluştur ve döndür  
}  

module.exports = { createSepet, Sepetim };