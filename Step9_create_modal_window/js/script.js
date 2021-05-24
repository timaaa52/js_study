window.addEventListener('DOMContentLoaded', () => {

    // Tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabContent = document.querySelectorAll('.tabcontent'),
        tabParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function tabShowContent(i = 0) {
        tabContent[i].classList.add('show', 'fade');
        tabs[i].classList.add('tabheader__item_active');
    }

    tabParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    tabShowContent(i);
                }
            });
        }
    });
    hideTabContent();
    tabShowContent();

    // Timer

    const deadline = '2021-06-06';

    function getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor((total / (1000 * 60 * 60 * 24))),
            hours = Math.floor((total / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((total / (1000 * 60)) % 60),
            seconds = Math.floor((total / 1000) % 60);

        return {
            days,
            hours,
            minutes,
            seconds,
            total
        };
    }

    function setClock(selector, deadline) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            startTimer = setInterval(updateClock, 1000);

        updateClock();

        function getZero(num) {
            if (num >= 0 && num < 10) {
                return `0${num}`;
            } else {
                return num;
            }
        }

        function updateClock() {
            const t = getTimeRemaining(deadline);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t <= 0) {
                clearInterval(startTimer);
            }

        }
    }
    setClock('.timer', deadline);

    // Modal

    const btns = document.querySelectorAll('[data-start]'),
        modal = document.querySelector('.modal'),
        close = document.querySelector('[data-close]');


    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
        });
    });

    function modalClosed() {
        modal.classList.add('hide');
        modal.classList.remove('show');
    }


    close.addEventListener('click', modalClosed);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modalClosed();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            modalClosed();
        }
    });

});