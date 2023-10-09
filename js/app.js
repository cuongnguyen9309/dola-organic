const saleSwiper = new Swiper('.sale-swiper', {
    direction: 'horizontal',
    slidesPerView: 5,
    spaceBetween: 15,
    loop: false,
    navigation: {
        nextEl: '.sale-swiper-next',
        prevEl: '.sale-swiper-prev',
    }
})

const prodcutSwiper = new Swiper('.vegetable .product-swiper', {
    direction: 'horizontal',
    slidesPerView: 5,
    loop: false,
    navigation: {
        nextEl: '.vegetable-swiper-next',
        prevEl: '.vegetable-swiper-prev',
    }
})