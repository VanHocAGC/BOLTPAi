$(document).ready(function(){
    $('#slick-slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:$('#news-prev'),
        nextArrow:$('#news-next'),
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true
              }
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
              }
            },
          ]
    })
})

const button = document.querySelector('.mobile-button')
const aboutp = document.querySelectorAll('.about-item p')
button.addEventListener('click', () =>{
    aboutp.forEach(element => {
        if(element.classList.contains('disable')){
            element.classList.remove('disable')
        }else{
            element.classList.add('disable')
        }
    });
})
