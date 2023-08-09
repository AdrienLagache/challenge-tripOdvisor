const newsletter = {

    changeNewsletterClass : function(event) {
        //je cible le aside
        const newsletter = document.querySelector(".newsletter");
        event.preventDefault();
        
        //je modifie sa classe
        if(newsletter.classList.contains("newsletter--on")) {        
            newsletter.classList.remove("newsletter--on");
        }
        else {    
            newsletter.classList.add("newsletter--on");
        }
    },

    forbiddenDomains : [
        '@yopmail.com',
        '@yopmail.fr',
        '@yopmail.net',
        '@cool.fr.nf',
        '@jetable.fr.nf',
        '@courriel.fr.nf',
        '@moncourrier.fr.nf',
        '@monemail.fr.nf',
        '@monmail.fr.nf',
        '@hide.biz.st',
        '@mymail.infos.st',
    ],

    handlerCheck : function(event) {
        //on cible champ
        const mail = document.querySelector("#subscriber-email").value;
        //on vérifie l'email
        for(values of newsletter.forbiddenDomains) {
            if(mail.includes(values)) {
                event.preventDefault();
            //si pas bon, créer un élément <p> avec la classe "message"
                const aside = document.querySelector(".newsletter");
                aside.innerHTML += '<p class="message">Les adresses jetables ne sont pas admises</p>';
            //le placer dans l"élément aside
            }
        }
    },

    init : function() {
        //je cible le lien newsletter
        const menuClass = document.querySelector("#newsletter_item");
        //j'écoute
        menuClass.addEventListener("click", newsletter.changeNewsletterClass);

        const newsletterCloseButton = document.querySelector(".newsletter__close");
        newsletterCloseButton.addEventListener("click", newsletter.changeNewsletterClass);

        //cible le formulaire
        const form = document.querySelector("#form_newsletter");
        //ecoute l'évènement submit du formulaire
        form.addEventListener("submit", newsletter.handlerCheck);
    }
};