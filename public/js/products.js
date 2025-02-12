import { addProduct, removeAllProducts } from '../js/addNewProduct.js';  

export function setupProductButtons(initialType) {  
    document.addEventListener('DOMContentLoaded', function() {  
        const danaButton = document.getElementById('dana');  
        const beyazButton = document.getElementById('beyaz'); 
        const kuzuButton = document.getElementById('kuzu');  
        const dryButton = document.getElementById('dry');  
        const izgaralarButton = document.getElementById('izgaralar');  
        const hepsiButton = document.getElementById('hepsi');  

        danaButton.addEventListener('click', function(event) {  
            if (danaButton.disabled) return;  
            removeAllProducts();  
            addDanaProducts();  
            updateButtonStates('dana');  
        });  

        // Sayfa açıldığında danaButton'a tıklamış gibi davranma  
        danaButton.click();  

        beyazButton.addEventListener('click', function(event) {  
            if (beyazButton.disabled) return;  
            removeAllProducts();  
            addBeyazProducts();  
            updateButtonStates('beyaz');  
        });  
        
        kuzuButton.addEventListener('click', function(event) {  
            if (kuzuButton.disabled) return;  
            removeAllProducts();  
            addKuzuProducts();  
            updateButtonStates('kuzu');  
        });  

        dryButton.addEventListener('click', function(event) {  
            if (dryButton.disabled) return;  
            removeAllProducts();  
            addDryProducts();  
            updateButtonStates('dry');  
        });  

        izgaralarButton.addEventListener('click', function(event) {  
            if (izgaralarButton.disabled) return;  
            removeAllProducts();  
            addIzgaralarProducts();  
            updateButtonStates('izgaralar');  
        });  

        hepsiButton.addEventListener('click', function(event) {  
            if (hepsiButton.disabled) return;  
            removeAllProducts();  
            addAllProducts();  
            updateButtonStates('hepsi');  
        });

        if (initialType === 'dana') {  
            danaButton.click();  
        } else if (initialType === 'beyaz') {  
            beyazButton.click();  
        } else if (initialType === 'dry') {  
            dryButton.click();  
        } else if (initialType === 'izgaralar') {  
            izgaralarButton.click();  
        }
    });  
}  

function addDanaProducts() {  
    addProduct('1', './img/kirmiziEtUrunleri/antrikot.png', 'Antrikot', '830,00',`Antrikot, et severlerin vazgeçilmezi olan,  
        zengin lezzeti ve yumuşak dokusuyla damakları şenlendiren bir kırmızı et seçeneğidir. Özenle seçilmiş, yüksek kaliteli sığır 
        etinden elde edilen antrikot, her lokmada mükemmel bir tat bırakır.`);  
    addProduct('2', './img/kirmiziEtUrunleri/dana_kiyma.png', 'Kıyma', '630,00',`İsteğinize göre az yağlı ya da çok yağlı olarak 
        hazırlanır. Sipariş notunda belirtmeniz yeterli.`);  
    addProduct('3', './img/kirmiziEtUrunleri/dana_kontrfile.png', 'Kontrfile', '860,00',`Özenle dinlendirilmiş, düşük yağ oranı ve 
        yüksek protein içeriği ile sağlıklı beslenmenin lezzetli yolu: Dana kontrfile!`);  
    addProduct('4', './img/kirmiziEtUrunleri/dana_sucuk.png', 'Sucuk', '660,00', `Geleneksel yöntemlerle hazırlanan sucuklarımız, 
        sadece bir atıştırmalık değil, aynı zamanda bir lezzet deneyimidir. Sucuklarımız, en kaliteli etlerden ve doğal baharatlardan 
        üretilmektedir. Sağlığınızı ön planda tutarak, katkı maddesi kullanmadan, tamamen doğal bir lezzet sunuyoruz. Klasik 
        sucuklarımızın yanı sıra, acılı seçeneklerimizle damak zevkinize hitap ediyoruz. Herkesin beğenisine uygun bir alternatifimiz 
        var!`);  
    addProduct('5', './img/kirmiziEtUrunleri/dana_kusbasi.png', 'Dana Kuşbaşı', '680,00', `İsteğinize göre az yağlı ya da çok yağlı olarak 
        hazırlanır. Sipariş notunda belirtmeniz yeterli.`);  
    addProduct('6', './img/kirmiziEtUrunleri/dana_bonfile.png', 'Dana Bonfile', '850,00', `Dana bonfile, hafif tatlı ve zengin bir lezzet
        profiline sahiptir. Dana bonfile, ızgara veya tavada mühürlenerek pişirildiğinde en iyi sonuçları verir. Orta derecede  
        pişirilmesi önerilir, böylece etin yumuşaklığı ve sulu yapısı korunur. Farklı baharatlar ve marinelerle zenginleştirerek, 
        damak zevkinize uygun lezzetler yaratabilirsiniz. Yüksek kaliteli protein kaynağı olan dana bonfile, kas gelişimi ve  
        onarımı için gereklidir. Ayrıca demir, çinko ve B vitaminleri açısından zengindir, bu da bağışıklık sistemini güçlendirir.
        Dana bonfile, hem lezzeti hem de besin değeri ile sofralarınıza şıklık katacak bir üründür. Özel günlerde, 
        aile yemeklerinde veya misafirlerinize sunabileceğiniz en iyi seçeneklerden biridir. Kaliteli et arayışında olanlar 
        için mükemmel bir tercihtir.`);  
    addProduct('7', './img/kirmiziEtUrunleri/kasap_kofte.png', 'Kasap Köfte', '750,00', `Kasap Köfte, içerdiği kaliteli malzemelerle öne 
        çıkan, yumuşak dokusu ve zengin lezzetiyle damaklarda iz bırakan bir kırmızı et seçeneğidir.`);  
}  

function addBeyazProducts() {  
    addProduct('1', './img/beyazEtUrunleri/baget_1.png', 'Baget', '530,00', `Tavuk bagetlerimiz, en taze ve kaliteli tavuk etlerinden
         hazırlanır. Aile yemeklerinizi, pikniklerinizi ve özel günlerinizi daha da özel kılmak için tavuk bagetlerimizi tercih edin. 
         Yanında patates kızartması veya salata ile mükemmel bir uyum sağlar.`);  
    addProduct('2', './img/beyazEtUrunleri/butun_1.jpg', 'Bütün Tavuk', '480,00', `Tavuk ürünlerimiz, en yüksek sağlık standartlarına  
        uygun olarak üretilmektedir. Hijyenik koşullarda hazırlanıp saklanmaktalardır. Yüksek protein içeriği ve düşük yağ oranıyla  
        sağlıklı bir yaşam için mükemmel bir tercihtir. Aile sofralarınızda hem lezzetli hem de besleyici bir seçenek sunarak  
        sevdiklerinizin sağlığını ön planda tutar. Tavuk etinin zengin besin değerleri, günlük protein ihtiyacınızı karşılamanıza 
        yardımcı olur.`);  
    addProduct('3', './img/beyazEtUrunleri/izgara_but_1.jpg', 'Izgara But', '560,00', `Tavuklarımız, günlük olarak tedarik edilen 
        doğal ve sağlıklı ürünlerden elde ediliyor. İşte bu yüzden Tavukçumuz’da yediğiniz her lokma, hem lezzetli hem de besleyici!`);  
    addProduct('4', './img/beyazEtUrunleri/kalcali_but_1.jpg', 'Kalçalı But', '680,00', `Kalçalı tavuk butları, etin en lezzetli 
        kısımlarından biridir. Yumuşak dokusu ve zengin aromasıyla, her lokmada mükemmel bir tat deneyimi sunar. Izgara, fırın veya 
        tava… Kalçalı tavuk butlarımız, hangi yöntemi tercih ederseniz edin, her zaman mükemmel bir lezzet sunar.`);  
    addProduct('5', './img/beyazEtUrunleri/kanat_2.jpg', 'Kanat', '650,00',`Özenle hazırlanmış taze tavuk kanatları, özel soslarımızla 
        buluşarak eşsiz bir tat deneyimi sunuyor. Soslu kanatlarımız, hem atıştırmalık hem de ana yemek olarak mükemmel bir tercihtir.`);  
    addProduct('6', './img/beyazEtUrunleri/kanat_soslu_1.png', 'Soslu Kanat', '660,00',`Özenle hazırlanmış taze tavuk kanatları, özel soslarımızla 
        buluşarak eşsiz bir tat deneyimi sunuyor. Soslu kanatlarımız, hem atıştırmalık hem de ana yemek olarak mükemmel bir tercihtir.`);  
    addProduct('7', './img/beyazEtUrunleri/tavuk_gogus_1.png', 'Göğüs', '620,00');  
    addProduct('8', './img/beyazEtUrunleri/tavuk_incik_1.jpg', 'İncik', '660,00');  
    addProduct('9', './img/beyazEtUrunleri/tavuk_pirzola_1.jpg', 'Tavuk Pirzola', '680,00');  
    addProduct('10', './img/beyazEtUrunleri/tavuk_sis_1.jpg', 'Tavuk Şiş', '670,00');  
}  

function addKuzuProducts() {  
    addProduct('1', './img/kuzu/kuzu_beyti_1.png', 'Kuzu Beyti', '890,00');  
    addProduct('2', './img/kuzu/kuzu_but_1.png', 'Kuzu But', '880,00');  
    addProduct('3', './img/kuzu/kuzu_gerdan_1.png', 'Kuzu Gerdan', '860,00');  
    addProduct('4', './img/kuzu/kuzu_incik_1.png', 'Kuzu İncik', '880,00');  
    addProduct('5', './img/kuzu/kuzu_kol_1.png', 'Kuzu Kol', '850,00');  
    addProduct('6', './img/kuzu/kuzu_kulbasti_1.png', 'Kuzu Külbastı', '860,00');
    addProduct('7', './img/kuzu/kuzu_kusbasi_1.png', 'Kuzu Kuşbaşı', '860,00', `Kuzu kuşbaşı, mutfaklarınızda lezzetin doruklarına 
        ulaşmanızı sağlayacak bir seçenektir. Taze ve kaliteli kuzu etinden hazırlanan kuşbaşı, her yemeğe derin bir tat katarken, 
        sağlıklı beslenme için de mükemmel bir tercihtir. Sofralarınıza geleneksel ve modern tariflerle zenginlik katmaya hazır!`);
    addProduct('8', './img/kuzu/kuzu_lokum_1.png', 'Kuzu Lokum', '870,00');
    addProduct('9', './img/kuzu/kuzu_pirzola_1.png', 'Kuzu Pirzola', '890,00');
    addProduct('10', './img/kuzu/kuzu_sis_1.png', 'Kuzu Şiş', '910,00');  
}  

function addDryProducts() {  
    addProduct('1', './img/dry/dallas_1.png', 'Dallas', '990,00');  
    addProduct('2', './img/dry/new_york_1.png', 'New York', '980,00');  
    addProduct('3', './img/dry/t_bone_1.png', 'T-Bone', '995,00');  
}  

function addIzgaralarProducts() {  
    addProduct('1', './img/izgaralar/adana_1.png', 'Adana', '890,00');  
    addProduct('2', './img/izgaralar/baton_sucuk_1.png', 'Baton Sucuk', '880,00');  
    addProduct('3', './img/izgaralar/dana_sucuk_1.png', 'Acılı Sucuk', '895,00');  
    addProduct('4', './img/izgaralar/hamburger_kofte_1.png', 'Hamburger Köfte', '895,00');  
    addProduct('5', './img/izgaralar/urfa_1.png', 'Urfa', '890,00');
    addProduct('6', './img/kirmiziEtUrunleri/kasap_kofte.png', 'Kasap Köfte', '750,00');
    addProduct('7', './img/kirmiziEtUrunleri/dana_sucuk.png', 'Sucuk', '660,00');  
    addProduct('8', './img/kirmiziEtUrunleri/antrikot.png', 'Antrikot', '830,00');
    addProduct('9', './img/kirmiziEtUrunleri/dana_bonfile.png', 'Dana Bonfile', '850,00');  
    addProduct('10', './img/kirmiziEtUrunleri/dana_kontrfile.png', 'Kontrfile', '860,00');  
    addProduct('11', './img/kuzu/kuzu_sis_1.png', 'Kuzu Şiş', '910,00');
    addProduct('12', './img/kuzu/kuzu_kulbasti_1.png', 'Kuzu Külbastı', '860,00');
    addProduct('13', './img/kuzu/kuzu_beyti_1.png', 'Kuzu Beyti', '890,00');  
    addProduct('14', './img/kuzu/kuzu_pirzola_1.png', 'Kuzu Pirzola', '890,00');
    addProduct('15', './img/beyazEtUrunleri/kanat_soslu_1.png', 'Soslu Kanat', '660,00');
    addProduct('16', './img/beyazEtUrunleri/tavuk_sis_1.jpg', 'Tavuk Şiş', '670,00');
    addProduct('17', './img/beyazEtUrunleri/kanat_2.jpg', 'Kanat', '650,00');  
    addProduct('18', './img/beyazEtUrunleri/tavuk_incik_1.jpg', 'İncik', '660,00');
    addProduct('19', './img/beyazEtUrunleri/tavuk_pirzola_1.jpg', 'Tavuk Pirzola', '680,00');
    addProduct('20', './img/beyazEtUrunleri/izgara_but_1.jpg', 'Izgara But', '560,00');
}  

function addAllProducts() {  
    addProduct('1', './img/izgaralar/adana_1.png', 'Adana', '890,00');  
    addProduct('2', './img/izgaralar/baton_sucuk_1.png', 'Baton Sucuk', '880,00');  
    addProduct('3', './img/izgaralar/dana_sucuk_1.png', 'Acılı Sucuk', '895,00');  
    addProduct('4', './img/izgaralar/hamburger_kofte_1.png', 'Hamburger Köfte', '895,00');  
    addProduct('5', './img/izgaralar/urfa_1.png', 'Urfa', '890,00');  
    addProduct('6', './img/kirmiziEtUrunleri/dana_bonfile.png', 'Dana Bonfile', '850,00');  
    addProduct('7', './img/kirmiziEtUrunleri/kasap_kofte.png', 'Kasap Köfte', '750,00');
    addProduct('8', './img/kirmiziEtUrunleri/antrikot.png', 'Antrikot', '830,00');
    addProduct('9', './img/kirmiziEtUrunleri/dana_kiyma.png', 'Kıyma', '630,00');  
    addProduct('10', './img/kirmiziEtUrunleri/dana_kontrfile.png', 'Kontrfile', '860,00');  
    addProduct('11', './img/kirmiziEtUrunleri/dana_sucuk.png', 'Sucuk', '660,00');  
    addProduct('12', './img/kirmiziEtUrunleri/dana_kusbasi.png', 'Dana Kuşbaşı', '680,00');  
    addProduct('13', './img/beyazEtUrunleri/baget_1.png', 'Baget', '530,00');  
    addProduct('14', './img/beyazEtUrunleri/butun_1.jpg', 'Bütün Tavuk', '480,00');  
    addProduct('15', './img/beyazEtUrunleri/izgara_but_1.jpg', 'Izgara But', '560,00');  
    addProduct('16', './img/beyazEtUrunleri/kalcali_but_1.jpg', 'Kalçalı But', '680,00');  
    addProduct('17', './img/beyazEtUrunleri/kanat_2.jpg', 'Kanat', '650,00');  
    addProduct('18', './img/beyazEtUrunleri/kanat_soslu_1.png', 'Soslu Kanat', '660,00');
    addProduct('19', './img/beyazEtUrunleri/tavuk_gogus_1.png', 'Göğüs', '620,00');
    addProduct('20', './img/beyazEtUrunleri/tavuk_incik_1.jpg', 'İncik', '660,00');
    addProduct('21', './img/beyazEtUrunleri/tavuk_pirzola_1.jpg', 'Tavuk Pirzola', '680,00');
    addProduct('22', './img/beyazEtUrunleri/tavuk_sis_1.jpg', 'Tavuk Şiş', '670,00');
    addProduct('23', './img/kuzu/kuzu_beyti_1.png', 'Kuzu Beyti', '890,00');  
    addProduct('24', './img/kuzu/kuzu_but_1.png', 'Kuzu But', '880,00');  
    addProduct('25', './img/kuzu/kuzu_gerdan_1.png', 'Kuzu Gerdan', '860,00');  
    addProduct('26', './img/kuzu/kuzu_incik_1.png', 'Kuzu İncik', '880,00');  
    addProduct('27', './img/kuzu/kuzu_kol_1.png', 'Kuzu Kol', '850,00');  
    addProduct('28', './img/kuzu/kuzu_kulbasti_1.png', 'Kuzu Külbastı', '860,00');
    addProduct('29', './img/kuzu/kuzu_kusbasi_1.png', 'Kuzu Kuşbaşı', '860,00');
    addProduct('30', './img/kuzu/kuzu_lokum_1.png', 'Kuzu Lokum', '870,00');
    addProduct('31', './img/kuzu/kuzu_pirzola_1.png', 'Kuzu Pirzola', '890,00');
    addProduct('32', './img/kuzu/kuzu_sis_1.png', 'Kuzu Şiş', '910,00');
    addProduct('33', './img/dry/dallas_1.png', 'Dallas', '990,00');  
    addProduct('34', './img/dry/new_york_1.png', 'New York', '980,00');  
    addProduct('35', './img/dry/t_bone_1.png', 'T-Bone', '995,00');
}  

function updateButtonStates(activeButton) {  
    const danaButton = document.getElementById('dana');  
    const beyazButton = document.getElementById('beyaz');  
    const kuzuButton = document.getElementById('kuzu');  
    const dryButton = document.getElementById('dry');  
    const izgaralarButton = document.getElementById('izgaralar');  
    const hepsiButton = document.getElementById('hepsi');  

    // Her bir butonun durumunu güncelle  
    danaButton.disabled = (activeButton === 'dana');  
    beyazButton.disabled = (activeButton === 'beyaz');  
    kuzuButton.disabled = (activeButton === 'kuzu');  
    dryButton.disabled = (activeButton === 'dry');  
    izgaralarButton.disabled = (activeButton === 'izgaralar');  
    hepsiButton.disabled = (activeButton === 'hepsi');  
}
