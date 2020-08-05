"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.landingobjs = void 0;
const protractor_1 = require("protractor");
class landingobjs {
    constructor() {
        this.usernameEditbox = protractor_1.element(protractor_1.by.id("username"));
        this.passwordEditbox = protractor_1.element(protractor_1.by.model("Auth.user.password"));
        this.username2Editbox = protractor_1.element(protractor_1.by.model("model[options.key]"));
        this.loginbutton = protractor_1.element(protractor_1.by.className("btn btn-danger"));
    }
}
exports.landingobjs = landingobjs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZGluZ29ianMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9sYW5kaW5nb2Jqcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBc0Q7QUFHdEQsTUFBYSxXQUFXO0lBU3hCO1FBR0ksSUFBSSxDQUFDLGVBQWUsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsZUFBZSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGdCQUFnQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFdBQVcsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBRTdELENBQUM7Q0FFQTtBQW5CRCxrQ0FtQkMifQ==