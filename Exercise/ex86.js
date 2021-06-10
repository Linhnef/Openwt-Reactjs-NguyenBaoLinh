function angle(value){
    switch(value){
        case 90:
            return 'Acute angle';
        break;
        case 180:
            return 'Straight angle';
        break;
        default:
            if(value<90) return 'Acute angle';
            if(value<180) return 'Obtuse angle';
        break;
    }
    return false;
}
console.log(angle(65));