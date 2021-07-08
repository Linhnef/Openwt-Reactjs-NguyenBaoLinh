class Author{
    name : String;
    email : String;
    constructor(name : String,email : String){
        this.name = name;
        this.email = email;
    }
}


class Book{
    name : String;
    author : Author;
    constructor(name : String, author : Author){
        this.author = author;
        this.name = name;
    }
}