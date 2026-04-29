function ShowBurger(){
    var burgerMenu = document.getElementById("burger-menu");
    burgerMenu.style.display = 'block';
    burgerMenu.style.width = '100%';
    burgerMenu.style.marginLeft = '-10%';
   
    document.getElementById("burger-button").style.display = 'none';
    document.getElementById("burger-close").style.display = 'block';

    disableScroll();
}

function HideBurger(){
    var burgerMenu = document.getElementById("burger-menu");
    burgerMenu.style.display = 'none';
   
    document.getElementById("burger-button").style.display = 'block';
    document.getElementById("burger-close").style.display = 'none';

    enableScroll();
}

function disableScroll() {
    // Get the current page scroll position
    scrollTop =
        window.pageY ||
        document.documentElement.scrollTop;
    scrollLeft =
        window.pageX ||
        document.documentElement.scrollLeft,

        // if any scroll is attempted,
        // set this to the previous value
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function () { };
}
