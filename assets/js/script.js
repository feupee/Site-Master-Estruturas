/*Scroll*/
document.addEventListener('scroll', () => {
    document.documentElement.dataset.scroll = window.scrollY;
});

const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
    document.addEventListener('scroll', storeScroll);
    storeScroll();
const debounce = (fn) => {
    let frame;

    return (...params) => {
        if (frame) {
            cancelAnimationFrame(frame);
        }
        frame = requestAnimationFrame(() => {
            fn(...params);
        });
    };
};

const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
};

document.addEventListener('scroll', debounce(storeScroll));

storeScroll();

document.addEventListener('scroll', debounce(storeScroll), { passive: true });

}

/*Scroll*/

/*BtnTop*/

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 1000) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})

/*BtnTop*/
