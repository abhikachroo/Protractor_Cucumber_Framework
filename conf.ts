import {Config} from "protractor";
import * as reporter from "cucumber-html-reporter";

export let config: Config = {
    // The address of a running selenium server.
   // seleniumAddress: 'http://localhost:4444/wd/hub',
   directConnect:true,
   framework:'custom',
   frameworkPath: require.resolve('protractor-cucumber-framework'),
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },
  
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../features/login.feature'],
    cucumberOpts: {
        // require step definitions
       tags:"@smoke",
       //tags:"@Regression",
        format:'json:./report/report.json',
       
        
        require: [
          './stepDefinitions/*.js', // accepts a glob,
        
        ]
      },
      onComplete: () =>{
        var options = {
          theme: 'bootstrap',
          jsonFile: './report/report.json',
          output: './report/HTML_Report.html',
          reportSuiteAsScenarios: true,
          launchReport: true,
          metadata: {
              "App Version":"1.0.0",
              "Test Environment": "QA",
              "Browser": "Chrome",
              "Platform": "Windows 10",
              "Parallel": "Scenarios",
              "Executed": "Remote"
          }
      };
   
      reporter.generate(options);


      }
  
  
  };
  