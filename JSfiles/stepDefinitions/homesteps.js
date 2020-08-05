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
//import chai from "chai";
//var expect = chai.expect;
cucumber_1.Given('User opened Browser', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('https://angularjs.org/');
}));
cucumber_1.When('User entered google', () => __awaiter(void 0, void 0, void 0, function* () {
    yield console.log("I am on Google Page");
}));
cucumber_1.Then('User is Navigated to Google Page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield console.log("I am on Third Step, and Exiting");
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluaXRpb25zL2hvbWVzdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUM3QywyQ0FBcUM7QUFDckMsMEJBQTBCO0FBQzFCLDJCQUEyQjtBQUVsQixnQkFBSyxDQUFDLHFCQUFxQixFQUFFLEdBQU8sRUFBRTtJQUNwQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7QUFDOUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUlILGVBQUksQ0FBQyxxQkFBcUIsRUFBRSxHQUFPLEVBQUU7SUFDbkMsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDM0MsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUtILGVBQUksQ0FBQyxrQ0FBa0MsRUFBRSxHQUFPLEVBQUU7SUFDaEQsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUE7QUFDdEQsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9