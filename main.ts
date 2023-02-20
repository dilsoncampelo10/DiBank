import { CompanyAccount } from './class/CompanyAccount';
import {PeopleAccount} from './class/PeopleAccount';

const myAccount:PeopleAccount = new PeopleAccount(1,'Dilson');

const myEnterprise:CompanyAccount = new CompanyAccount(1,'Dilson Campêlo');

myAccount.deposit(100);
myAccount.withdraw(110);
myAccount.withdraw(1);
myEnterprise.deposit(100);
myEnterprise.getLoan(30000);

console.log(myAccount);
console.log(myEnterprise);