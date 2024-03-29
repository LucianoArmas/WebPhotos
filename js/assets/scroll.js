document.addEventListener("DOMContentLoaded", ()=> {
let lazyImages = [].slice.call(document.querySelectorAll(".lazy"));

if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver((entries, observer)=> {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                let lazyImage = entry.target;
                lazyImage.src = lazyImage.dataset.src;
                lazyImage.classList.remove("lazy");
                lazyImageObserver.unobserve(lazyImage);
            }
        });
    });

    lazyImages.forEach((lazyImage) => {
        lazyImageObserver.observe(lazyImage);
    });
} else {
      // Fallback para navegadores sin Intersection Observer
    lazyImages.forEach((lazyImage)=> {
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.classList.remove("lazy");
    });

}}
);
