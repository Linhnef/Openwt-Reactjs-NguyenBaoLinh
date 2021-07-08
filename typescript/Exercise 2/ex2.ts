import { Author } from "./ex1";


class Book{
    name : String;
    authors : Author[];

    constructor(name : String, authors : Author[]){
        this.name = name;
        this.authors = authors;
    }

    toString = () => this.name + " : " + JSON.stringify(this.authors);
}
const a = new Author('linh','begin270519@gmail.com','bee dee');
const a1 = new Author('linh','begin270519@gmail.com','bee dee');

const bo = new Book('linh',[a,a1]);
console.log(bo.toString());