export function upperCase(productName) {  
    if (productName) {  
        // Kelimeleri ayır ve her kelimenin baş harfini büyük yap  
        return productName.split(' ').map(word => {  
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();  
        }).join(' ');  
    }  
    return productName; // Eğer productName boşsa, olduğu gibi döndür  
}