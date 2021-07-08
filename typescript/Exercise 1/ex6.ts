class Account{
    id : String;
    name : String;
    balance : number;
    constructor(id : String = 'not created !', name : String = 'not created !' , balance : number = 0){
            this.id = id;
            this.name = name;
            this.balance = balance;
    }

    credit(amount : number = 0){
        this.balance += amount;
    }

}