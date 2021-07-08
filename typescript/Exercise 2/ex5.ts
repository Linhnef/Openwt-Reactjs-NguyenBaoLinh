class Customer{
    id : number;
    name : String;
    gender : String;

    constructor(id : number, name : String, gender : String){
        this.name =name;
        this.id = id;
        this.gender = gender;
    }
}

class Account{
    id : number;
    customer : Customer;
    balance : number;
    constructor(id : number, customer : Customer, balance : number){
        this.balance = balance;
        this.customer = customer;
        this.id = id;
    }
}