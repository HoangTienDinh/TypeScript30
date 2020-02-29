/**
 * JavaScript30 by Wes Bos, https://javascript30.com/
 * TypeScript implementation by Will Wager
 * Project: Slide in on Scroll
 * Concepts: CSS Transitions, Debouncing, Scroll detection
 * Key takeaways: Math with scrollY, innerHeight, offsetTop, and height;
 *   Save complex conditions to named variable for readability.
 * Sidenotes: Debounce is a higher-order function that returns functions with
 *   a shared, captured timeout variable.
 * Compilation command:
 *   tsc --removeComments --strictNullChecks --noImplicitAny --target es5 typescripts.ts
 */

function debounce(func: () => void, wait = 20, immediate = true) {
  let timeout: number | undefined;
  return function () {
    const context = this,
      args = arguments;
    const later = function () {
      timeout = undefined;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide() {
  sliderImages.forEach((sliderImage: HTMLImageElement) => {
    const slideInAt = window.scrollY + window.innerHeight - sliderImage.height / 2;
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));
