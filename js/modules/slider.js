function slider ({container, nextBtn, prevBtn, slide, totalCounter, currentCounter, wrapper, field}) {
    //Slider

    const sliders = document.querySelectorAll(slide),
          btnPrev = document.querySelector(prevBtn),  
          btnNext = document.querySelector(nextBtn),
          currentSlideNumber = document.querySelector(currentCounter),
          totalSlideNumber = document.querySelector(totalCounter),
          slidesWrapper = document.querySelector(wrapper),
          slidesField = document.querySelector(field),
          width = window.getComputedStyle(slidesWrapper).width;

    let offset = 0;
    let slideIndex = 1;

    function changeSlideNumber () {
        sliders.length < 10 ? 
        currentSlideNumber.textContent = `0${slideIndex}`:
        currentSlideNumber.textContent = slideIndex;
    };

    function changeSlideOffset () {
        slidesField.style.transform = `translateX(-${offset}px)`;
    };

    function changeActiveDot () {
        dots.forEach((dot, i) => {
            dot.style.opacity = '.5';
            if ([i+1] == slideIndex) {
                dot.style.opacity = '1';
            }
        });
    };

    function getNumber (str) {
       return +str.replace(/\D/g, '');
    };

    if (sliders.length < 10) {
        totalSlideNumber.textContent = `0${sliders.length}`;
        currentSlideNumber.textContent = `0${slideIndex}`;
    } else {
        totalSlideNumber.textContent = sliders.length;
        currentSlideNumber.textContent = slideIndex;
    };

    slidesField.style.width = 100 * sliders.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    sliders.forEach(slide => {
        slide.style.width = width;
    });

    btnNext.addEventListener('click', () => {
        if (offset == getNumber(width) * (sliders.length - 1)) {
            offset = 0; 
        } else {
            offset += getNumber(width);
        };

        changeSlideOffset();

        if (slideIndex == sliders.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        };

        changeSlideNumber();

        changeActiveDot();
    });

    btnPrev.addEventListener('click', () => {
        if (offset == 0) {
            offset = getNumber(width) * (sliders.length - 1);
        } else {
            offset -= getNumber(width);
        };

        changeSlideOffset();

        if (slideIndex == 1) {
            slideIndex = sliders.length;
        } else {
            slideIndex--;
        };

        changeSlideNumber();

        changeActiveDot();
    });

    //Dot Navigator

    const dotsWrapper = document.querySelector('.carousel-indicators'),
          fullSlider = document.querySelector(container);

    fullSlider.style.position = 'relative';

    sliders.forEach(() => {
        const element = document.createElement('div');
        element.classList.add('dot');
        dotsWrapper.append(element);
        element.style.borderRadius = '68%';
        element.style.width = '10px';
        element.style.height = '10px';        
    });

    const dots = document.querySelectorAll('.dot');

    changeActiveDot();    

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            slideIndex = i+1;

            changeSlideNumber();

            if (slideIndex == 1) {
                offset = 0;
            } else {
                offset = getNumber(width) * (slideIndex - 1);
            };

            changeSlideOffset();
            
            changeActiveDot();

        });
    });
}

export default slider;