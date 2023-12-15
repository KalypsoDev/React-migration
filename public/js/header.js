const observer = new IntersectionObserver(trackingScroll, {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
});

function trackingScroll (entries) {
    const element = entries.filter(a => a.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)?.[0]?.target;

    if (!element) {
        return;
    }

    document.querySelectorAll('#header__navbar a.active').forEach(a => {
        a.classList.remove('active');
    })

    document.querySelector(`#header__navbar a[href="#${element.id}"]`)?.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const sections = [
        'home',
        'description',
        'features',
        'screens',
    ]

    for (const id of sections) {
        const element = document.getElementById(id);

        observer.observe(element);
    }
})
