document.addEventListener('DOMContentLoaded', function() {
    const navigationHeight = document.querySelector('#nav-container').offsetHeight;
    
    document.documentElement.style.setProperty('--scroll-padding', navigationHeight + "px");
});