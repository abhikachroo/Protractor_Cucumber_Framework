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
const homeobjs_1 = require("../pageObjects/homeobjs");
const landingobjs_1 = require("../pageObjects/landingobjs");
let hp = new homeobjs_1.homeobjs();
let lp = new landingobjs_1.landingobjs();
cucumber_1.Given('User is on Home Page', () => __awaiter(void 0, void 0, void 0, function* () {
    let chk = hp.logoutlink.isEnabled();
    if (chk) {
        console.log("User is on Home Page");
    }
    else {
        console.log("User is somewhere Else");
    }
}));
cucumber_1.When('User clicks on Logout link', () => __awaiter(void 0, void 0, void 0, function* () {
    yield hp.logoutlink.click();
}));
cucumber_1.Then('User is navigated back to Landing Page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield console.log(lp.usernameEditbox.isPresent);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvaG9tZXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0Msc0RBQW1EO0FBQ25ELDREQUF5RDtBQUN6RCxJQUFJLEVBQUUsR0FBQyxJQUFJLG1CQUFRLEVBQUUsQ0FBQTtBQUNyQixJQUFJLEVBQUUsR0FBQyxJQUFJLHlCQUFXLEVBQUUsQ0FBQTtBQUd4QixnQkFBSyxDQUFDLHNCQUFzQixFQUFFLEdBQU8sRUFBRTtJQUVuQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3BDLElBQUksR0FBRyxFQUFFO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0tBQ3ZDO1NBQU07UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7S0FDekM7QUFFSCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDRCQUE0QixFQUFFLEdBQU8sRUFBRTtJQUMxQyxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDOUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx3Q0FBd0MsRUFBRSxHQUFPLEVBQUU7SUFDbkQsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDckQsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9