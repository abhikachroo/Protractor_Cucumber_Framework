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
cucumber_1.Before({ tags: "@smoke" }, () => __awaiter(void 0, void 0, void 0, function* () {
    // This hook will be executed before scenarios tagged with @smoke
    yield protractor_1.browser.manage().window().maximize();
}));
cucumber_1.After({ tags: "@smoke" }, () => __awaiter(void 0, void 0, void 0, function* () {
    // This hook will be executed before scenarios tagged with @smoke
    console.log("Smoke Testing is completed");
}));
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        // This hook will be executed after every scenatio
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            //code to take screesnhot
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJob29rcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbml0aW9ucy9jdWN1bWJlcmhvb2tzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EsdUNBQThDO0FBQzlDLDJDQUFxQztBQUlyQyxpQkFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQyxFQUFFLEdBQU8sRUFBRTtJQUNoQyxpRUFBaUU7SUFDakUsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzdDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxnQkFBSyxDQUFDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQyxFQUFFLEdBQU8sRUFBRTtJQUM3QixpRUFBaUU7SUFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0FBQzVDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHTCxnQkFBSyxDQUFDLFVBQWUsUUFBUTs7UUFDM0Isa0RBQWtEO1FBQ2hELElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUksaUJBQU0sQ0FBQyxNQUFNLEVBQzdDO1lBQ0UseUJBQXlCO1lBQzFCLE1BQU0sVUFBVSxHQUFFLE1BQU0sb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUU1QyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBQyxXQUFXLENBQUMsQ0FBQztTQUN6QztJQUdILENBQUM7Q0FBQSxDQUFDLENBQUMifQ==