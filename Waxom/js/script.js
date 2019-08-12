$(document).ready(function(){
 
$('.grid-container').masonry({
// указываем элемент-контейнер в котором расположены блоки для динамической верстки
	itemSelector: '.item',
// указываем класс элемента являющегося блоком в нашей сетке
    singleMode: false,
// true - если у вас все блоки одинаковой ширины
	isResizable: true,
// перестраивает блоки при изменении размеров окна
	isAnimated: true,
	isFitWidth: true,
// анимируем перестроение блоков
    animationOptions:{ 
	    queue: false, 
	    duration: 500 
	}
}); 
 
	$(".service1").mouseover(function(){
		var img = document.getElementById("1");
		img.setAttribute("src", "images/services-icons/icon1-1.png");
		var img1 = document.getElementById("1-1");
		img1.setAttribute("src", "images/services-icons/line1.png");
	});
	$(".service1").mouseout(function(){
		var img = document.getElementById("1");
		img.setAttribute("src", "images/services-icons/icon1.png");
		var img1 = document.getElementById("1-1");
		img1.setAttribute("src","images/services-icons/line.png");
	});
	$(".service2").mouseover(function(){
		var img = document.getElementById("2");
		img.setAttribute("src", "images/services-icons/icon2-1.png");
		var img1 = document.getElementById("2-2");
		img1.setAttribute("src","images/services-icons/line1.png");
	});
	$(".service2").mouseout(function(){
		var img = document.getElementById("2");
		img.setAttribute("src", "images/services-icons/icon2.png");
		var img1 = document.getElementById("2-2");
		img1.setAttribute("src","images/services-icons/line.png");
	});
	$(".service3").mouseover(function(){
		var img = document.getElementById("3");
		img.setAttribute("src", "images/services-icons/icon3-1.png");
		var img1 = document.getElementById("3-3");
		img1.setAttribute("src","images/services-icons/line1.png");
	});
	$(".service3").mouseout(function(){
		var img = document.getElementById("3");
		img.setAttribute("src", "images/services-icons/icon3.png");
		var img1 = document.getElementById("3-3");
		img1.setAttribute("src","images/services-icons/line.png");
	});
	$(".service4").mouseover(function(){
		var img = document.getElementById("4");
		img.setAttribute("src", "images/services-icons/icon4-1.png");
		var img1 = document.getElementById("4-4");
		img1.setAttribute("src","images/services-icons/line1.png");
	});
	$(".service4").mouseout(function(){
		var img = document.getElementById("4");
		img.setAttribute("src", "images/services-icons/icon4.png");
		var img1 = document.getElementById("4-4");
		img1.setAttribute("src","images/services-icons/line.png");
	});

	$("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
	
	
	$('.mainmenubtn').on('click', function(){
		$('.dropdown-child').toggleClass("active1");
	});
    $('.menu-btn').on('click', function(){
		$('.dropdown-child').toggleClass("active1");
	});
	
});     


    