"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const landingobjs_1 = require("../pageObjects/landingobjs");
const homeobjs_1 = require("../pageObjects/homeobjs");
var expect = require('chai').expect;
let lp = new landingobjs_1.landingobjs();
let hp = new homeobjs_1.homeobjs();
cucumber_1.Given('User is on Landing Page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
}));
cucumber_1.When('User enters username as {string} and password as {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield lp.usernameEditbox.sendKeys(string);
    yield lp.passwordEditbox.sendKeys(string2);
    yield lp.username2Editbox.sendKeys(string);
}));
cucumber_1.When('User clicks Login button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield lp.loginbutton.click();
}));
cucumber_1.Then('validate user navigates to Home Page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield console.log("User is logged in");
    yield hp.logoutlink.getText().then(function (text) {
        expect(text).to.equal('Logout1'); //Failing Intentionall to see the HTML report layout
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZGluZ3BhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvbGFuZGluZ3BhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSx1Q0FBNkM7QUFDN0MsMkNBQXFDO0FBQ3JDLDREQUF5RDtBQUN6RCxzREFBbUQ7QUFDbkQsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQTtBQUVuQyxJQUFJLEVBQUUsR0FBRSxJQUFJLHlCQUFXLEVBQUUsQ0FBQTtBQUN6QixJQUFJLEVBQUUsR0FBQyxJQUFJLG1CQUFRLEVBQUUsQ0FBQTtBQUVyQixnQkFBSyxDQUFDLHlCQUF5QixFQUFFLEdBQU8sRUFBRTtJQUMxQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDBFQUEwRSxDQUFDLENBQUM7QUFDOUYsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQywyREFBMkQsRUFBRSxDQUFNLE1BQU0sRUFBRSxPQUFPLEVBQUMsRUFBRTtJQUN4RixNQUFNLEVBQUUsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLE1BQU0sRUFBRSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsTUFBTSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRTdDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsMEJBQTBCLEVBQUUsR0FBTyxFQUFFO0lBQ3hDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUMvQixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHNDQUFzQyxFQUFFLEdBQU8sRUFBRTtJQUNwRCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtJQUN2QyxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtRQUU5QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLG9EQUFvRDtJQUV6RixDQUFDLENBQUMsQ0FBQTtBQUNILENBQUMsQ0FBQSxDQUFDLENBQUMifQ==