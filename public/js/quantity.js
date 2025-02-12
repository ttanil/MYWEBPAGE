
const number = 1;



const plusButton = document.getElementById(`${number}plusMagaza`);
const minusButton = document.getElementById(`${number}minusMagaza`);

const quantityDisplay = document.getElementById(`${number}quantityMagaza`);  

plusButton.addEventListener('click', function() {  
    let currentQuantity = parseFloat(quantityDisplay.textContent);  
    currentQuantity += 0.5; // 0.5 artır  

    //quantityDisplay.textContent = currentQuantity.toFixed(1); // 1 ondalık basamakla göster
    quantityDisplay.textContent = currentQuantity; 
});

minusButton.addEventListener('click', function() {  
    let currentQuantity = parseFloat(quantityDisplay.textContent);  
    currentQuantity -= 0.5;  
    if (currentQuantity < 0.5) {  
        currentQuantity = 0.5;  
    }  
    quantityDisplay.textContent = currentQuantity;  
});




