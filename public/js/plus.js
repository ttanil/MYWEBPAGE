document.getElementById("toggleInfo").addEventListener("click", function() {
    const infoDetails = document.getElementById("infoDetails");
    infoDetails.classList.toggle("open");  // "open" sınıfını ekle veya kaldır
    this.textContent = infoDetails.classList.contains("open") ? "-" : "+"; // Artı veya eksi işareti
});

//Ürün sayfasındaki ikinci artı işareti için
document.getElementById("distanceInfo").addEventListener("click", function() {
    distanceInfo.innerText = distanceInfo.innerText === '+' ? '-' : '+';  
  } );
