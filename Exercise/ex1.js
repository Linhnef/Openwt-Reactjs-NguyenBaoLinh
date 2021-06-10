//1.
const day = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

console.log('Today is : ' + weekday[day.getDay()]);
if(day.getHours() <= 12){
    console.log('Current time is : ' + day.getHours() + ' PM : ' + day.getMinutes() + ' : ' + day.getSeconds() + '.');
}else{
    console.log('Current time is : ' + day.getHours()  + ' AM : ' + day.getMinutes() + ' : ' + day.getSeconds() + '.');
   
}