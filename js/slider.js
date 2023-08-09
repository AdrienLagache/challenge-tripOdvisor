const slider = {

    sliderImages : [
        'ocean.jpg',
        'ski.jpg',
        'city.jpg',
        'canyon.jpg',
        'nature.jpg',
        'road.jpg'
    ],

    sliderAlt : [
        'Partir à la plage',
        'Partir à la montagne',
        "Partir à l'étranger",
        "Partir à l'aventure",
        "Promenade dans la nature",
        "Road trip"
    ],

    generateSliderImages : function() {
        const sliderContainer = document.querySelector('.slider');
        
        for (let i = 0; i < slider.sliderImages.length; i++) {
            const newSliderImage = document.createElement('img');
   
            newSliderImage.src = "img/" + slider.sliderImages[i];
            newSliderImage.classList.add("slider__img");
            newSliderImage.alt = slider.sliderAlt[i];

            sliderContainer.append(newSliderImage);
        }

        const sessionImage = sessionStorage.getItem('mySliderImage');
        const myImageArr = document.querySelectorAll('.slider__img');
        
        if (sessionImage > 0) {
            myImageArr[sessionImage].classList.add("slider__img--current");
        }
        else {
            myImageArr[0].classList.add('slider__img--current');
        }
    },

    handlerPrevious : function() {
        const pictures = document.querySelectorAll(".slider__img");

        for (let i = 0; i < pictures.length; i++) {

            if(pictures[i].classList.contains("slider__img--current") && i > 0) {
                pictures[i].classList.remove("slider__img--current");
                pictures[i - 1].classList.add("slider__img--current");
                sessionStorage.setItem('mySliderImage', i - 1);
                break;
            }
            else if (pictures[i].classList.contains("slider__img--current") && i === 0) {
                pictures[i].classList.remove("slider__img--current");
                pictures[pictures.length - 1].classList.add("slider__img--current");
                sessionStorage.setItem('mySliderImage', 5);
                break;
            }
        }
    },

    handlerNext : function() {
        slider.pictures = document.querySelectorAll(".slider__img");
        const picturesArr = slider.pictures;
        for (i = 0; i < picturesArr.length; i++) {
            if(picturesArr[i].classList.contains("slider__img--current") && i < picturesArr.length - 1) {
                picturesArr[i].classList.remove("slider__img--current");
                picturesArr[i + 1].classList.add("slider__img--current");
                sessionStorage.setItem('mySliderImage', i + 1);
                break;
            }
            else if (picturesArr[i].classList.contains("slider__img--current") && i === picturesArr.length - 1) {
                picturesArr[i].classList.remove("slider__img--current");
                picturesArr[0].classList.add("slider__img--current");
                sessionStorage.setItem('mySliderImage', 0);
                break;
            }
        }
    },
    
    init : function() {
        // const sliderSection = document.querySelector(".slider");
        document.addEventListener("DOMContentLoaded", slider.generateSliderImages);
        const previousButton = document.getElementsByClassName("slider__btn")[0];
        previousButton.addEventListener("click", slider.handlerPrevious);
        const nextButton = document.getElementsByClassName("slider__btn")[1];
        nextButton.addEventListener("click", slider.handlerNext);
    }
};