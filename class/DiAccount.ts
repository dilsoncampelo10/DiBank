export abstract class DiAccount{

    private number:number;
    private name:string;
    private balance:number;
    private status:boolean

    constructor(number:number,name:string){
        this.number = number;
        this.name = name;
        this.balance = 0;
        this.status = true;
    }

    deposit = (value:number) => {
        if (this.validateAccount()) {
            this.setBalance(value);
        }
    }

    withdraw = (value:number) => {

    }
    private validateAccount = ():boolean => {
        
        if (this.status) {
            return this.status;
        }
        
        throw new Error('Conta inativa');
    }

    setNumber = (number:number) => {
        this.number = number;
    }

    getNumber = ():number => {
        return this.number;
    }

    setName = (name:string):void => {
        this.name = name;
    }
    getName = ():string => {
        return this.name;
    }

    setBalance = (value:number):void => {
        this.balance = value;
    }
    getBalance = ():number => {
        return this.balance
    }

}