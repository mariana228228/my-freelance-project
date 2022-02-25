
// Слайдер
const prev= document.getElementById('btn-prev')
     next= document.getElementById('btn-next')
     slides = document.querySelectorAll('.slide')
     dots = document.querySelectorAll('.dot')


let index = 0;

const activeSlide = n =>{
    for(slide of slides){
        slide.classList.remove('active')
    }
    slides[n].classList.add('active')
}
const activeDot = n =>{
    for(dot of dots){
        dot.classList.remove('active')
    }
    dots[n].classList.add('active')
}


const prepareCurrentSlide = ind =>{
    activeSlide(ind)
    activeDot(ind)
}


const nextSlide = () =>{
    if(index == slides.length - 1){
        index = 0;
        prepareCurrentSlide(index)



    }else{
        index++
        prepareCurrentSlide(index)


    }
}
const prevSlide = () =>{
    if(index == 0){
        index == slides.length - 1
        prepareCurrentSlide(index)



    }else{
        index--
        prepareCurrentSlide(index)

    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot
        prepareCurrentSlide(index)


    })
})


prev.addEventListener('click', prevSlide)

next.addEventListener('click', nextSlide)


setInterval(nextSlide, 3500)



let centerBlock = document.getElementById('center-block')

window.addEventListener('scroll',()=>{
    let currentMargin = window.scrollY /5
    leftSlide.style.marginLeft = `${currentMargin}px`
    centerBlock.style.marginRight =  `${currentMargin}px`
})
