(function(){
    let elemMobile = document.querySelector(".content__mobile");
    let content = document.querySelector(".main__content");
    elemMobile.addEventListener("click", () =>{
      let animation =  elemMobile.animate([
            { transform: 'rotateY(0)' },
            { transform: 'rotateY(90deg)' }
        ], 700);
        animation.addEventListener("finish",()=>{
            elemMobile.style.display = "none";
            let createDIV = document.createElement("div");
            content.appendChild(createDIV);

        });
        console.log('work');
        
    },false);
}());