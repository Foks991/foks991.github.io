document.addEventListener("DOMContentLoaded", () => {
	
	let firstDisplay= document.getElementById('display1');
    let secondDisplay= document.getElementById('display2');
    let btnStart = document.getElementById('start');
    let result = document.getElementById('result');
    let reset = document.getElementById('reset');
	let str = [];
	let newArr = [];
	let flag = true;
	let res;
	
	btnStart.addEventListener('click',function () {
		
		let a = firstDisplay.value;
		let b = secondDisplay.value;
		
		if(a == "" || b == ""){
			result.innerHTML = "";
			return;
		}
		
		if(flag){
			newArr = shuffle(createArr());
			flag = false;
		}
			
		if(str.length != 0){
			res = str.pop();
			result.innerHTML = res;
		}else{
			result.innerHTML = "End";
		}
		
				
		 function createArr(){
			if(Number(a) < Number(b)){
				let count = b - a;
				for(let i = 0; i <= count; i++){
					str[i] = Number(a);
					a++;
				}
			}
			else {
				Number(b) < Number(a)
				let count = a - b;
				for(let i = 0; i <= count; i++){
					str[i] = Number(b);
					b++;
				}
			}
			return str;
		}
		
		 function shuffle(array){
			 let j, temp;
			 for(let i = array.length - 1; i > 0; i--){
				j = Math.floor(Math.random()*(i + 1));
				temp = array[j];
				array[j] = array[i];
				array[i] = temp;
			 }
			return array;
		 }
	
	});		
	
	reset.addEventListener('click',function () {
		firstDisplay.value = "";
		secondDisplay.value = "";
		str = [];
		result.innerHTML = "";
		flag = true;
	});
	
});	