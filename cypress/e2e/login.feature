Feature: Testing login for a demo website

@Sanity 
Scenario: Valid Login

Given @navigation I open the website
When @login I add username "Admin" and password "admin123"
When @login I click on login button
Then @dashboard I land in site dashboard
# Then @dashboard I logout from application

@Smoke
Scenario: Invalid Login

Given @navigation I open the website
When @login I add username and password from json "testData" 
When @login I click on login button
Then @login I validate error from json "ValidationStatemen"