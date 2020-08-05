import { ElementFinder,element,by } from "protractor";


export class landingobjs

{

 usernameEditbox:ElementFinder;
 passwordEditbox:ElementFinder;
 username2Editbox:ElementFinder;
 loginbutton:ElementFinder;

constructor()
{
   
    this.usernameEditbox=element(by.id("username"));
    this.passwordEditbox=element(by.model("Auth.user.password"));
    this.username2Editbox=element(by.model("model[options.key]"));
    this.loginbutton=element(by.className("btn btn-danger"));    

}

}