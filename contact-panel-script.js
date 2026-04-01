const contactTrigger = document.getElementById('contact-trigger');
const contactPanel = document.getElementById('contact-panel');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

function openPanel() {
    contactPanel.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; 
}

function closePanel() {
    contactPanel.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

contactTrigger.addEventListener('click', openPanel);
closeBtn.addEventListener('click', closePanel);
overlay.addEventListener('click', closePanel);


