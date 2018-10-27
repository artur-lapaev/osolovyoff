(function() {
    let elemMobile = document.querySelector(".content__mobile");
    let elemDesktop = document.querySelector(".content__desktop");
    let content = document.querySelector(".main__content");

    elemMobile.addEventListener("click", () => {
        showButtonHome(true, "mobile");

        let animationMobile = elemMobile.animate([
            { top: '0',
              transform: 'scale(1)',
              opacity: '1'
            },
            { top: '-70px',
              transform: 'scale(0.5)',
              opacity: '0'
            }
        ], 700);
        animationMobile.addEventListener("finish", () => {

            elemMobile.style.display = "none";

        });
        
        let animationDesktop = elemDesktop.animate([
            { top: '0',
              transform: 'scale(1)',
              opacity: '1'
            },
            { top: '-70px',
              transform: 'scale(0.5)',
              opacity: '0'
            }
        ], 700);
        animationDesktop.addEventListener("finish", () => {
            elemDesktop.style.display = "none";

        });
        setTimeout(() => {
            content.innerHTML = "";
            for (let i = 0; i < 2; i++) {
                let createDIV = document.createElement("div");
                let linkElem = document.createElement("a");
                createDIV.appendChild(linkElem);
                content.appendChild(createDIV);
            }
            content.childNodes[0].classList.add("content__app-store");
            content.childNodes[0].childNodes[0].setAttribute("href","https://www.apple.com/lae/ios/app-store/");
            content.childNodes[1].classList.add("content__play-market");
            content.childNodes[1].childNodes[0].setAttribute("href","https://play.google.com/store?hl=en");
        }, 800)

    }, false);

    elemDesktop.addEventListener("click", () => {
        showButtonHome(true, "mobile");

        let animationMobile = elemMobile.animate([
            { top: '0',
              transform: 'scale(1)',
              opacity: '1'
            },
            { top: '70px',
              transform: 'scale(0.5)',
              opacity: '0'
            }
        ], 700);
        animationMobile.addEventListener("finish", () => {

            elemMobile.style.display = "none";

        });
        
        let animationDesktop = elemDesktop.animate([
            { top: '0',
              transform: 'scale(1)',
              opacity: '1'
            },
            { top: '70px',
              transform: 'scale(0.5)',
              opacity: '0'
            }
        ], 700);
        animationDesktop.addEventListener("finish", () => {
            elemDesktop.style.display = "none";
        });
        setTimeout(() => {
            content.innerHTML = "";
            for (let i = 0; i < 2; i++) {
                let createDIV = document.createElement("div");
                let linkElem = document.createElement("a");
                createDIV.appendChild(linkElem);
                content.appendChild(createDIV);
            }
            content.childNodes[0].classList.add("content__app-store");
            content.childNodes[0].style.animationName = "animateMobileIconsOnBottom";      
            content.childNodes[1].classList.add("content__play-market");
            content.childNodes[0].style.animationName = "animateMobileIconsOnBottom"; 
        }, 800)

    }, false);
    function showButtonHome(show, devices) {
        if (show != false) {
            let footerElem = document.querySelector(".footer");
            footerElem.addEventListener("click", () => {
                footerElem.style.display = "none";
                content.innerHTML = "";
                elemDesktop.style.display = "flex";
                elemMobile.style.display = "flex";
                content.append(elemDesktop);
                content.append(elemMobile);

            }, false);
            footerElem.style.display = "flex";
            let animateFooter = footerElem.animate([
                { opacity: '0' },
                { opacity: '1' }
            ], 700);

            animateFooter.addEventListener("finish", () => {
                footerElem.style.opacity = "1";
            });
        } else return;
    }

}());