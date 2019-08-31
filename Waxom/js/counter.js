var time = 1, cc = 1;
$(window).scroll(function(){
	$('.count').each(function(){
		var
		cPos = $(this).offset().top,
		topWindow = $(window).scrollTop();
		if (cPos < topWindow + 500){
			if(cc < 2){
				$(".count").addClass('viz');
				$('p').each(function(){
					var 
					i = 1,
					num = $(this).data('num'),
					step = 1000 * time / num,
					that = $(this),
					int = setInterval(function(){
					  if (i <= num) {
						that.html(i);
					  }
					  else {
						  cc = cc + 1;
						clearInterval(int);
					  }
					  i++;
					},step);
				});
			}
		}
	});
});