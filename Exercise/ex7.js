//7.
function findSunday(year){
    let tmpday = new Date(year,0,1);
    if(weekday[tmpday.getDay()] == 'Sunday'){
        return true;
    }
    return false;
}

for(i = 2014; i<= 2050; i++){
    if(findSunday(i) == true){
        console.log('The 1st January of ' + i + ' is sun day.');
    }
}