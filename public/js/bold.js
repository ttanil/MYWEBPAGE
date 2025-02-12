const items = ['hepsi', 'dana', 'beyaz', 'kuzu', 'dry','izgaralar'];  

document.getElementById('dana').style.fontWeight = '500';

items.forEach(item => {  
    document.getElementById(item).addEventListener('click', function(event) {
        items.forEach(i => {
            document.getElementById(i).style.fontWeight = '200';  
        });
        this.style.fontWeight = '500';  
        event.stopPropagation();  
    });  
});