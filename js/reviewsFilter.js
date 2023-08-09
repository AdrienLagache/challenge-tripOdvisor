const reviewsFilter = {

    init : function() {
        document.addEventListener('DOMContentLoaded', reviewsFilter.myReviewsFilter);

        const ratingCheckboxes = document.querySelectorAll(".filter input");
        for (const ratingCheckbox of ratingCheckboxes) {
            ratingCheckbox.addEventListener('change', reviewsFilter.handleRatingFilter);
        }
    },

    myReviewsFilter : function() {
        const myFilters = document.querySelectorAll('.filter input');

        for (const myFilter of myFilters) {
            const myRating = sessionStorage.getItem(myFilter.value);

            if (myRating === null) {
                continue;
            }

            valueArr = myRating.split(' ');
            const myValue = parseInt(valueArr, 10);
            console.log(myValue)

            if (valueArr[1] === 'false') {
                reviewsFilter.toggleReviewsFromRating(myValue);
                myFilter.checked = false;
                }           
        }
    },

    // s'execute au clic d'un boutton checkbox pour filtrer les resultats
    handleRatingFilter : function(event) {
        const currentCheckbox = event.target;
        const checkBoxValue = currentCheckbox.value;
        const isChecked = currentCheckbox.checked;

        sessionStorage.setItem(checkBoxValue, checkBoxValue + ' ' + isChecked);
        reviewsFilter.toggleReviewsFromRating(checkBoxValue);
    },

    toggleReviewsFromRating : function(rating) {
        const dataSetReviews = document.querySelectorAll(`.review[data-rating = "${rating}"]`);

        for (const reviewElement of dataSetReviews) {
            reviewElement.classList.toggle("review--hidden");
        }
    }
};

