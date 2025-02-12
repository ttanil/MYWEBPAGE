function openInfoMenu() {  
    document.getElementById('myModal').classList.remove('hidden');  
}  

function closeInfoMenu() {  
    document.getElementById('myModal').classList.add('hidden');
    const distanceInfo = document.getElementById('distanceInfo');  
    distanceInfo.innerText = distanceInfo.innerText === '+' ? '-' : '+';
}  

function toggleProductInfo() {  
    const infoDetails = document.getElementById('infoDetails');  
    infoDetails.classList.toggle('hidden');  
}