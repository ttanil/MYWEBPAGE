function readAllData() {  
    return new Promise((resolve, reject) => {
       const request = indexedDB.open('deviceDb', 1);

       request.onsuccess = function(event) {
             const db = event.target.result;
             const transaction = db.transaction(['deviceSepetim'], 'readonly');
             const objectStore = transaction.objectStore('deviceSepetim');
             const getAllRequest = objectStore.getAll();

             getAllRequest.onsuccess = function() {
                const allData = getAllRequest.result.map(item => {
                   return {
                         idDb: item.id,
                         productNameDb: item.productNameDb,
                         productImgDb: item.productImgDb,
                         productPriceDb: item.productPriceDb,
                         quantityDb: item.quantityDb
                   };
                });
/*
indexedDB işlemleri asenkron olduğundan, allData.length değerini doğrudan döndürmek mümkün değildir. Bunun yerine, bir callback 
fonksiyonu veya Promise kullanarak bu değeri dışarıya iletebilirsiniz.
*/
                resolve(allData.length);
             };

             getAllRequest.onerror = function(event) {
                reject('Veri okuma hatası: ' + event.target.error);
             };  
       };
       request.onerror = function(event) {  
             reject('Veritabanı açma hatası: ' + event.target.error);
       };  
    });  
 }
function writeLength(){
    readAllData()
    .then(length => {  
        if(length>0 && length<=15){
           document.getElementById('itemCount').textContent = length;
        } else if(length===0){
           document.getElementById('itemCount').textContent = "";
        } else if (length>15){
            document.getElementById('myModalIndex').classList.remove('hidden');  
            document.getElementById('myModalIndex').classList.add('sekil');
        }
     })  
     .catch(error => {  
        //console.error(error);  
     });
}
      
 export { writeLength };