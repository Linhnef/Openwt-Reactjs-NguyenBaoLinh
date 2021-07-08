class Employee{
    id : String;
    lastName : String;
    firstName : String;
    salary : number;

    constructor(id : String ="not created !" , lastName : String = '', firstName : String = '', salary : number = 0){
        this.id = id;
        this.lastName = lastName;
        this.firstName = firstName;
        this.salary = salary;
    }
    getSalary = () =>{
        return 12* this.salary;
    }
}