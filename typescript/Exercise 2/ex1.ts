
export class Author{
    name : String;
    email : String;
    gender : String;
    constructor(name : String,email : String,gender : String){
        this.name = name;
        this.email = email;
        this.gender = gender;
    }
}


class Book{
    name : String;
    author : Author;
    price : number;
    qty : number;
    constructor(name : String, author : Author,price : number, qty : number){
        this.name = name;
        this.author = author;
        this.price = price;
        this.qty = qty;
    }

    toString  = () =>  this.name + " : " + this.author.name + " : " + this.price;

}

const a = new Author('linh','begin270519@gmail.com','bee dee');
const bo = new Book('Linh',a,30000,2);
console.log(bo.toString());