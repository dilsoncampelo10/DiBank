export abstract class DiAccount{
    private number:number;
    private name:string;

    constructor(number:number,name:string){
        this.number = number;
        this.name = name;
    }

    deposit = (value:number) => {
        
    }
}