// START MAIN SECOND NAV 

const openBtn = document.querySelector('.main-second-nav__open-btn');
const closeBtn = document.querySelector('.main-second-nav__close-btn');
const menuItems = document.querySelectorAll('.main-second-nav__item');



for (i = 0; i < 19; i++) {
    if (i > 4)
        menuItems[i].style.display = 'none'
    console.log(i);
}


openBtn.addEventListener('click', function () {
    for (i = 0; i < 20; i++) {
        menuItems[i].style.display = 'block';
        openBtn.style.display = 'none';
        closeBtn.style.display = 'flex';
    }

})

closeBtn.addEventListener('click', function () {
    for (i = 0; i < 20; i++) {
        if (i > 4)
            menuItems[i].style.display = 'none';
        openBtn.style.display = 'flex';
        closeBtn.style.display = 'none';
    }

})



// CONTENT LEFT DROPDOWNS 
let dropdownItem = document.querySelectorAll('.main-content-left__item');
dropdownItem.forEach(function (item) {
    let btn = item.querySelector('.main-content-left__btn');
    let dropdownMenu = item.querySelector('.main-content-left__dropdown');
    btn.addEventListener('click', function () {
        dropdownMenu.classList.toggle('main_content_left__dropdown_show');
        this.classList.toggle('main_content_left__btn_active');
    })
})


// CONTENT RIGTH HEADER DROPDOWN 



const dropdownItems = document.querySelectorAll(".main-content-right__header-item");

dropdownItems.forEach(function (item) {
    let btn = item.querySelector('.main-content-right__header-dropdown-btn');
    let dropdown = item.querySelector('.main-content-right__header-dropdown');
    let btns = dropdown.querySelectorAll('button');


    btn.addEventListener("click", function () {


        dropdownItems.forEach(function (itemmm) {
            let itemDropdown = itemmm.querySelector('.main-content-right__header-dropdown');
            itemDropdown.classList.remove("main_content_right__header_dropdown-show");
        })
        dropdown.classList.toggle("main_content_right__header_dropdown-show");


    });

    btns.forEach(function (item) {
        item.addEventListener('click', function () {
            btn.textContent = item.textContent;
            dropdown.classList.remove("main_content_right__header_dropdown-show");
            btns.forEach(function (itemm) {
                itemm.classList.remove('main-content-right__header-dropdown-active');
            })
            item.classList.add('main-content-right__header-dropdown-active');
        })
    })
});



const productItem = document.querySelectorAll('.main-content-right-products__item');

productItem.forEach(function (item) {
    let header = item.querySelector('header');
    let btns = header.querySelectorAll('button');
    btns.forEach(function (itemm) {
        itemm.addEventListener('click', function () {
            itemm.classList.toggle('active');
        })
    })
})


// ITEM CARD COLOR BUTTONS 
let colorBtnsWrapper = document.querySelectorAll('.item-colors');
colorBtnsWrapper.forEach(function (index) {
    let colorBtns = index.querySelectorAll('button');
    colorBtns.forEach(function (item) {
        item.addEventListener('click', function () {
            colorBtns.forEach(function (itemm) {
                itemm.classList.remove('item-colors-active')
            })
            item.classList.toggle('item-colors-active');
        })
    })
})



// PRODUCTS GRID VIEWS 
let productListBtns = document.querySelector('.main-content-right__header-btns');
let productListBtn = productListBtns.querySelectorAll('button');
let productList = document.querySelector('.main-content-right-products');
let productViewBtn1 = document.querySelector('.main-content-right__header-btns-btn-1');
let productViewBtn2 = document.querySelector('.main-content-right__header-btns-btn-2');
productViewBtn1.addEventListener('click', function () {
    productList.classList.remove('main-content-right-products-grid-view');
    productList.classList.add('main-content-right-products-second-grid-view');
    productViewBtn2.classList.remove('main-content-right__header-btns-btn-active');
    this.classList.add('main-content-right__header-btns-btn-active');

})
productViewBtn2.addEventListener('click', function () {
    productList.classList.remove('main-content-right-products-second-grid-view');
    productList.classList.add('main-content-right-products-grid-view');
    productViewBtn1.classList.remove('main-content-right__header-btns-btn-active');
    this.classList.add('main-content-right__header-btns-btn-active');

})

// productListBtn.forEach(item) {
//     item.classList.remove('main-content-right__header-btns-btn-active')
// }
// productViewBtn2.classList.add('main-content-right__header-btns-btn-active');



// START CALL POPUP 
let callPopupOpenBtn = document.querySelector('.call-icon__wrapper');
let callPopup = document.querySelector('.call-popup');
let callPopupHeader = callPopup.querySelector('header');
callPopupCloseBtn = callPopupHeader.querySelector("button");
callPopupOpenBtn.addEventListener('click', function () {
    callPopup.classList.add('call-popup__show');
})
callPopupCloseBtn.addEventListener('click', function () {
    callPopup.classList.remove('call-popup__show');
})


// popup sign in 

let signBtn = document.querySelector('.site__header-log');
let signInPopup = document.querySelector('.sign-in-popup');
let signCloseBtn = signInPopup.querySelector('.close-btn');
signBtn.addEventListener('click', function () {
    signInPopup.classList.add('sign-in-popup-show');
})
signCloseBtn.addEventListener('click', function () {
    signInPopup.classList.remove('sign-in-popup-show');
})
let btnWrapper = document.querySelector('.sign-in-popup__sign-in');
{
    btnWrapperHeader = btnWrapper.querySelector('header');
    btn = btnWrapperHeader.querySelectorAll('button');
    emailContent = document.querySelector('.sign-in-popup__sign-in-content-email');
    socialsContent = document.querySelector('.sign-in-popup__sign-in-socials');
    btn[0].addEventListener('click', function () {
        btn[0].classList.remove('btn-active');
        btn[1].classList.add('btn-active');
        emailContent.style.display = 'flex';
        socialsContent.style.display = 'none'
    })
    btn[1].addEventListener('click', function () {
        btn[1].classList.remove('btn-active');
        btn[1].style.color = "#333"
        btn[1].style.border = 'none';
        btn[0].classList.add('btn-active');
        emailContent.style.display = 'none';
        socialsContent.style.display = 'flex'
    })
}


let signToggleBtn = document.querySelector('.sign__btn');
let signSignInContent = document.querySelector('.sign-in-popup__sign-in');
let signSignUpContent = document.querySelector('.sign-in-popup__sign-up');
let signTitle = document.querySelector('.sign__title');
signToggleBtn.addEventListener('click', function () {
    signSignInContent.classList.toggle('popup-sign-show');
    signSignUpContent.classList.toggle('popup-sign-show');

    if (this.textContent == 'Регистрация') {
        this.textContent = 'Вход';
        signTitle.textContent = 'Регистрация';
    }
    else if (this.textContent == 'Вход') {
        this.textContent = 'Регистрация';
        signTitle.textContent = 'Вход';
    }
})