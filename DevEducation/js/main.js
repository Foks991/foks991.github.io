/*---------Scroll to anchor--------*/
$("#menu").on("click","a", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href');
    let top = $(id).offset().top;
    $('body,html').animate({scrollTop: top - 80}, 1500);
});

/*---------Contacts--------*/
document.addEventListener("DOMContentLoaded", () => {
  let contactsButtons = document.getElementsByClassName("contacts_buttons");
  let citiesDivs = document.getElementsByClassName("address");

  for(let i = 0; i < contactsButtons.length; i++){
    contactsButtons[i].addEventListener("click", function () {
      if(this.classList.contains("activeButton")){
        return;
      }else {
        for (let j = 0; j < contactsButtons.length; j++){
          contactsButtons[j].classList.remove("activeButton");
          citiesDivs[j].style.display = "none";
        }
        this.classList.add("activeButton");
        citiesDivs[i].style.display = "block";
      }
    })
  }
});

/*---------SLIDER SLICK--------*/
$('.sliderFor').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  infinite: true,
  asNavFor: '.sliderNav'
});
$('.sliderNav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.sliderFor',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  infinite: true,
  arrows: true
});
/*-------Slider REVIEWS------*/

$("[data-slider]").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false
});
