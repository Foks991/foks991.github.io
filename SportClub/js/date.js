
   var date = new Date();
   var year = date.getFullYear();
   var month =date.getMonth()+1;
   var day = date.getDate();
   if(month < 10){
     month = "0"+month;
   }
   datee=day+'.'+month+'.'+year;
document.getElementById('dateee').value = datee;
