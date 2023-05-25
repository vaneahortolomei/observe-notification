import './style.css'

const list = document.querySelector('.list'),
    notification = document.querySelector('.notification');


const createListItems = (list, className, count) => {
    for (let i = 0; i < count; i++) {
        list.innerHTML += `<li class="${className}">${i}</li>`;
    }
};

const observeItem = () => {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                notification.classList.add('notification--show');
                if ('vibrate' in navigator) {
                    navigator.vibrate(1000);
                    console.log('Vibration API поддерживается');
                } else {
                    console.log('Vibration API не поддерживается');
                }
            } else {
                notification.classList.remove('notification--show');
            }
        });
    });

    const targetElement = document.querySelectorAll('.list__item');

    targetElement.forEach((item, index) => {

        if (index === 78) {
            observer.observe(item);
        }
    })
};


window.addEventListener('load', () => {
    createListItems(list, 'list__item', 100);
    observeItem();
});
