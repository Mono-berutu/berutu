        const suara = document.querySelector('audio')
        const kiri = document.querySelector('.kiri')
        const mulai = document.querySelector('.mulai')
        const lanjut = document.querySelector('.lanjut')
        const list = document.querySelector('.list')
        const nama = document.querySelector('.nama')
        const durasi = document.querySelector('.durasi')
        const vol = document.querySelector('.vol')
        const ubah = document.querySelector('.ubah')
        const tetap = document.querySelector('.tetap')
        const mati = document.querySelector('#mati')
        const penuh = document.querySelector('#penuh')
        const foto = document.querySelector('#foto')
        const jaj = document.querySelector('#jaj')
        const cob = document.querySelector('#hal img')

        let namasong = [];
        let nomor = 0;

        suara.onloadedmetadata = function(){
            durasi.max = suara.duration;
            durasi.value = suara.currentTime;
        }
        

        function mus(){
            let lala = list.getElementsByTagName('li');
            for(i=0;i<lala.length;i++){
                namasong.push(lala[i].getAttribute('data-src'));
            }
            suara.src = namasong[nomor];
            let suaralis = list.getElementsByTagName('li');
            let con = suaralis[nomor].getAttribute('data-name');
            nama.innerText = con;
            let kaka = suaralis[nomor].getAttribute('data-img');
            foto.src = kaka;
            
            for(i=0;i<suaralis.length;i++){
                suaralis[i].classList.remove('hall');
            }
            suaralis[nomor].classList.add('hall');
        }
        mus();


        
        mulai.addEventListener('click', function(){
            document.body.classList.toggle('play')
            if(document.body.classList.contains('play')){
                suara.play()
                mulai.src = "pause.svg"
                foto.classList.toggle('kaka')
            }else{
                suara.pause()
                mulai.src = "play.svg"
                foto.classList.remove('kaka')
            }
        })

        lanjut.addEventListener('click', function(){
            if(nomor == namasong.length - 1){
                nomor = 0   
            }else{
                nomor++
            }
            suara.src = namasong[nomor];
            let suaralis = list.getElementsByTagName('li');
            let con = suaralis[nomor].getAttribute('data-name');
            let kaka = suaralis[nomor].getAttribute('data-img');
            nama.innerText = con;
            foto.src = kaka;

            for(i=0;i<suaralis.length;i++){
                suaralis[i].classList.remove('hall');
            }
            suaralis[nomor].classList.add('hall');
            mulai.src = "pause.svg"
            suara.play();
        });

        kiri.addEventListener('click', function(){
            if(nomor == 0){
                nomor=0
            }else{
                nomor--
            }
            suara.src = namasong[nomor];
            let suaralis = list.getElementsByTagName('li');
            let con = suaralis[nomor].getAttribute('data-name');
            let kaka = suaralis[nomor].getAttribute('data-img');
            nama.innerText = con;
            foto.src = kaka;

            for(i=0;i<suaralis.length;i++){
                suaralis[i].classList.remove('hall');
            }
            suaralis[nomor].classList.add('hall');
            mulai.src = "pause.svg"
            suara.play();
        })

        list.addEventListener('click', function(e){
            nomor = e.target.closest('li').getAttribute('data-index')
            console.log(nomor)
            suara.src = namasong[nomor];
            let suaralis = list.getElementsByTagName('li');
            let con = suaralis[nomor].getAttribute('data-name');
            let kaka = suaralis[nomor].getAttribute('data-img');
            nama.innerText = con;
            foto.src = kaka;

            for(i=0;i<suaralis.length;i++){
                suaralis[i].classList.remove('hall');
                foto.classList.remove('kaka')
            }
            suaralis[nomor].classList.add('hall');
            foto.classList.toggle('kaka')
            mulai.src = "pause.svg"
            suara.play();
        })

        
        durasi.addEventListener('change',function(){
            suara.currentTime = durasi.value
            mulai.src = "pause.svg"
            suara.play();
        })
        if(suara.play){
            setInterval(() => {
                durasi.value = suara.currentTime;
            }, 500);
        }

        suara.addEventListener('ended',function(){
            if(nomor == namasong.length - 1){
                nomor = 0   
            }else{
                nomor++
            }
            suara.src = namasong[nomor];
            let suaralis = list.getElementsByTagName('li');
            let con = suaralis[nomor].getAttribute('data-name');
            let kaka = suaralis[nomor].getAttribute('data-img');
            nama.innerText = con;
            foto.src = kaka;

            for(i=0;i<suaralis.length;i++){
                suaralis[i].classList.remove('hall');
            }
            suaralis[nomor].classList.add('hall');
            mulai.src = "pause.svg"
            suara.play();
        })

        
        
        suara.addEventListener('timeupdate', function(){
            var menitsekarang = Math.floor(suara.currentTime / 60);
            var detiksekarang = Math.floor(suara.currentTime - menitsekarang  * 60);
            var menitdurasi = Math.floor(suara.duration / 60);
            var detikdurasi = Math.floor(suara.duration - menitdurasi  * 60);
            
      
            if(menitsekarang<10)(menitsekarang="0"+menitsekarang)
            if(detiksekarang<10)(detiksekarang="0"+detiksekarang)
            if(menitdurasi<10)(menitdurasi="0"+menitdurasi)
            if(detikdurasi<10)(detikdurasi="0"+detikdurasi)
      
            ubah.innerHTML=menitsekarang+ ":" + detiksekarang;
            tetap.innerHTML=menitdurasi+ ":" + detikdurasi;
          })
     
            vol.addEventListener('change', function(){
                suara.volume = vol.value / 100
            })

            mati.addEventListener('click',function(){
                suara.volume = 0
            })
            penuh.addEventListener('click',function(){
                suara.volume = vol.value / 100
            })

        
            

            



            