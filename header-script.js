let lastScrollTop = 0;
const header = document.getElementById('main-header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        header.classList.add('hide');
    } else {
        header.classList.remove('hide');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);


