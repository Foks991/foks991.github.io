$(document).ready(function(){
/*Три типа анимации анимированого облака тегов*/
/*============================================*/					
	$(function(){
		$("#tag-cloud").tagCloud();
		$("#tag-cloud1").tagCloud({"direction":"horizontal", "easein":"easeOutBounce", "speed":2000});
		$("#tag-cloud2").tagCloud({"direction":"vertical", "easein":"easeOutBack", "speed":2000});
	});
/*============================================*/
						
/*Функции для формы. (Одинаковая форма и одинаковая анимация для всех кнопок)*/
/*====================================================*/					
/*Клик по кнопке - всплывающая форма*/	
	$("button").click(function(){
		$("#myForm").animate({right: '0'});
	});
/*Клик по изображению соц. сети - всплывающая форма*/		
	$("div.sn img").click(function(){
		$("#myForm").animate({right: '0'});
	});
/*Клик по изображению callback - всплывающая форма*/	
	$(".callback").click(function(){
		$("#myForm").animate({right: '0'});
	});
/*Закрытие формы*/	
	$("#forma").click(function(){
		$("#myForm").animate({right: '-330px'});
	});
/*====================================================*/

/*Плавный скролл к якорю по клику на елемент меню*/
/*===============================================*/
/*Отзывчивое меню*/
	$(".nav-wrap").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
/*Анимированое облако тегов(плавный скролл не работает)*/		
	$("#cloud").on("click","li", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
/*===============================================*/	
});

/*Responsive Menu*/	
/*===============*/	
function myFunction() {
	var x = document.getElementById("myTopnav");
	var navHeight = (x.offsetHeight)*7;
	x.style.height = navHeight + "px";
	x.style.transition = "height 1s";
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.style.transition = "none";
		x.className = "topnav";
		x.style.height = "54px";
	}
}
/*===============*/
/*Скролл вверх страницы*/	
/*=====================*/		
function up() {
    var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
   if(top > 0) {
    window.scrollBy(0,((top+100)/-25));
    t = setTimeout('up()',20);
   } else clearTimeout(t);
   return false;
  }
/*=====================*/




