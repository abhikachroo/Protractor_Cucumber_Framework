import { Given, When, Then } from "cucumber";
import { homeobjs } from "../pageObjects/homeobjs";
import { landingobjs } from "../pageObjects/landingobjs";
let hp=new homeobjs()
let lp=new landingobjs()


Given('User is on Home Page', async()=> {
    
    let chk = hp.logoutlink.isEnabled();
    if (chk) {
        console.log("User is on Home Page"); 
    } else {
        console.log("User is somewhere Else");
    }
    
  });

  When('User clicks on Logout link', async()=> {
    await hp.logoutlink.click();
  });

  Then('User is navigated back to Landing Page', async()=> {
       await console.log(lp.usernameEditbox.isPresent);
  });

  