export const generateLeftMargin = () => {
    let x = 0;
    let value = 0;
    let slides = 0;
    if (window.innerWidth >= 1568) {
        x = (window.innerWidth - 1568) / 2;
        value = window.innerWidth - (1568 + x);
        slides = 3;
    } else if (window.innerWidth >= 1280) {
        x = (window.innerWidth - 1280) / 2;
        value = window.innerWidth - (1280 + x);
        slides = 2.5;
    } else if (window.innerWidth >= 1029) {
        x = (window.innerWidth - 1029) / 2;
        value = window.innerWidth - (1029 + x);
        slides = 2;
    } else if (window.innerWidth >= 768) {
        x = (window.innerWidth - 768) / 2;
        value = window.innerWidth - (768 + x);
        slides = 1.8;
    } else if (window.innerWidth >= 640) {
        x = (window.innerWidth - 640) / 2;
        value = window.innerWidth - (640 + x);
        slides = 1.5;
    } else {
        value = 0;
        slides = 1;
    }

    return { margin: value, slides: slides };
};
