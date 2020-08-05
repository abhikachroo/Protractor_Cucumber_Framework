
import { Given, When, Then } from "cucumber";
import { browser } from "protractor";
import { landingobjs } from "../pageObjects/landingobjs";
import { homeobjs } from "../pageObjects/homeobjs";
var expect = require('chai').expect

let lp =new landingobjs()
let hp=new homeobjs()

Given('User is on Landing Page', async()=> {
await browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
});

When('User enters username as {string} and password as {string}', async(string, string2)=> {
  await lp.usernameEditbox.sendKeys(string);
  await lp.passwordEditbox.sendKeys(string2);
  await lp.username2Editbox.sendKeys(string);
  
});

When('User clicks Login button', async()=> {
  await lp.loginbutton.click();
});

Then('validate user navigates to Home Page', async()=> {
  await console.log("User is logged in")
 await hp.logoutlink.getText().then(function (text) {
  
    expect(text).to.equal('Logout1'); //Failing Intentionall to see the HTML report layout
    
 })
});


