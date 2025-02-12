const kirmiziEtButton = document.getElementById('kirmiziEt');
      const beyazEtButton = document.getElementById('beyazEt');
      const dryEtButton = document.getElementById('dryEt');
      const izgaralarEtButton = document.getElementById('izgaralarEt');

      kirmiziEtButton.addEventListener('click', function(event) { 
         window.location.href = '/magaza?product=dana';
         return;
      });
      beyazEtButton.addEventListener('click', function(event) { 
         window.location.href = '/magaza?product=beyaz';
         return;
      });
      dryEtButton.addEventListener('click', function(event) { 
         window.location.href = '/magaza?product=dry';
         return;
      });
      izgaralarEtButton.addEventListener('click', function(event) { 
         window.location.href = '/magaza?product=izgaralar';
         return;
      });