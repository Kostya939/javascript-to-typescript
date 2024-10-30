"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Типізація для HTML-елементів
const modal = document.getElementById("modal");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");
openModalButton.addEventListener("click", () => {
    modal.style.display = "block";
});
closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});
// Завантаження даних з API
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://jsonplaceholder.typicode.com/posts");
            const data = yield response.json();
            console.log(data);
            // Код для відображення даних на сторінці
        }
        catch (error) {
            console.error("Error fetching data", error);
        }
    });
}
fetchData();
// JQuery-функціонал із типами
(function ($) {
    const $window = $(window);
    const $body = $('body');
    const $header = $('#header');
    const $banner = $('#banner');
    // Налаштування breakpoints
    window.breakpoints({
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
        expandMode: (window.browser.mobile ? 'click' : 'hover')
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
    if (window.browser.os === 'wp' && window.browser.osVersion < 10)
        $('#navButton, #navPanel, #page-wrapper').css('transition', 'none');
    // Анімація заголовка
    if (!window.browser.mobile
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
