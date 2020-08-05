import { ElementFinder,element,by } from "protractor";


export class homeobjs

{

 logoutlink:ElementFinder;

constructor()
{
   
    this.logoutlink=element(by.partialLinkText("Logout"));   

}

}