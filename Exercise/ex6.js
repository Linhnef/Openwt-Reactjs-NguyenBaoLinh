//6.
function leapYear(year){
    var result = false; 
    years = parseInt(year);
    if (years/400){
      result = true
    }
    else if(years/100){
      result = false
    }
    else if(years/4){
      result= true
    }
    else{
      result= false
    }
    return result
 }

 if(leapYear(day.getFullYear()) == true){
     console.log(day.getFullYear() + ' la nam nhuan.');
 }else{
    console.log(day.getFullYear() + ' khong la nam nhuan.');
 }