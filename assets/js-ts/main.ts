// Типізація для HTML-елементів
const modal = document.getElementById("modal") as HTMLElement;
const openModalButton = document.getElementById("openModal") as HTMLButtonElement;
const closeModalButton = document.getElementById("closeModal") as HTMLButtonElement;

openModalButton.addEventListener("click", () => {
    modal.style.display = "block";
});

closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Завантаження даних з API
async function fetchData(): Promise<void> {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log(data);
        // Код для відображення даних на сторінці
    } catch (error) {
        console.error("Error fetching data", error);
    }
}

fetchData();

// JQuery-функціонал із типами
(function ($: any) {
    const $window = $(window);
    const $body = $('body');
    const $header = $('#header');
    const $banner = $('#banner');

    // Налаштування breakpoints
    (window as any).breakpoints({
        wide: ['1281px', '1680px'],
        normal: ['981px', '1280px'],
        narrow: ['841px', '980px'],
        narrower: ['737px', '840px'],
        mobile: [null, '736px']
    });

    // Відтворення анімацій під час завантаження сторінки
    $window.on('load', function () {
        window.setTimeout(() => {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Налаштування скролу
    $('.scrolly').scrolly({
        speed: 1000,
        offset: function () { return $header.height() + 10; }
    });

    // Налаштування випадаючого меню
    $('#nav > ul').dropotron({
        mode: 'fade',
        noOpenerFade: true,
        expandMode: ((window as any).browser.mobile ? 'click' : 'hover')
    });

    // Панель навігації
    $('<div id="navButton">' +
        '<a href="#navPanel" class="toggle"></a>' +
        '</div>').appendTo($body);

    $('<div id="navPanel">' +
        '<nav>' +
        $('#nav').navList() +
        '</nav>' +
        '</div>').appendTo($body)
        .panel({
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            side: 'left',
            target: $body,
            visibleClass: 'navPanel-visible'
        });

    // Виправлення для WP<10
    if ((window as any).browser.os === 'wp' && (window as any).browser.osVersion < 10)
        $('#navButton, #navPanel, #page-wrapper').css('transition', 'none');

    // Анімація заголовка
    if (!(window as any).browser.mobile
        && $header.hasClass('alt')
        && $banner.length > 0) {
        $window.on('load', function () {
            $banner.scrollex({
                bottom: $header.outerHeight(),
                terminate: () => { $header.removeClass('alt'); },
                enter: () => { $header.addClass('alt reveal'); },
                leave: () => { $header.removeClass('alt'); }
            });
        });
    }
})(jQuery);
