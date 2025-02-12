import { writeLength } from '/js/readIndexDb.js';
      
document.addEventListener('DOMContentLoaded', function() {  
    const quantityDisplays = [];  
    const plusButtons = [];  
    const minusButtons = [];  
    const currentQuantities = [];  

    for (let i = 1; i <= 8; i++) {  
        const quantityDisplay = document.getElementById(`${i}hizliQuantity`);  
        const plusButton = document.getElementById(`${i}plusIndex`);  
        const minusButton = document.getElementById(`${i}minusIndex`);  

        // Başlangıçta miktarı ayarlama  
        currentQuantities[i] = 1;  
        updateQuantityDisplay(quantityDisplay, currentQuantities[i]);  

        plusButton.addEventListener('click', function(event) {   
            currentQuantities[i] = handlePlusClick(quantityDisplay, currentQuantities[i]);  
        });  

        minusButton.addEventListener('click', function(event) {   
            currentQuantities[i] = handleMinusClick(quantityDisplay, currentQuantities[i]);  
        });  

        // Diziye buton ve miktar göstergesi ekleme  
        quantityDisplays.push(quantityDisplay);  
        plusButtons.push(plusButton);  
        minusButtons.push(minusButton);  
    }  

    // Her ürün için ayrı ayrı handleProductClick fonksiyonları  
    handleProductClick(1);  
    handleProductClick(2);  
    handleProductClick(3);  
    handleProductClick(4);  
    handleProductClick(5);  
    handleProductClick(6);  
    handleProductClick(7);  
    handleProductClick(8);  

    function updateQuantityDisplay(quantityDisplay, currentQuantity) {  
        if (Number.isInteger(currentQuantity)) {  
            quantityDisplay.textContent = currentQuantity.toFixed(0);  
        } else {  
            quantityDisplay.textContent = currentQuantity.toFixed(1);   
        }  
    }  

    function handlePlusClick(quantityDisplay, currentQuantity) {  
        currentQuantity += 0.5;  
        updateQuantityDisplay(quantityDisplay, currentQuantity);  
        return currentQuantity;  
    }  

    function handleMinusClick(quantityDisplay, currentQuantity) {  
        if (currentQuantity > 0.5) {  
            currentQuantity -= 0.5;  
        }  
        if (currentQuantity < 0.5) {  
            currentQuantity = 0.5;  
        }  
        updateQuantityDisplay(quantityDisplay, currentQuantity);  
        return currentQuantity;  
    }  

    function handleProductClick(number) {  
        const hizliBasketButton = document.getElementById(`hizliBasket${number}`);  
        const productName = document.getElementById(`hizliName${number}`);  
        const productImg = document.getElementById(`hizliImg${number}`);  
        const productPrice = document.getElementById(`hizliPrice${number}`);  
        
        hizliBasketButton.addEventListener('click', async () => {  
            const currentQuantity = currentQuantities[number];  
            const data = {   
                productNameDb: productName.textContent,   
                productImgDb: productImg.src,   
                productPriceDb: productPrice.textContent,   
                quantityDb: currentQuantity  
            };  
            //console.log(data);  
            initializeDatabase(data);
            //ekrandaki sepete sayıyı
            writeLength();
        });  
    };

    function initializeDatabase(data) {  
        const request = indexedDB.open('deviceDb', 1);  
    
        // Veritabanı oluşturma veya güncelleme  
        request.onupgradeneeded = function(event) {  
            const db = event.target.result;
            const objectStore = db.createObjectStore('deviceSepetim', { keyPath: 'id', autoIncrement: true });  
            //console.log('Veritabanı ve nesne deposu oluşturuldu.');  
        };  
    
        request.onsuccess = function(event) {  
            const db = event.target.result;  
            //console.log('Veritabanı başarıyla açıldı.');  
    
            addSampleData(db,data);  
        };  
    
        request.onerror = function(event) {  
            console.error('Veritabanı hatası:', event.target.error);  
        };  
    }  
    
    function addSampleData(db,data) {  
        const transaction = db.transaction(['deviceSepetim'], 'readwrite');  
        const objectStore = transaction.objectStore('deviceSepetim'); 
        const addRequest = objectStore.add(data);  
    }

});