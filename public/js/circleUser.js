document.getElementById('circleUserIcon').addEventListener('click', function(event) {
    var menu = document.getElementById('dropdownMenu');
    // Menü görünürlüğünü kontrol et ve değiştir  
    menu.style.display = menu.style.display === 'none' || menu.style.display === '' ? 'block' : 'none';
    event.stopPropagation(); // Tıklama olayını durdur
     
});
document.getElementById('arrowIcon').addEventListener('click', function(event) {
    var menu = document.getElementById('dropdownMenu');
    menu.style.display = menu.style.display === 'none' || menu.style.display === '' ? 'block' : 'none';
    event.stopPropagation();
});

// Belgeye tıklama olayı ekle
document.addEventListener('click', function(event) {
    var menu = document.getElementById('dropdownMenu');
    // Eğer menü açıksa ve tıklanan öğe menü değilse, menüyü kapat
    if (menu.style.display === 'block' && !menu.contains(event.target) && event.target.id !== 'circleUserIcon') {
        menu.style.display = 'none';
    }
});