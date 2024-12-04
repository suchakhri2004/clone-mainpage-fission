document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const navbarText = document.querySelector('.navbartext');

    activateLink('news-link');
    
    hamburgerIcon.addEventListener('click', function () {
        navbarText.classList.toggle('active');
    });

    document.getElementById('news-link').addEventListener('click', function(event) {
        event.preventDefault();
        showNewsItems();
        activateLink('news-link');
    });

    document.getElementById('csr-link').addEventListener('click', function(event) {
        event.preventDefault();
        showCsrItems();
        activateLink('csr-link');
    });
});

// 

function showNewsItems() {
    document.querySelectorAll('.items').forEach(item => {
        item.classList.add('hidden');
    });
    document.querySelectorAll('.items.item-1, .items.item-2, .items.item-3').forEach(item => {
        item.classList.remove('hidden');
    });
}

function showCsrItems() {
    document.querySelectorAll('.items').forEach(item => {
        item.classList.add('hidden');
    });
    document.querySelectorAll('.items.item-4, .items.item-5, .items.item-6').forEach(item => {
        item.classList.remove('hidden');
    });
}

function activateLink(linkId) {
    document.querySelectorAll('.nav-news a').forEach(link => {
        link.classList.remove('active');
    });
    document.getElementById(linkId).classList.add('active');
}

// 

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = function() {
    var button = document.querySelector('.scroll-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.classList.add('show');
    } else {
        button.classList.remove('show');
    }
};

