function debounce(func, wait, immediate) {
    if (wait === void 0) { wait = 20; }
    if (immediate === void 0) { immediate = true; }
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = undefined;
            if (!immediate)
                func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow)
            func.apply(context, args);
    };
}
var sliderImages = document.querySelectorAll('.slide-in');
function checkSlide() {
    sliderImages.forEach(function (sliderImage) {
        var slideInAt = window.scrollY + window.innerHeight - sliderImage.height / 2;
        var imageBottom = sliderImage.offsetTop + sliderImage.height;
        var isHalfShown = slideInAt > sliderImage.offsetTop;
        var isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        }
        else {
            sliderImage.classList.remove('active');
        }
    });
}
window.addEventListener('scroll', debounce(checkSlide));
