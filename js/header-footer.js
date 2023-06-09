const main = document.querySelector("main");
const page = window.location.pathname;

if (page !== "/index.html" && page !== "/") {
    main.insertAdjacentHTML(
        "beforebegin",
        `
          <header class="header-main">
            <div class="header-main__container container1">
                <div class="header-main__burger">
                        <div class="header-main__butger-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                <div class="header-main__menu">
                    <a href="../index.html" class="header-main__logo"><img src="../images/header-footer/logo-black.svg" alt="logo"></a>
                    <nav class="header-main__nav">
                      <ul class="header-main__nav-list">
                        <li><a class="header-main__nav-link" href="about-us.html">About Us</a></li>
                        <li><a class="header-main__nav-link" href="courses.html">Courses</a></li>
                        <li><a class="header-main__nav-link" href="events-list.html">Events</a></li>
                        <li><a class="header-main__nav-link" href="blog.html">Blog</a></li>
                        <li><a class="header-main__nav-link" href="contacts.html">Contacts</a></li>
                      </ul>
                    </nav>
                </div>
                <a href="tel:4055550128" class="header-main__btn">Get consultation</a>
                <button class="header-main__reg" type="button" id="login"><img src="../images/header-footer/person.svg" alt="">Log in / Register</button>
            </div>
        </header>
        `
    );

    main.insertAdjacentHTML(
        "afterend",
        `
    <footer class="footer">
            <div class="footer__container container1">
                <div class="footer__top">
                    <div class="footer__column footer__column_01">
                        <div class="footer__logo"><a href="../index.html"><img src="../images/header-footer/logo-white.svg" alt="footer-logo"></a></div>
                        <p class="footer__text text_f1">Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts. We provide relevant approaches to online learning, internships and employment in the largest companies in the country.</p>
                        <div class="footer__soc">
                            <a target="blank" href="https://www.facebook.com/" class="footer__soc-link"><img src="../images/header-footer/social01.svg" alt="social"></a>
                            <a target="blank" href="https://twitter.com/" class="footer__soc-link"><img src="../images/header-footer/social02.svg" alt="social"></a>
                            <a target="blank" href="https://www.youtube.com" class="footer__soc-link"><img src="../images/header-footer/social03.svg" alt="social"></a>
                            <a target="blank" href="https://web.telegram.org" class="footer__soc-link"><img src="../images/header-footer/social04.svg" alt="social"></a>
                            <a target="blank" href="https://www.instagram.com" class="footer__soc-link"><img src="../images/header-footer/social05.svg" alt="social"></a>
                            <a target="blank" href="https://www.linkedin.com" class="footer__soc-link"><img src="../images/header-footer/social06.svg" alt="social"></a>
                        </div>
                    </div>
                    <nav class="footer__column footer__column_02">
                        <h4 class="footer__title title_f1">Site Map</h4>
                        <ul class="footer__list">
                            <li><a class="footer__link link_f1" href="about-us.html">About Us</a></li>
                            <li><a class="footer__link link_f1" href="courses.html">Courses</a></li>
                            <li><a class="footer__link link_f1" href="events-list.html">Events</a></li>
                            <li><a class="footer__link link_f1" href="blog.html">Blog</a></li>
                            <li><a class="footer__link link_f1" href="contacts.html">Contacts</a></li>
                        </ul>
                    </nav>
                    <div class="footer__column footer__column_03">
                        <h4 class="footer__title title_f1">Courses</h4>
                        <ul class="footer__list">
                            <li><a class="footer__link link_f1" href="courses.html">Marketing</a></li>
                            <li><a class="footer__link link_f1" href="courses.html">Management</a></li>
                            <li><a class="footer__link link_f1" href="courses.html">HR & Recruting</a></li>
                            <li><a class="footer__link link_f1" href="courses.html">Design</a></li>
                            <li><a class="footer__link link_f1" href="courses.html">Development</a></li>
                        </ul>
                    </div>
                    <dl class="footer__column footer__column_04">
                        <dt class="footer__title title_f1">Contact Us</dt>
                        <dd class="footer__list">
                            <a href="tel:4055550128" class="footer__link footer__link_desc link_f1"><img src="../images/header-footer/phone-black.svg" alt="phone-black">(405) 555-0128</a>
                            <a href="mailto:hello@createx.com" class="footer__link footer__link_desc link_f1"><img src="../images/header-footer/email.svg" alt="email">hello@createx.com</a>
                        </dd>
                    </dl>
                    <form action="#" name="user-sign-up" class="footer__column footer__column_05">
                        <h4 class="footer__title title_f1">Sign up to our newsletter</h4>
                        <div class="footer__input">
                            <input type="email" required placeholder="Email address">
                            <button type="submit" class="footer__input-btn"></button>
                        </div>
                        <p class="footer__rule text_f1">*Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.</p>
                    </form>
                </div>
            </div>
            <div class="footer__bottom">
                <div class="footer__bottom-container container1">
                    <p class="footer__copiright text_f1">© All rights reserved. Made with by <img src="../images/header-footer/heart.svg" alt="heart"> Createx Studio</p>
                    <button class="footer__bottom-btn title_f1" type="button">GO TO TOP</button>
                </div>
            </div>
        </footer>
    <div class="popup" id="popup">
    <div class="popup__back" id="popup__back">
    <div class="popup__wrapper" id="popup__wrapper">
        <div class="popup__close" id="popup__close">X</div>
        <div class="popup__title">Sign in</div>
        <div class="popup__text">
            Sign in to your account using email and password
            provided during registration.
        </div>
        <form action="#" class="popup__form">
            <p class="popup__name">Email</p>
            <input
                type="text"
                class="popup__email"
                placeholder="Your working email"
            />
            <p class="popup__name">Password</p>
            <input type="password" class="popup__pwd" placeholder="********"/>
            <button class="popup__btn">Sign in</button>
        </form>
    </div>
</div>
</div>
    `
    );
} else {
    main.insertAdjacentHTML(
        "beforebegin",
        `
        <header class="header-main">
            <div class="header-main__container container1">
                <div class="header-main__burger">
                        <div class="header-main__butger-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                <div class="header-main__menu">
                    <a href="index.html" class="header-main__logo"><img src="images/header-footer/logo-black.svg" alt="logo"></a>
                    <nav class="header-main__nav">
                      <ul class="header-main__nav-list">
                        <li><a class="header-main__nav-link" href="./pages/about-us.html">About Us</a></li>
                        <li><a class="header-main__nav-link" href="./pages/courses.html">Courses</a></li>
                        <li><a class="header-main__nav-link" href="./pages/events-list.html">Events</a></li>
                        <li><a class="header-main__nav-link" href="./pages/blog.html">Blog</a></li>
                        <li><a class="header-main__nav-link" href="./pages/contacts.html">Contacts</a></li>
                      </ul>
                    </nav>
                </div>
                <a href="tel:4055550128" class="header-main__btn">Get consultation</a>
                <button class="header-main__reg" type="button" id="login"><img src="images/header-footer/person.svg" alt="">Log in / Register</button>
            </div>
        </header>
      `
    );

    main.insertAdjacentHTML(
        "afterend",
        `
    <footer class="footer">
            <div class="footer__container container1">
                <div class="footer__top">
                    <div class="footer__column footer__column_01">
                        <div class="footer__logo"><a href="index.html"><img src="images/header-footer/logo-white.svg" alt="footer-logo"></a></div>
                        <p class="footer__text text_f1">Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts. We provide relevant approaches to online learning, internships and employment in the largest companies in the country.</p>
                        <div class="footer__soc">
                            <a target="blank" href="https://www.facebook.com/" class="footer__soc-link"><img src="images/header-footer/social01.svg" alt="social"></a>
                            <a target="blank" href="https://twitter.com/" class="footer__soc-link"><img src="images/header-footer/social02.svg" alt="social"></a>
                            <a target="blank" href="https://www.youtube.com" class="footer__soc-link"><img src="images/header-footer/social03.svg" alt="social"></a>
                            <a target="blank" href="https://web.telegram.org" class="footer__soc-link"><img src="images/header-footer/social04.svg" alt="social"></a>
                            <a target="blank" href="https://www.instagram.com" class="footer__soc-link"><img src="images/header-footer/social05.svg" alt="social"></a>
                            <a target="blank" href="https://www.linkedin.com" class="footer__soc-link"><img src="images/header-footer/social06.svg" alt="social"></a>
                        </div>
                    </div>
                    <nav class="footer__column footer__column_02">
                        <h4 class="footer__title title_f1">Site Map</h4>
                        <ul class="footer__list">
                            <li><a class="footer__link link_f1" href="./pages/about-us.html">About Us</a></li>
                            <li><a class="footer__link link_f1" href="./pages/courses.html">Courses</a></li>
                            <li><a class="footer__link link_f1" href="./pages/events-list.html">Events</a></li>
                            <li><a class="footer__link link_f1" href="./pages/blog.html">Blog</a></li>
                            <li><a class="footer__link link_f1" href="./pages/contacts.html">Contacts</a></li>
                        </ul>
                    </nav>
                    <div class="footer__column footer__column_03">
                        <h4 class="footer__title title_f1">Courses</h4>
                        <ul class="footer__list">
                            <li><a class="footer__link link_f1" href="./pages/courses.html">Marketing</a></li>
                            <li><a class="footer__link link_f1" href="./pages/courses.html">Management</a></li>
                            <li><a class="footer__link link_f1" href="./pages/courses.html">HR & Recruting</a></li>
                            <li><a class="footer__link link_f1" href="./pages/courses.html">Design</a></li>
                            <li><a class="footer__link link_f1" href="./pages/courses.html">Development</a></li>
                        </ul>
                    </div>
                    <dl class="footer__column footer__column_04">
                        <dt class="footer__title title_f1">Contact Us</dt>
                        <dd class="footer__list">
                            <a href="tel:4055550128" class="footer__link footer__link_desc link_f1"><img src="images/header-footer/phone-black.svg" alt="phone-black">(405) 555-0128</a>
                            <a href="mailto:hello@createx.com" class="footer__link footer__link_desc link_f1"><img src="images/header-footer/email.svg" alt="email">hello@createx.com</a>
                        </dd>
                    </dl>
                    <form action="#" name="user-sign-up" class="footer__column footer__column_05">
                        <h4 class="footer__title title_f1">Sign up to our newsletter</h4>
                        <div class="footer__input">
                            <input type="email" required placeholder="Email address">
                            <button type="submit" class="footer__input-btn"></button>
                        </div>
                        <p class="footer__rule text_f1">*Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.</p>
                    </form>
                </div>
            </div>
            <div class="footer__bottom">
                <div class="footer__bottom-container container1">
                    <p class="footer__copiright text_f1">© All rights reserved. Made with by <img src="images/header-footer/heart.svg" alt="heart"> Createx Studio</p>
                    <button class="footer__bottom-btn title_f1" type="button">GO TO TOP</button>
                </div>
            </div>
        </footer>
    <div class="popup" id="popup">
        <div class="popup__back" id="popup__back">
    <div class="popup__wrapper" id="popup__wrapper">
        <div class="popup__close" id="popup__close">X</div>
        <div class="popup__title">Sign in</div>
        <div class="popup__text">
            Sign in to your account using email and password
            provided during registration.
        </div>
        <form action="#" class="popup__form">
            <p class="popup__name">Email</p>
            <input
                type="text"
                class="popup__email"
                placeholder="Your working email"
            />
            <p class="popup__name">Password</p>
            <input type="password" class="popup__pwd" placeholder="********"/>
            <button class="popup__btn">Sign in</button>
        </form>
    </div>
</div>
</div>
    `
    );
}

const login = document.getElementById("login"),
    popup = document.getElementById("popup"),
    closePopup = document.getElementById("popup__close"),
    popupBack = document.getElementById("popup__back");
(body = document.querySelector("body")),
    (burger = document.querySelector(".header-main__burger")),
    (goTo = document.querySelector(".footer__bottom-btn")),
    (nav = document.querySelector(".header-main__nav"));
let scrollWidth = window.innerWidth - document.body.clientWidth; // Получаем ширину полосы прокрутки
burger.addEventListener("click", () => {
    nav.classList.toggle("header-main__nav_active");
    burger.classList.toggle("header-main__burger_active");
});
goTo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        let: 0,
        behavior: "smooth",
    });
});

window.addEventListener("resize", replaceEl);
replaceEl();
function replaceEl(iWidth) {
    iWidth = window.innerWidth;
    console.log("work");
    const regBtn = document.querySelector(".header-main__reg"),
        header = document.querySelector(".header-main__container"),
        logo = document.querySelector(".header-main__logo");
    if (768 < iWidth && iWidth < 992) {
        nav.before(logo);
        nav.append(regBtn);
    } else if (768 > iWidth) {
        nav.prepend(logo);
        nav.append(regBtn);
    } else if (iWidth > 992) {
        nav.classList.remove("header-main__nav_active");
        burger.classList.remove("header-main__burger_active");
        nav.before(logo);
        header.append(regBtn);
    }
}

login.addEventListener("click", () => {
    popup.classList.add("_active");
    popupBack.classList.add("_active");
    body.style.padding = `0 ${scrollWidth}px 0 0`; // Добавляем паддинг справа в размере ширины полосы прокрутки для всей страницы
    body.classList.add("_lock"); // Блокируем прокрутку страницы при окрытии модального окна

    closePopup.addEventListener("click", () => {
        popup.classList.remove("_active");
    });
});

document.addEventListener("click", (el) => {
    if (el.target === closePopup || el.target === popupBack) {
        body.style.padding = `0`;
        popup.classList.remove("_active");
        popupBack.classList.remove("_active");
        body.classList.remove("_lock");
    }
});

function elementFromHtml(html) {
    /*function for contain html*/
    const template = document.createElement("template");
    template.innerHTML = html.trim();

    return template.content.firstElementChild;
}

//------------------------------------------
// const logo_black =
//     elementFromHtml(`<a href="/"><svg width="130" height="22" viewBox="0 0 130 22" fill="none" xmlns="http://www.w3.org/2000/svg">
// <g clip-path="url(#clip0_51338_1583)">
// <path d="M0 11.0998C0 4.9998 3.3 1.2998 8.7 1.2998C12.8 1.2998 16.1 3.7998 16.7 7.4998C16.8 7.8998 16.5 8.1998 16.1 8.1998H13.5C13.2 8.1998 13 7.9998 12.9 7.6998C12.4 5.7998 10.8 4.5998 8.7 4.5998C5.8 4.5998 4 7.0998 4 11.0998C4 15.0998 5.8 17.5998 8.8 17.5998C10.9 17.5998 12.4 16.4998 13 14.6998C13.1 14.3998 13.3 14.1998 13.6 14.1998H16.2C16.6 14.1998 16.9 14.5998 16.8 14.8998C16.2 18.4998 13 20.8998 8.8 20.8998C3.3 20.8998 0 17.0998 0 11.0998Z" fill="#1E212C"/>
// <path d="M24.2997 20.4001H21.3997C21.0997 20.4001 20.8997 20.2001 20.8997 19.9001V2.60006C20.8997 2.20006 21.2997 1.80006 21.6997 1.80006H28.6997C32.7997 1.80006 35.2997 4.10006 35.2997 7.70006C35.2997 9.80006 34.2997 11.7001 32.5997 12.7001C32.1997 12.9001 32.0997 13.4001 32.2997 13.7001L35.3997 19.6001C35.5997 19.9001 35.2997 20.3001 34.9997 20.3001H31.6997C31.4997 20.3001 31.2997 20.2001 31.1997 20.0001L28.2997 14.0001C28.1997 13.7001 27.8997 13.6001 27.5997 13.6001H25.2997C24.9997 13.6001 24.7997 13.8001 24.7997 14.1001V20.0001C24.8997 20.2001 24.5997 20.4001 24.2997 20.4001ZM24.8997 10.2001C24.8997 10.5001 25.0997 10.7001 25.3997 10.7001H28.3997C30.3997 10.7001 31.4997 9.60006 31.4997 7.80006C31.4997 6.00006 30.2997 4.90006 28.3997 4.90006H25.4997C25.1997 4.90006 24.9997 5.10006 24.9997 5.40006V10.2001H24.8997Z" fill="#1E212C"/>
// <path d="M51.4998 20.4001H40.4998C40.0998 20.4001 39.7998 20.1001 39.7998 19.7001V2.50006C39.7998 2.10006 40.0998 1.80006 40.4998 1.80006H51.4998C51.8998 1.80006 52.1998 2.10006 52.1998 2.50006V4.40006C52.1998 4.80006 51.8998 5.10006 51.4998 5.10006H44.1998C43.8998 5.10006 43.6998 5.30006 43.6998 5.60006V9.00006C43.6998 9.30006 43.8998 9.50006 44.1998 9.50006H50.9998C51.3998 9.50006 51.6998 9.80006 51.6998 10.2001V11.9001C51.6998 12.3001 51.3998 12.6001 50.9998 12.6001H44.1998C43.8998 12.6001 43.6998 12.8001 43.6998 13.1001V16.9001C43.6998 17.2001 43.8998 17.4001 44.1998 17.4001H51.4998C51.8998 17.4001 52.1998 17.7001 52.1998 18.1001V20.0001C52.1998 20.1001 51.8998 20.4001 51.4998 20.4001Z" fill="#1E212C"/>
// <path d="M66.9999 15.9001H61.2999C60.9999 15.9001 60.7999 16.1001 60.6999 16.3001L59.5999 20.0001C59.4999 20.3001 59.2999 20.4001 58.9999 20.4001H56.3999C55.9999 20.4001 55.6999 20.0001 55.7999 19.6001L61.7999 2.20006C61.8999 2.00006 62.0999 1.80006 62.3999 1.80006H66.0999C66.3999 1.80006 66.5999 2.00006 66.6999 2.20006L72.6999 19.6001C72.7999 20.0001 72.4999 20.4001 72.0999 20.4001H69.1999C68.8999 20.4001 68.6999 20.2001 68.5999 20.0001L67.4999 16.3001C67.4999 16.1001 67.1999 15.9001 66.9999 15.9001ZM62.0999 13.0001H66.1999C66.3999 13.0001 66.4999 12.8001 66.4999 12.6001L64.2999 5.60006H64.0999L61.8999 12.6001C61.7999 12.8001 61.8999 13.0001 62.0999 13.0001Z" fill="#1E212C"/>
// <path d="M79.0001 19.7005V5.50045C79.0001 5.20045 78.8001 5.00045 78.5001 5.00045H74.1001C73.7001 5.00045 73.3001 4.70045 73.3001 4.20045V2.50045C73.3001 2.10045 73.6001 1.70045 74.1001 1.70045H87.7001C88.1001 1.70045 88.5001 2.00045 88.5001 2.50045V4.20045C88.5001 4.60045 88.2001 5.00045 87.7001 5.00045H83.3001C83.0001 5.00045 82.8001 5.20045 82.8001 5.50045V19.8004C82.8001 20.2004 82.5001 20.5005 82.1001 20.5005H79.6001C79.3001 20.4004 79.0001 20.1005 79.0001 19.7005Z" fill="#1E212C"/>
// <path d="M103.8 20.4001H92.7999C92.3999 20.4001 92.0999 20.1001 92.0999 19.7001V2.50006C92.0999 2.10006 92.3999 1.80006 92.7999 1.80006H103.8C104.2 1.80006 104.5 2.10006 104.5 2.50006V4.40006C104.5 4.80006 104.2 5.10006 103.8 5.10006H96.4999C96.1999 5.10006 95.9999 5.30006 95.9999 5.60006V9.00006C95.9999 9.30006 96.1999 9.50006 96.4999 9.50006H103.3C103.7 9.50006 104 9.80006 104 10.2001V11.9001C104 12.3001 103.7 12.6001 103.3 12.6001H96.4999C96.1999 12.6001 95.9999 12.8001 95.9999 13.1001V16.9001C95.9999 17.2001 96.1999 17.4001 96.4999 17.4001H103.8C104.2 17.4001 104.5 17.7001 104.5 18.1001V20.0001C104.5 20.1001 104.2 20.4001 103.8 20.4001Z" fill="#1E212C"/>
// <path d="M117.7 9.7L111.5 1.6C111.1 1.2 110.6 1 110.1 1C109.6 1 109.1 1.2 108.7 1.6C108 2.4 108 3.6 108.7 4.4L113.6 11L108.7 17.6C108 18.4 108 19.6 108.7 20.4C109.1 20.8 109.6 21 110.1 21C110.6 21 111.1 20.8 111.5 20.4L117.7 12.3C118.4 11.7 118.4 10.5 117.7 9.7Z" fill="#FF3F3A"/>
// <path d="M120.343 9.7L126.543 1.6C126.943 1.2 127.443 1 127.943 1C128.443 1 128.943 1.2 129.343 1.6C130.043 2.4 130.043 3.6 129.343 4.4L124.443 11L129.343 17.6C130.043 18.4 130.043 19.6 129.343 20.4C128.943 20.8 128.443 21 127.943 21C127.443 21 126.943 20.8 126.543 20.4L120.343 12.3C119.643 11.7 119.643 10.5 120.343 9.7Z" fill="#FF3F3A"/>
// </g>
// <defs>
// <clipPath id="clip0_51338_1583">
// <rect width="130" height="22" fill="white"/>
// </clipPath>
// </defs>
// </svg>
// </a>
// `);

// const logo_white =
//     elementFromHtml(`<a href="/"><svg width="130" height="22" viewBox="0 0 130 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <g clip-path="url(#clip0_51338_2145)">
//   <path d="M0 11.1008C0 5.00078 3.3 1.30078 8.7 1.30078C12.8 1.30078 16.1 3.80078 16.7 7.50078C16.8 7.90078 16.5 8.20078 16.1 8.20078H13.5C13.2 8.20078 13 8.00078 12.9 7.70078C12.4 5.80078 10.8 4.60078 8.7 4.60078C5.8 4.60078 4 7.10078 4 11.1008C4 15.1008 5.8 17.6008 8.8 17.6008C10.9 17.6008 12.4 16.5008 13 14.7008C13.1 14.4008 13.3 14.2008 13.6 14.2008H16.2C16.6 14.2008 16.9 14.6008 16.8 14.9008C16.2 18.5008 13 20.9008 8.8 20.9008C3.3 20.9008 0 17.1008 0 11.1008Z" fill="white"/>
//   <path d="M24.2997 20.401H21.3997C21.0997 20.401 20.8997 20.201 20.8997 19.901V2.60104C20.8997 2.20104 21.2997 1.80104 21.6997 1.80104H28.6997C32.7997 1.80104 35.2997 4.10104 35.2997 7.70104C35.2997 9.80104 34.2997 11.701 32.5997 12.701C32.1997 12.901 32.0997 13.401 32.2997 13.701L35.3997 19.601C35.5997 19.901 35.2997 20.301 34.9997 20.301H31.6997C31.4997 20.301 31.2997 20.201 31.1997 20.001L28.2997 14.001C28.1997 13.701 27.8997 13.601 27.5997 13.601H25.2997C24.9997 13.601 24.7997 13.801 24.7997 14.101V20.001C24.8997 20.201 24.5997 20.401 24.2997 20.401ZM24.8997 10.201C24.8997 10.501 25.0997 10.701 25.3997 10.701H28.3997C30.3997 10.701 31.4997 9.60104 31.4997 7.80104C31.4997 6.00104 30.2997 4.90104 28.3997 4.90104H25.4997C25.1997 4.90104 24.9997 5.10104 24.9997 5.40104V10.201H24.8997Z" fill="white"/>
//   <path d="M51.4998 20.401H40.4998C40.0998 20.401 39.7998 20.101 39.7998 19.701V2.50104C39.7998 2.10104 40.0998 1.80104 40.4998 1.80104H51.4998C51.8998 1.80104 52.1998 2.10104 52.1998 2.50104V4.40104C52.1998 4.80104 51.8998 5.10104 51.4998 5.10104H44.1998C43.8998 5.10104 43.6998 5.30104 43.6998 5.60104V9.00104C43.6998 9.30104 43.8998 9.50104 44.1998 9.50104H50.9998C51.3998 9.50104 51.6998 9.80104 51.6998 10.201V11.901C51.6998 12.301 51.3998 12.601 50.9998 12.601H44.1998C43.8998 12.601 43.6998 12.801 43.6998 13.101V16.901C43.6998 17.201 43.8998 17.401 44.1998 17.401H51.4998C51.8998 17.401 52.1998 17.701 52.1998 18.101V20.001C52.1998 20.101 51.8998 20.401 51.4998 20.401Z" fill="white"/>
//   <path d="M66.9999 15.901H61.2999C60.9999 15.901 60.7999 16.101 60.6999 16.301L59.5999 20.001C59.4999 20.301 59.2999 20.401 58.9999 20.401H56.3999C55.9999 20.401 55.6999 20.001 55.7999 19.601L61.7999 2.20104C61.8999 2.00104 62.0999 1.80104 62.3999 1.80104H66.0999C66.3999 1.80104 66.5999 2.00104 66.6999 2.20104L72.6999 19.601C72.7999 20.001 72.4999 20.401 72.0999 20.401H69.1999C68.8999 20.401 68.6999 20.201 68.5999 20.001L67.4999 16.301C67.4999 16.101 67.1999 15.901 66.9999 15.901ZM62.0999 13.001H66.1999C66.3999 13.001 66.4999 12.801 66.4999 12.601L64.2999 5.60104H64.0999L61.8999 12.601C61.7999 12.801 61.8999 13.001 62.0999 13.001Z" fill="white"/>
//   <path d="M79.0001 19.7014V5.50143C79.0001 5.20143 78.8001 5.00143 78.5001 5.00143H74.1001C73.7001 5.00143 73.3001 4.70143 73.3001 4.20143V2.50143C73.3001 2.10143 73.6001 1.70143 74.1001 1.70143H87.7001C88.1001 1.70143 88.5001 2.00143 88.5001 2.50143V4.20143C88.5001 4.60143 88.2001 5.00143 87.7001 5.00143H83.3001C83.0001 5.00143 82.8001 5.20143 82.8001 5.50143V19.8014C82.8001 20.2014 82.5001 20.5014 82.1001 20.5014H79.6001C79.3001 20.4014 79.0001 20.1014 79.0001 19.7014Z" fill="white"/>
//   <path d="M103.8 20.401H92.7999C92.3999 20.401 92.0999 20.101 92.0999 19.701V2.50104C92.0999 2.10104 92.3999 1.80104 92.7999 1.80104H103.8C104.2 1.80104 104.5 2.10104 104.5 2.50104V4.40104C104.5 4.80104 104.2 5.10104 103.8 5.10104H96.4999C96.1999 5.10104 95.9999 5.30104 95.9999 5.60104V9.00104C95.9999 9.30104 96.1999 9.50104 96.4999 9.50104H103.3C103.7 9.50104 104 9.80104 104 10.201V11.901C104 12.301 103.7 12.601 103.3 12.601H96.4999C96.1999 12.601 95.9999 12.801 95.9999 13.101V16.901C95.9999 17.201 96.1999 17.401 96.4999 17.401H103.8C104.2 17.401 104.5 17.701 104.5 18.101V20.001C104.5 20.101 104.2 20.401 103.8 20.401Z" fill="white"/>
//   <path d="M117.7 9.7L111.5 1.6C111.1 1.2 110.6 1 110.1 1C109.6 1 109.1 1.2 108.7 1.6C108 2.4 108 3.6 108.7 4.4L113.6 11L108.7 17.6C108 18.4 108 19.6 108.7 20.4C109.1 20.8 109.6 21 110.1 21C110.6 21 111.1 20.8 111.5 20.4L117.7 12.3C118.4 11.7 118.4 10.5 117.7 9.7Z" fill="#FF3F3A"/>
//   <path d="M120.343 9.7L126.543 1.6C126.943 1.2 127.443 1 127.943 1C128.443 1 128.943 1.2 129.343 1.6C130.043 2.4 130.043 3.6 129.343 4.4L124.443 11L129.343 17.6C130.043 18.4 130.043 19.6 129.343 20.4C128.943 20.8 128.443 21 127.943 21C127.443 21 126.943 20.8 126.543 20.4L120.343 12.3C119.643 11.7 119.643 10.5 120.343 9.7Z" fill="#FF3F3A"/>
//   </g>
//   <defs>
//   <clipPath id="clip0_51338_2145">
//   <rect width="130" height="22" fill="white"/>
//   </clipPath>
//   </defs>
//   </svg>
//   </a>
// `);

// const div_logo_header = document.querySelector(".logo-header");
// const div_logo_footer = document.querySelector(".logo-footer");

// div_logo_header.appendChild(logo_black);
// div_logo_footer.appendChild(logo_white);

// //------------------------------------------

// const person =
//     elementFromHtml(`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00019 1.70866C7.38936 1.70866 6.08353 3.0145 6.08353 4.62533C6.08353 6.23616 7.38936 7.54199 9.00019 7.54199C10.611 7.54199 11.9169 6.23616 11.9169 4.62533C11.9169 3.0145 10.611 1.70866 9.00019 1.70866ZM4.41686 4.62533C4.41686 2.09402 6.46889 0.0419922 9.00019 0.0419922C11.5315 0.0419922 13.5835 2.09402 13.5835 4.62533C13.5835 7.15663 11.5315 9.20866 9.00019 9.20866C6.46889 9.20866 4.41686 7.15663 4.41686 4.62533Z" fill="#424551"/>
//   <path fill-rule="evenodd" clip-rule="evenodd" d="M4.08691 11.7087C3.50914 11.7087 3.05755 11.99 2.87424 12.3942C2.62053 12.9536 2.39078 13.6196 2.33656 14.2513C2.31233 14.5337 2.43006 14.7418 2.5923 14.8426C3.44993 15.3753 5.43719 16.292 9.00019 16.292C12.5632 16.292 14.5505 15.3753 15.4081 14.8426C15.5703 14.7418 15.6881 14.5337 15.6638 14.2513C15.6096 13.6196 15.3799 12.9536 15.1261 12.3942C14.9428 11.99 14.4912 11.7087 13.9135 11.7087H4.08691ZM1.35639 11.7058C1.86301 10.5887 2.99428 10.042 4.08691 10.042H13.9135C15.0061 10.042 16.1374 10.5887 16.644 11.7058C16.935 12.3474 17.2472 13.2099 17.3244 14.1088C17.3946 14.9273 17.0544 15.7819 16.2876 16.2583C15.1596 16.959 12.8665 17.9587 9.00019 17.9587C5.13386 17.9587 2.84078 16.959 1.71283 16.2583C0.945947 15.7819 0.605747 14.9273 0.676001 14.1088C0.753149 13.2099 1.0654 12.3474 1.35639 11.7058Z" fill="#424551"/>
//   </svg>

// `);

// const div_person = document.querySelector(".person");

// div_person.appendChild(person);

// //------------------------------------------

// document.querySelector(".burger").addEventListener("click", function () {
//     this.classList.toggle("active");
//     document.querySelector(".nav").classList.toggle("open");
// });

//------------------------------------------

// const heart_icon =
//     elementFromHtml(`<svg class="heart" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99974 13.2715C4.9337 11.5252 3.22366 9.78955 2.39675 8.28361C1.55041 6.74228 1.62425 5.4441 2.09389 4.52273C3.05921 2.62892 5.80427 2.02333 7.47678 4.13865L7.9997 4.80001L8.52266 4.13868C10.1955 2.02327 12.9407 2.62896 13.906 4.52273C14.3756 5.44409 14.4494 6.74226 13.603 8.28359C12.776 9.78954 11.0659 11.5252 7.99974 13.2715ZM7.99977 2.73726C5.64696 0.501518 2.17604 1.42555 0.905976 3.91723C0.208948 5.2847 0.199427 7.05212 1.22802 8.92536C2.24749 10.782 4.28009 12.7417 7.67724 14.6194L7.99973 14.7976L8.32222 14.6194C11.7195 12.7417 13.7522 10.782 14.7717 8.92537C15.8004 7.05214 15.7909 5.28472 15.0939 3.91723C13.8238 1.4255 10.3528 0.501552 7.99977 2.73726Z" fill="#FF3F3A"/>
//   </svg>
// `);

// const span_heart = document.querySelector(".span-heart");

// span_heart.appendChild(heart_icon);

// let heart = document.querySelector(".heart");

// heart.addEventListener("click", () => {
//     heart.classList.toggle("heart-animation");
// });

//------------------------------------------

// const email_icon =
//     elementFromHtml(`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1668 11.9993V4.66602C15.1668 3.56145 14.2714 2.66602 13.1668 2.66602L2.83349 2.66603C1.72893 2.66603 0.833496 3.56146 0.833496 4.66603V11.9993C0.833496 13.1039 1.72893 13.9993 2.8335 13.9993L13.1668 13.9993C14.2714 13.9993 15.1668 13.1039 15.1668 11.9993ZM13.8335 6.17232V11.9993C13.8335 12.3675 13.535 12.666 13.1668 12.666L2.8335 12.666C2.46531 12.666 2.16683 12.3675 2.16683 11.9993L2.16683 6.17223L6.87561 9.3742C7.55433 9.83573 8.44613 9.83573 9.12485 9.3742L13.8335 6.17232ZM13.8259 4.56509C13.7773 4.24479 13.5007 3.99935 13.1668 3.99935L2.83349 3.99936C2.49965 3.99936 2.22311 4.24476 2.17443 4.56501L7.62535 8.27164C7.8516 8.42548 8.14886 8.42548 8.3751 8.27164L13.8259 4.56509Z" fill="white"/>
// </svg>
// `);

// const div_email_icon = document.querySelector(".email-icon");

// div_email_icon.appendChild(email_icon);

//------------------------------------------

// const phone_black_icon =
//     elementFromHtml(`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <path fill-rule="evenodd" clip-rule="evenodd" d="M5.66683 1.94857C5.11454 1.94857 4.66683 2.39628 4.66683 2.94857V13.0527C4.66683 13.605 5.11454 14.0527 5.66683 14.0527H10.3335C10.8858 14.0527 11.3335 13.605 11.3335 13.0527V2.94857C11.3335 2.39628 10.8858 1.94857 10.3335 1.94857H10.2779L10.1155 2.3382C10.012 2.58661 9.76928 2.74842 9.50016 2.74842H6.50016C6.23105 2.74842 5.98832 2.58661 5.8848 2.3382L5.72242 1.94857H5.66683ZM3.3335 2.94857C3.3335 1.6599 4.37817 0.615234 5.66683 0.615234H10.3335C11.6222 0.615234 12.6668 1.6599 12.6668 2.94857V13.0527C12.6668 14.3414 11.6222 15.3861 10.3335 15.3861H5.66683C4.37816 15.3861 3.3335 14.3414 3.3335 13.0527V2.94857Z" fill="white"/>
//   </svg>
// `);

// const div_phone_icon = document.querySelector(".phone-icon");

// div_phone_icon.appendChild(phone_black_icon);

//------------------------------------------

// const right_arrow_icon =
//     elementFromHtml(`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <path fill-rule="evenodd" clip-rule="evenodd" d="M9.86193 4.52925C10.1223 4.2689 10.5444 4.2689 10.8047 4.52925L13.8047 7.52925C14.0651 7.7896 14.0651 8.21171 13.8047 8.47206L10.8047 11.4721C10.5444 11.7324 10.1223 11.7324 9.86193 11.4721C9.60158 11.2117 9.60158 10.7896 9.86193 10.5292L11.7239 8.66732H2.66667C2.29848 8.66732 2 8.36884 2 8.00065C2 7.63246 2.29848 7.33398 2.66667 7.33398H11.7239L9.86193 5.47206C9.60158 5.21171 9.60158 4.7896 9.86193 4.52925Z" fill="white"/>
//   </svg>

// `);

// const span_right_arrow = document.querySelector(".span-right-arrow");

// span_right_arrow.appendChild(right_arrow_icon);

// const facebook_icon = elementFromHtml(`
// <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M11.5628 0.00457747L8.78558 0C5.66542 0 3.64903 2.12509 3.64903 5.41423V7.91055H0.85662C0.615322 7.91055 0.419922 8.1115 0.419922 8.35937V11.9763C0.419922 12.2241 0.615545 12.4249 0.85662 12.4249H3.64903V21.5514C3.64903 21.7993 3.84443 22 4.08573 22H7.72904C7.97033 22 8.16573 21.799 8.16573 21.5514V12.4249H11.4307C11.672 12.4249 11.8674 12.2241 11.8674 11.9763L11.8688 8.35937C11.8688 8.24036 11.8226 8.12638 11.7409 8.04215C11.6591 7.95793 11.5477 7.91055 11.4318 7.91055H8.16573V5.79439C8.16573 4.77728 8.40168 4.26094 9.6915 4.26094L11.5624 4.26025C11.8035 4.26025 11.9989 4.0593 11.9989 3.81166V0.453169C11.9989 0.205757 11.8037 0.00503522 11.5628 0.00457747Z" fill="#787A80"/>
// </svg>
// `);

// const twitter_icon = elementFromHtml(`
// <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M21.5 2.77233C20.7271 3.10027 19.8978 3.32267 19.0264 3.42196C19.9161 2.91181 20.5972 2.10263 20.92 1.1414C20.0854 1.61383 19.1642 1.95688 18.1826 2.14285C17.3966 1.33994 16.2785 0.839844 15.0384 0.839844C12.6593 0.839844 10.7303 2.68691 10.7303 4.9637C10.7303 5.2866 10.7683 5.60199 10.8418 5.90357C7.26201 5.73141 4.08768 4.08917 1.96314 1.59372C1.59176 2.20189 1.38049 2.91053 1.38049 3.66697C1.38049 5.09814 2.14161 6.36093 3.2964 7.09973C2.5904 7.07713 1.92639 6.89116 1.34508 6.58205V6.63357C1.34508 8.63141 2.83056 10.2988 4.80024 10.6783C4.43936 10.7713 4.05882 10.8228 3.66514 10.8228C3.38696 10.8228 3.11794 10.7964 2.85417 10.7461C3.40267 12.3859 4.99315 13.5783 6.87756 13.611C5.40388 14.7167 3.54573 15.3739 1.52749 15.3739C1.17976 15.3739 0.837236 15.3537 0.5 15.3173C2.40671 16.4896 4.67036 17.1732 7.10327 17.1732C15.028 17.1732 19.3597 10.8881 19.3597 5.43741L19.3453 4.90341C20.1917 4.32537 20.9239 3.59912 21.5 2.77233Z" fill="#787A80"/>
// </svg>
// `);

// const youtube_icon = elementFromHtml(`
// <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-youtube"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
// `);

// const telegram_icon = elementFromHtml(`
// <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M8.63262 13.1813L8.2687 18.7653C8.78938 18.7653 9.01488 18.5213 9.2853 18.2283L11.7264 15.6833L16.7847 19.7243C17.7124 20.2883 18.366 19.9913 18.6163 18.7933L21.9365 1.8214L21.9374 1.8204C22.2317 0.324404 21.4415 -0.260593 20.5377 0.106405L1.02135 8.25736C-0.310594 8.82136 -0.290427 9.63136 0.794932 9.99835L5.78447 11.6913L17.3742 3.78039C17.9196 3.38639 18.4155 3.60439 18.0076 3.99839L8.63262 13.1813Z" fill="#787A80"/>
// </svg>

// `);

// const instagram_icon = elementFromHtml(`
// <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M19.9804 5.88005C19.9336 4.81738 19.7617 4.0868 19.5156 3.45374C19.2616 2.78176 18.8709 2.18014 18.359 1.68002C17.8589 1.1721 17.2533 0.777435 16.5891 0.527447C15.9524 0.281274 15.2256 0.109427 14.163 0.0625732C13.0923 0.0117516 12.7525 0 10.0371 0C7.32172 0 6.98185 0.0117516 5.9152 0.0586052C4.85253 0.105459 4.12195 0.277459 3.48904 0.523479C2.81692 0.777435 2.2153 1.16814 1.71517 1.68002C1.20726 2.18014 0.812742 2.78573 0.562602 3.44992C0.31643 4.0868 0.144583 4.81341 0.0977294 5.87609C0.0469078 6.9467 0.0351562 7.28658 0.0351562 10.002C0.0351562 12.7173 0.0469078 13.0572 0.0937614 14.1239C0.140615 15.1865 0.312615 15.9171 0.558787 16.5502C0.812742 17.2221 1.20726 17.8238 1.71517 18.3239C2.2153 18.8318 2.82088 19.2265 3.48507 19.4765C4.12195 19.7226 4.84856 19.8945 5.91139 19.9413C6.97788 19.9883 7.31791 19.9999 10.0333 19.9999C12.7486 19.9999 13.0885 19.9883 14.1552 19.9413C15.2178 19.8945 15.9484 19.7226 16.5813 19.4765C17.9254 18.9568 18.9881 17.8941 19.5078 16.5502C19.7538 15.9133 19.9258 15.1865 19.9726 14.1239C20.0195 13.0572 20.0312 12.7173 20.0312 10.002C20.0312 7.28658 20.0273 6.9467 19.9804 5.88005ZM18.1794 14.0457C18.1364 15.0225 17.9723 15.5499 17.8355 15.9015C17.4995 16.7728 16.808 17.4643 15.9367 17.8004C15.585 17.9372 15.0538 18.1012 14.0808 18.1441C13.026 18.1911 12.7096 18.2027 10.0411 18.2027C7.37255 18.2027 7.0522 18.1911 6.00113 18.1441C5.02437 18.1012 4.49693 17.9372 4.1453 17.8004C3.71171 17.6402 3.31704 17.3862 2.9967 17.0541C2.6646 16.7298 2.41065 16.3391 2.2504 15.9055C2.11365 15.5539 1.94959 15.0225 1.9067 14.0497C1.8597 12.9948 1.8481 12.6783 1.8481 10.0097C1.8481 7.34122 1.8597 7.02087 1.9067 5.96995C1.94959 4.99319 2.11365 4.46575 2.2504 4.11412C2.41065 3.68038 2.6646 3.28586 3.00067 2.96536C3.32483 2.63327 3.71553 2.37931 4.14927 2.21921C4.5009 2.08247 5.03231 1.9184 6.00509 1.87537C7.05999 1.82851 7.37652 1.81676 10.0449 1.81676C12.7174 1.81676 13.0337 1.82851 14.0848 1.87537C15.0616 1.9184 15.589 2.08247 15.9406 2.21921C16.3742 2.37931 16.7689 2.63327 17.0892 2.96536C17.4213 3.28967 17.6753 3.68038 17.8355 4.11412C17.9723 4.46575 18.1364 4.99701 18.1794 5.96995C18.2262 7.02484 18.238 7.34122 18.238 10.0097C18.238 12.6783 18.2262 12.9908 18.1794 14.0457Z" fill="#787A80"/>
// <path d="M10.0371 4.86423C7.20069 4.86423 4.89937 7.1654 4.89937 10.002C4.89937 12.8385 7.20069 15.1397 10.0371 15.1397C12.8736 15.1397 15.1748 12.8385 15.1748 10.002C15.1748 7.1654 12.8736 4.86423 10.0371 4.86423ZM10.0371 13.3347C8.19698 13.3347 6.70438 11.8422 6.70438 10.002C6.70438 8.16169 8.19698 6.66924 10.0371 6.66924C11.8774 6.66924 13.3698 8.16169 13.3698 10.002C13.3698 11.8422 11.8774 13.3347 10.0371 13.3347Z" fill="#787A80"/>
// <path d="M16.5776 4.6611C16.5776 5.32346 16.0405 5.86053 15.378 5.86053C14.7156 5.86053 14.1785 5.32346 14.1785 4.6611C14.1785 3.99858 14.7156 3.46167 15.378 3.46167C16.0405 3.46167 16.5776 3.99858 16.5776 4.6611Z" fill="#787A80"/>
// </svg>
// `);

// const in_icon = elementFromHtml(`
// <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M19.995 20L20 19.9992V12.6642C20 9.07583 19.2275 6.31167 15.0325 6.31167C13.0158 6.31167 11.6625 7.41833 11.11 8.4675H11.0517V6.64667H7.07416V19.9992H11.2158V13.3875C11.2158 11.6467 11.5458 9.96334 13.7017 9.96334C15.8258 9.96334 15.8575 11.95 15.8575 13.4992V20H19.995Z" fill="#787A80"/>
// <path d="M0.329995 6.6475H4.47666V20H0.329995V6.6475Z" fill="#787A80"/>
// <path d="M2.40167 0C1.07583 0 0 1.07583 0 2.40167C0 3.7275 1.07583 4.82583 2.40167 4.82583C3.7275 4.82583 4.80333 3.7275 4.80333 2.40167C4.8025 1.07583 3.72667 0 2.40167 0Z" fill="#787A80"/>
// </svg>
// `);

// let list_social_media_icons = document.querySelector(
//     ".list-social-media-icons "
// );

// list_social_media_icons.appendChild(facebook_icon);
// list_social_media_icons.appendChild(twitter_icon);
// list_social_media_icons.appendChild(youtube_icon);
// list_social_media_icons.appendChild(telegram_icon);
// list_social_media_icons.appendChild(instagram_icon);
// list_social_media_icons.appendChild(in_icon);
