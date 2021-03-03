function touche() {
    

    document.addEventListener("keydown",function (e) {
        
        let touche = e.key;
        let audio = document.getElementById(touche);
        
        if (!audio) return;
        
        let test = "btn__sound-" + touche;
        
        audio.currentTime = 0
        audio.play()
        let btn = document.getElementById(test)
        console.log(btn)
        btn.classList.add('sound-active');
        
       
        audio.addEventListener("ended",function() {
            btn.classList.remove('sound-active');;
          });
    
     });
    };
    
    
    touche()
    
    
    function click() {
       
       document.addEventListener("click",function (e) {
           
            let target = e.target;
            let id = target.getAttribute('id'); 
            let idSplit = id.split('-');
            let touche = idSplit[1];
            console.log(touche);
            let audio = document.getElementById(touche);
            
            if (!audio) return;
            
            let test = "btn__sound-" + touche;
            
            audio.currentTime = 0
            audio.play()
            let btn = document.getElementById(test)
            console.log(btn)
            btn.classList.add('sound-active');
            
           
            audio.addEventListener("ended",function() {
                btn.classList.remove('sound-active');;
              });
        
         });
    };
    
    click()
    
   