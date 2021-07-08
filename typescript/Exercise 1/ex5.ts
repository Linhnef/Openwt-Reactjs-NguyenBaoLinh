class InvoiceItem{
    id : String;
    desc : String;
    qty : number;
    unitPrice : number;

    constructor(id : String = 'not created !',desc : String = '',qty : number = 0,unitPrice = 0){
            this.id = id;
            this.desc = desc;
            this.unitPrice = unitPrice;
            this.qty = qty;
    }

    getTotal = () => this.unitPrice*this.qty;
}