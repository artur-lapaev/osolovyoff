(function () {
    animateBackground();
    var elemMobile = document.querySelector(".content__mobile");
    var elemDesktop = document.querySelector(".content__desktop");
    var content = document.querySelector(".main__content");
    var showPopUp = document.querySelector(".header__creators");
    var popUpelem = document.querySelector(".pop-up__creators");
    var closePopUp = document.querySelector(".creators__close");
    var hideSocials = document.querySelector(".footer__socials");

    elemMobile.addEventListener("click", function () {

        var animateSocials = hideSocials.animate([{
            opacity: '1'
        }, {
            opacity: '0'
        }], 500);

        animateSocials.addEventListener("finish", function () {

            hideSocials.style.display = "none";
            showButtonHome(true, "mobile");
        });

        var animationMobile = elemMobile.animate([{
            top: '0',
            transform: 'scale(1)',
            opacity: '1'
        }, {
            top: '-70px',
            transform: 'scale(0.5)',
            opacity: '0'
        }], 700);
        animationMobile.addEventListener("finish", function () {

            elemMobile.style.display = "none";
        });

        var animationDesktop = elemDesktop.animate([{
            top: '0',
            transform: 'scale(1)',
            opacity: '1'
        }, {
            top: '-70px',
            transform: 'scale(0.5)',
            opacity: '0'
        }], 700);
        animationDesktop.addEventListener("finish", function () {
            elemDesktop.style.display = "none";
        });
        setTimeout(() => {
            content.innerHTML = "";
            for (var i = 0; i < 2; i++) {
                var createDIV = document.createElement("div");
                var linkElem = document.createElement("a");
                createDIV.appendChild(linkElem);
                content.appendChild(createDIV);
            }
            //added childs element attr href and className for mobile icons
            content.childNodes[0].classList.add("content__app-store");
            content.childNodes[0].childNodes[0].setAttribute("href", "#");
            content.childNodes[1].classList.add("content__play-market");
            content.childNodes[1].childNodes[0].setAttribute("href", "#");
        }, 800);
    }, false);

    elemDesktop.addEventListener("click", function () {
        var animateSocials = hideSocials.animate([{
            opacity: '1'
        }, {
            opacity: '0'
        }], 500);

        animateSocials.addEventListener("finish", function () {

            hideSocials.style.display = "none";
            showButtonHome(true, "mobile");
        });

        var animationMobile = elemMobile.animate([{
            top: '0',
            transform: 'scale(1)',
            opacity: '1'
        }, {
            top: '70px',
            transform: 'scale(0.5)',
            opacity: '0'
        }], 700);
        animationMobile.addEventListener("finish", function () {

            elemMobile.style.display = "none";
        });

        var animationDesktop = elemDesktop.animate([{
            top: '0',
            transform: 'scale(1)',
            opacity: '1'
        }, {
            top: '70px',
            transform: 'scale(0.5)',
            opacity: '0'
        }], 700);
        animationDesktop.addEventListener("finish", function () {
            elemDesktop.style.display = "none";
        });
        setTimeout(function () {
            content.innerHTML = "";
            for (var i = 0; i < 4; i++) {
                var createDIV = document.createElement("div");
                var linkElem = document.createElement("a");
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
        }, 800);
    }, false);

    function showButtonHome(show, devices) {
        if (show != false) {
            var footerElem = document.querySelector(".footer");

            var btnHome = document.querySelector(".footer__back-home");
            btnHome.style.display = "flex";
            btnHome.addEventListener("click", () => {
                content.innerHTML = "";
                hideSocials.style.display = "flex";
                hideSocials.animate([{
                    opacity: "0"
                }, {
                    opacity: "1"
                }], 500);
                footerElem.style.left = "0px";
                btnHome.style.display = "none";
                elemDesktop.style.display = "flex";
                elemMobile.style.display = "flex";
                content.append(elemDesktop);
                content.append(elemMobile);
            }, false);
        } else return;
    }

    function animateBackground() {
        var background = document.querySelector(".background");
        var savePosition = {};

        setInterval(function () {

            if (!savePosition.hasOwnProperty("x")) {
                var x = Math.floor(Math.random() * (80 - 0)) + 0;
                var y = Math.floor(Math.random() * (80 - 0)) + 0;
                var z = Math.floor(Math.random() * (80 - 0)) + 0;

                var xa = x + x;
                var ya = y + y;
                var za = z + z;

                var x1 = +(Math.random() * (1 - 0)).toFixed(2);
                var y1 = +(Math.random() * (1 - 0)).toFixed(2);
                var x2 = +(Math.random() * (1 - 0)).toFixed(2);
                var y2 = +(Math.random() * (1 - 0)).toFixed(2);

                background.animate([{
                    transform: `translate3d(${x}px,${y}px,${z}px)`
                }, {
                    transform: `translate3d(${xa}px,${ya}px,${za}px)`
                }], {
                    duration: 1500,
                    easing: `cubic-bezier( ${x1},${y1}, ${x2}, ${y2})`
                });

                savePosition.x = xa;
                savePosition.y = ya;
                savePosition.z = za;

                background.style.transform = `translate3d(${savePosition.x}px,${savePosition.y}px,${savePosition.z}px)`;
            } else {

                var x = Math.floor(Math.random() * (80 - 0)) + 0;
                var y = Math.floor(Math.random() * (80 - 0)) + 0;
                var z = Math.floor(Math.random() * (80 - 0)) + 0;

                var x1 = +(Math.random() * (1 - 0)).toFixed(2);
                var y1 = +(Math.random() * (1 - 0)).toFixed(2);
                var x2 = +(Math.random() * (1 - 0)).toFixed(2);
                var y2 = +(Math.random() * (1 - 0)).toFixed(2);

                background.animate([{
                    transform: `translate3d(${savePosition.x}px,${savePosition.y}px,${savePosition.z}px)`
                }, {
                    transform: `translate3d(${x}px,${y}px,${z}px)`
                }], {
                    duration: 1500,
                    easing: `cubic-bezier( ${x1},${y1}, ${x2}, ${y2})`
                });

                savePosition.x = x;
                savePosition.y = y;
                savePosition.z = z;

                background.style.transform = `translate3d(${savePosition.x}px,${savePosition.y}px,${savePosition.z}px)`;
            }
        }, 1500);
    }

    showPopUp.addEventListener("click", function () {
        var headerElem = document.querySelector(".header");
        var footerElem = document.querySelector(".footer");

        footerElem.animate([{
            filter: "blur(0px)"
        }, {
            filter: "blur(2px)"
        }], 500);
        footerElem.style.filter = "blur(2px)";

        headerElem.animate([{
            filter: "blur(0px)"
        }, {
            filter: "blur(2px)"
        }], 500);
        headerElem.style.filter = "blur(2px)";

        popUpelem.style.display = "flex";

        popUpelem.animate([{
            boxShadow: "0px 0px 0px 0px transparent",
            opacity: "0"
        }, {
            boxShadow: "1px 1px 60px 36px rgba(0,0,0,0.2)",
            opacity: "1"
        }], 500);
    }, false);
    closePopUp.addEventListener("click", function () {
        var headerElem = document.querySelector(".header");
        var footerElem = document.querySelector(".footer");

        headerElem.animate([{
            filter: "blur(2px)"
        }, {
            filter: "blur(0px)"
        }], 500);

        footerElem.animate([{
            filter: "blur(2px)"
        }, {
            filter: "blur(0px)"
        }], 500);

        popUpelem.style.display = "none";
        headerElem.style.filter = "blur(0px)";
        footerElem.style.filter = "blur(0px)";
    }, false);
})();