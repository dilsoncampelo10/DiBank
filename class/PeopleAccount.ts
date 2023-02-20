import { DiAccount } from "./DiAccount";

class PeopleAccount extends DiAccount {
    constructor(number:number,name:string) {
        super(number,name)
    }

    deposit = (value:number) => {
        if (this.validateAccount()) {
            this.balance += value+10;
        }
    }
}