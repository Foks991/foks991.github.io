$(document).ready(function(){
//Masonry 
$('.masonry').masonry({
	itemSelector: '.item',
    singleMode: false,
	isResizable: true,
	isAnimated: true,
	isFitWidth: true,
    animationOptions:{ 
	    queue: false, 
	    duration: 500 
	}
}); 
//Hover effect second block 
function newStr(str){
	let length = str.length;
	let start = str.slice(0,length - 4);
	let end = str.substr(-4, 4);
	let newStr = start + "-1" + end
	return newStr;
}

function newStr1(str){
	let length = str.length;
	let start = str.slice(0,length - 6);
	let end = str.substr(-4, 4);
	let newStr = start + end
	return newStr;
}

$(".service").on("mouseover", function () {
	const line = "images/services-icons/line1.png";
	let img = $(this).find("img");
	img[0].setAttribute("src", newStr(img[0].getAttribute('src')));
	img[1].setAttribute("src", line);
});

$(".service").on("mouseout", function () {
	const line1 = "images/services-icons/line.png";
	let img = $(this).find("img");
	img[0].setAttribute("src", newStr1(img[0].getAttribute('src')));
	img[1].setAttribute("src", line1);
});

//Scroll to anchor
$("#menu, #menu1").on("click","a", function (event) {
       event.preventDefault();
       var id  = $(this).attr('href');
	var top = $(id).offset().top;
       $('body,html').animate({scrollTop: top}, 1500);
   });

$('.mainmenubtn, .menu-btn').on('click', function(){
	$('.dropdown-child').toggleClass("active1");
});

});     


    