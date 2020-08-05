
import {After,Before, Status} from "cucumber";
import { browser } from "protractor";



Before({tags: "@smoke"}, async()=> {
  // This hook will be executed before scenarios tagged with @smoke
  await browser.manage().window().maximize();
});

After({tags: "@smoke"}, async()=> {
    // This hook will be executed before scenarios tagged with @smoke
    console.log("Smoke Testing is completed");
  });


After(async function(scenario) {
  // This hook will be executed after every scenatio
    if (scenario.result.status=== Status.FAILED)
  {
    //code to take screesnhot
   const screenshot= await browser.takeScreenshot();
 
        this.attach(screenshot,"image/png");
  }


});





