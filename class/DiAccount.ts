export abstract class DiAccount{

    private number:number;
    private name:string;
    private balance:number;

    constructor(number:number,name:string){
        this.number = number;
        this.name = name;
        this.balance = 0
    }

    deposit = (value:number) => {
        
    }

    withdraw = (value:number) => {

    }
}