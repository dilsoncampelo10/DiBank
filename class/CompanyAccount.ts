import { DiAccount } from "./DiAccount";

class CompanyAccount extends DiAccount{
    constructor(number:number,name:string){
        super(number,name);
    }

    getLoan = (loan:number) => {

        if(this.validateAccount()){
            this.balance += loan;
        }
        
    }
}