function openLoginForm(){
    $("#anime").css("display","block");
}	

function showSuccessMsg(){
	$("#formWrap").css("display", "block");
}

function closeForm(){
	$("#formWrap").css("display", "none");
}

function sendData(){
	let summ = 0;
	let dataArray = $('.add');
	for(i=0;i < dataArray.length; i++){
		summ+=Number(dataArray[i].value);
	}
    document.getElementById("msg").innerHTML = "Sum of values which you entered is " + summ; 
	showSuccessMsg();
	window.setTimeout(closeForm, 5000);
}






  
