/*function scrolltobottom(){
  var height = document.body.scrollHeight;
  window.scroll(0 , height);
}*/

document.addEventListener("DOMContentLoaded", function() {
    const scrollButton = document.getElementById("scrollButton");
    
    scrollButton.addEventListener("click", function() {
        // La durée du défilement (plus c'est grand, plus c'est lent)
        const duration = 300000; // en millisecondes
        
        // La distance à faire défiler à chaque étape
        const scrollStep = 1; // en pixels
        
        const scrollInterval = setInterval(function() {
            if (window.scrollY < document.body.clientHeight - window.innerHeight) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, duration / (document.body.clientHeight / scrollStep));
    });
});

let prevScrollPos = window.pageYOffset;
const header = document.querySelector('.sticky-header');

window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    
    if (prevScrollPos > currentScrollPos) {
        // Show the header when scrolling up
        header.style.top = '0';
    } else {
        // Hide the header when scrolling down
        header.style.top = '-100px'; // Adjust this value to match your header's height
    }

    prevScrollPos = currentScrollPos;
};
