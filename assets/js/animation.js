(function () {
    animateBackground()
    let elemMobile = document.querySelector(".content__mobile");
    let elemDesktop = document.querySelector(".content__desktop");
    let content = document.querySelector(".main__content");

    elemMobile.addEventListener("click", () => {
        showButtonHome(true, "mobile");

        let animationMobile = elemMobile.animate([
            {
                top: '0',
                transform: 'scale(1)',
                opacity: '1'
            },
            {
                top: '-70px',
                transform: 'scale(0.5)',
                opacity: '0'
            }
        ], 700);
        animationMobile.addEventListener("finish", () => {

            elemMobile.style.display = "none";

        });

        let animationDesktop = elemDesktop.animate([
            {
                top: '0',
                transform: 'scale(1)',
                opacity: '1'
            },
            {
                top: '-70px',
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
            //added childs element attr href and className for mobile icons
            content.childNodes[0].classList.add("content__app-store");
            content.childNodes[0].childNodes[0].setAttribute("href", "#");
            content.childNodes[1].classList.add("content__play-market");
            content.childNodes[1].childNodes[0].setAttribute("href", "#");
        }, 800)

    }, false);

    elemDesktop.addEventListener("click", () => {
        showButtonHome(true, "mobile");

        let animationMobile = elemMobile.animate([
            {
                top: '0',
                transform: 'scale(1)',
                opacity: '1'
            },
            {
                top: '70px',
                transform: 'scale(0.5)',
                opacity: '0'
            }
        ], 700);
        animationMobile.addEventListener("finish", () => {

            elemMobile.style.display = "none";

        });

        let animationDesktop = elemDesktop.animate([
            {
                top: '0',
                transform: 'scale(1)',
                opacity: '1'
            },
            {
                top: '70px',
                transform: 'scale(0.5)',
                opacity: '0'
            }
        ], 700);
        animationDesktop.addEventListener("finish", () => {
            elemDesktop.style.display = "none";
        });
        setTimeout(() => {
            content.innerHTML = "";
            for (let i = 0; i < 4; i++) {
                let createDIV = document.createElement("div");
                let linkElem = document.createElement("a");
                createDIV.appendChild(linkElem);
                content.appendChild(createDIV);
            }
            //added childs element attr href and className for desktop icons
            content.childNodes[0].classList.add("content__steam");
            content.childNodes[0].childNodes[0].setAttribute("href", "#");
            content.childNodes[1].classList.add("content__windows");
            content.childNodes[1].childNodes[0].setAttribute("href", "#");
            content.childNodes[2].classList.add("content__mac");
            content.childNodes[2].childNodes[0].setAttribute("href", "#");
            content.childNodes[3].classList.add("content__linux");
            content.childNodes[3].childNodes[0].setAttribute("href", "#");
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

    function animateBackground() {
        let background = document.querySelector(".background");
        let savePosition = {};

        setInterval(function () {

            if (!savePosition.hasOwnProperty("x")) {
                let x = Math.floor(Math.random() * (80 - 0)) + 0;
                let y = Math.floor(Math.random() * (80 - 0)) + 0;
                let z = Math.floor(Math.random() * (80 - 0)) + 0;

                let xa = x + x;
                let ya = y + y;
                let za = z + z;
                
                background.animate([{
                    transform: `translate3d(${x}px,${y}px,${z}px)`
                }, {
                    transform: `translate3d(${xa}px,${ya}px,${za}px)`
                }], 1500);

                savePosition.x = xa;
                savePosition.y = ya;
                savePosition.z = za;

                background.style.transform = `translate3d(${savePosition.x}px,${savePosition.y}px,${savePosition.z}px)`;

            } else {
                
                let x = Math.floor(Math.random() * (80 - 0)) + 0;
                let y = Math.floor(Math.random() * (80 - 0)) + 0;
                let z = Math.floor(Math.random() * (80 - 0)) + 0;

                background.animate([{
                     transform: `translate3d(${savePosition.x}px,${savePosition.y}px,${savePosition.z}px)`
                }, {
                    transform: `translate3d(${x}px,${y}px,${z}px)`
                }], 1500);

                savePosition.x = x;
                savePosition.y = y;
                savePosition.z = z;

                background.style.transform = `translate3d(${savePosition.x}px,${savePosition.y}px,${savePosition.z}px)`;

            }

        }, 1500);
    }

}());