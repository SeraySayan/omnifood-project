// Setting the footer year
const currentYear = new Date().getFullYear();
const yearElement = document.querySelector('.year');
yearElement.textContent = currentYear;
//mobile navigation
const btnElement = document.querySelector('.btn-mobile-nav');
const headerElement = document.querySelector('.header');

btnElement.addEventListener('click', function () {
    headerElement.classList.toggle('nav-open');
});

//Smooth scrolling
const allLinks = document.querySelectorAll('a:link');
allLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault;
        const href = link.getAttribute('href');
        if (href == '#')
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });

        if (href.startsWith('#') && href != '#') {
            const sectionElement = document.querySelector(href);
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }

        if (link.classList.contains('main-nav-link')) {
            headerElement.classList.toggle('nav-open');
        }
    });
});
///Sticky navigation
const sectionHeroEl = document.querySelector('.section-hero');
const obs = new IntersectionObserver(
    function (entries) {
        const ent = entries[0];
        if (!ent.isIntersecting) {
            document.body.classList.add('sticky');
        }
        if (ent.isIntersecting) {
            document.body.classList.remove('sticky');
        }
    },
    {
        rootMargin: '-80px',
        root: null,
        threshold: 0,
    }
);
obs.observe(sectionHeroEl);
///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement('div');
    flex.style.display = 'flex';
    flex.style.flexDirection = 'column';
    flex.style.rowGap = '1px';

    flex.appendChild(document.createElement('div'));
    flex.appendChild(document.createElement('div'));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if (!isSupported) document.body.classList.add('no-flexbox-gap');
}
checkFlexGap();
