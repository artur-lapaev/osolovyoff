(function() {
    let elemMobile = document.querySelector(".content__mobile");
    let elemDesktop = document.querySelector(".content__desktop");
    let content = document.querySelector(".main__content");

    elemMobile.addEventListener("click", () => {
        showButtonHome(true, "mobile");

        let animationMobile = elemMobile.animate([
            { transform: 'rotateY(0)' },
            { transform: 'rotateY(90deg)' }
        ], 700);
        animationMobile.addEventListener("finish", () => {
            elemMobile.style.display = "none";

        });
        let animationDesktop = elemDesktop.animate([
            { transform: 'rotateY(0)' },
            { transform: 'rotateY(90deg)' }
        ], 700);
        animationDesktop.addEventListener("finish", () => {
            elemDesktop.style.display = "none";

        });
        setTimeout(() => {
            content.innerHTML = "";
            for (let i = 0; i < 2; i++) {
                let createDIV = document.createElement("div");
                content.appendChild(createDIV);
            }
            content.childNodes[0].classList.add("content__app-store");
            content.childNodes[1].classList.add("content__play-market");
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