import { writeLength } from '/js/readIndexDb.js';
export function addProduct(number, imageSrc, productName, price, description) {  
    const productContainer = document.getElementById('product-container');
    const productId = formatString(productName);
    
    // Medya sorgusu  
    const mediaQuery = window.matchMedia('(max-width: 900px)'); // Medya sorgusu tanımlaması  
    const updatedProductName = handleMediaChange(mediaQuery, productName);  

    // Yeni bir ürün div'i  
    const newProduct = document.createElement('div');  
    newProduct.className = 'visual1';  
    
    newProduct.innerHTML = `  
        <img src="${imageSrc}" alt="${updatedProductName}" id="${productId}">  
        <div class="urun-name">${updatedProductName}</div>  
        <div class="price-container">  
            <p class="urun-1-price">${price}</p>  
            <svg xmlns="http://www.w3.org/2000/svg" id="urun-price-sign" data-name="Layer 1" viewBox="0 0 24 24" width="5" height="20" class="tlSign">  
                <path d="M20.5,11c-.829,0-1.5,.672-1.5,1.5,0,4.687-3.813,8.5-8.5,8.5-.827,0-1.5-.673-1.5-1.5v-5.403l6.013-2.186c.778-.283,1.18-1.145,.897-1.923-.283-.779-1.144-1.181-1.922-.897l-4.987,1.814v-1.807l6.013-2.186c.778-.283,1.18-1.145,.897-1.923-.283-.779-1.144-1.181-1.922-.897l-4.987,1.814V1.5c-.034-1.972-2.967-1.971-3,0V6.994l-3.013,1.096c-.778,.283-1.18,1.145-.897,1.923,.282,.787,1.164,1.177,1.922,.897l1.987-.723v1.807l-3.013,1.096c-.778,.283-1.18,1.145-.897,1.923,.282,.787,1.164,1.177,1.922,.897l1.987-.723v4.312c0,2.481,2.019,4.5,4.5,4.5,6.341,0,11.5-5.159,11.5-11.5,0-.828-.671-1.5-1.5-1.5Z"/>  
            </svg>  
        </div>  
        <div class="addPlace" id="addPlaceMagaza">  
            <p class="minus-magaza" id="${number}minusMagaza">-</p>  
            <div class="quantity-group">  
                <p class="quantity-magaza" id="${number}quantityMagaza">1</p>  
                <p class="kg-magaza">kg</p>  
            </div>  
            <p class="plus-magaza" id="${number}plusMagaza">+</p>  
        </div>  
        <div>  
            <button class="add-basket" id="basket${number}">  
                <p class="basketText">Sepete Ekle</p>  
            </button>  
        </div>  
    `;  
    
    productContainer.appendChild(newProduct);  

    setupQuantityControl(number,imageSrc, productName, price);

    //id üzerinden ürün seçme fonksiyonu
    chooseProduct(productId, productName, price, imageSrc, description);

    // Ekran boyutu değiştiğinde handleMediaChange fonksiyonunu çağır  
    mediaQuery.addEventListener('change', (event) => {  
        const productNames = Array.from(document.querySelectorAll('.urun-name'));  
        productNames.forEach((element) => {  
            const originalName = element.textContent;  
            const updatedName = handleMediaChange(event, originalName);  
            element.textContent = updatedName; // Güncellenmiş ismi elemente ata  
        });  
    });  
}  

// Miktar kontrolü fonksiyonu  
function setupQuantityControl(number,imageSrc, productName, price) {  
    const plusButton = document.getElementById(`${number}plusMagaza`);  
    const minusButton = document.getElementById(`${number}minusMagaza`);  
    const quantityDisplay = document.getElementById(`${number}quantityMagaza`);  
    const basketButton = document.getElementById(`basket${number}`);  

    plusButton.addEventListener('click', function() {  
        let currentQuantity = parseFloat(quantityDisplay.textContent);  
        currentQuantity += 0.5;  
        quantityDisplay.textContent = currentQuantity; // Miktarı günceller  
    });  

    minusButton.addEventListener('click', function() {  
        let currentQuantity = parseFloat(quantityDisplay.textContent);  
        currentQuantity -= 0.5;  
        if (currentQuantity < 0) {  
            currentQuantity = 0;  
        }  
        quantityDisplay.textContent = currentQuantity;  
    });
    basketButton.addEventListener('click',function(){
        
        const data = {   
            productNameDb: productName,   
            productImgDb: imageSrc,   
            productPriceDb: price,   
            quantityDb: quantityDisplay.textContent 
        };  
        
        console.log(data);  
        initializeDatabase(data);
        //ekrandaki sepete sayıyı
        writeLength();
        document.getElementById('myModalMagaza').classList.remove('hidden');  
        document.getElementById('myModalMagaza').classList.add('sekil');
    });
}


// Medya değişim kontrol fonksiyonu  
function handleMediaChange(event, productName) {  
    if (event.matches) {  
        const words = productName.trim().split(/\s+/); // Kelimeleri diziye ayır  

        if (words.length === 2) { // Eğer kelime sayısı 2 ise  
            const firstWord = words[0]; // İlk kelime  
            const secondWord = words[1]; // İkinci kelime  
            
            // İlk kelimenin ilk harfini büyük yap ve yanına nokta ekle  
            const formattedFirstWord = firstWord.charAt(0).toUpperCase() + '.';  
            productName = formattedFirstWord + ' ' + secondWord;  
            return formattedFirstWord + ' ' + secondWord;  
        }  
    }  
    return productName;  
}

// Tüm ürünleri silme fonksiyonu  
export function removeAllProducts() {  
    const productContainer = document.getElementById('product-container');  
    while (productContainer.firstChild) {  
        productContainer.removeChild(productContainer.firstChild); // Tüm çocukları kaldır  
    }  
}

//id için isim üreten fonksiyon
function formatString(input) {  
    const formatted = input.split(' ')  
        .map(word => word.toLowerCase())
        .join('');
    return formatted;  
}

//id üzerinden ürün seçme fonksiyonu
function chooseProduct(productId, updatedProductName, price, imageSrc, description) {  
    const productImage = document.getElementById(productId);
    
    productImage.addEventListener('click', function(event) {  
        window.location.href = `/urun?product=${encodeURIComponent(updatedProductName)}&price=${encodeURIComponent(price)}
        &image=${encodeURIComponent(imageSrc)}&description=${encodeURIComponent(description)}`;  
    });  
}
//database içine kaydetme
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