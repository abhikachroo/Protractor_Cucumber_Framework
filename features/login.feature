Feature: Validate Login

@smoke
Scenario: Validate Login
Given User is on Landing Page
When User enters username as "angular" and password as "password"
And User clicks Login button
Then validate user navigates to Home Page

@Regression
Scenario: Validate Home
Given User is on Home Page
When User clicks on Logout link
Then User is navigated back to Landing Page

