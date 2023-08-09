//module de gestion des actions possibles pour les destinations
const destinations = {
    
    errorMessage : "Veuillez vous connecter pour gérer vos favoris ! ",

    handleLikeClick : function (event) {
        const toutLarticle = event.target.closest('.card');
        const oldArticleMessages = document.querySelectorAll('p[class="message"]');

        for(const oldMessage of oldArticleMessages) {
            oldMessage.remove();
        }

        const errorMessage = document.createElement('p');
        errorMessage.classList.add('message');
        errorMessage.textContent = destinations.errorMessage;
        toutLarticle.prepend(errorMessage);
    },

    init : function() {
        const likeButton = document.querySelectorAll('.btn__like');

        for (const currentLike of likeButton) {
            currentLike.addEventListener('click', destinations.handleLikeClick);
        }
    }
};

