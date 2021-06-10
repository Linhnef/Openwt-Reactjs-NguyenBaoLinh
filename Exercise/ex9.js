function getDayToChrismas(){
    let today = new Date();
    let Christmas = new Date(today.getFullYear(), 11, 25);
    if (today.getMonth()==11 && today.getDate()>25) 
    {
        Christmas.setFullYear(Christmas.getFullYear()+1); 
    }  
    var a_day =1000*60*60*24;
    return Math.ceil((Christmas.getTime()-today.getTime())/(a_day)) + " days!";
}

console.log(getDayToChrismas());