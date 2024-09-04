const animItems= document.querySelectorAll('._anim-items');
if(animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for(let index=0; index < animItems.length; index++){
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;//повертає висоту елемента в пікселях
            const animItemOffset = offset(animItem).top;
            const k = 4;//коэ-нт регул. момент старта анимации

            let animItemPoint = window.innerHeight - animItemHeight / k;//момент старта анимации; window.innerHeight-высота окна браузера
            //если высота обьекта больше высоты браузера
            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / k;
            }

            if(scrollY > (animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemPoint)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')){
                    animItem.classList.remove('_active');//нужно для повторной анимации
                } 
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect(),//возвращает координаты в контексте окна
        scrollLeft = window.scrollX || document.documentElement.scrollLeft,//scrollX-Возвращает число пикселей, на которое документ пролистали в данный момент по горизонтали.|| Element.scrollLeft получает или задает количество пикселей, на которое прокручивается содержимое элемента от его левого края
        scrollTop = window.scrollY || document.documentElement.scrollTop;//scrollY-Возвращает число пикселей, на которое документ пролистали в данный момент по вертикали.|| Element.scrollTop получает или задает количество пикселей, на которое прокручивается содержимое элемента от его верхнего края.
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    setTimeout(() => {
        animOnScroll();
    }, 300)
    
}