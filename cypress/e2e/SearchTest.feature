Feature: Search item 13

Background:
Given I navigate to the am website

   Scenario: search item in amazon website
      Then I land on Homepage
      When I search for "iPhone 13"
      Then I validate search text
      # And @api I run fake API
      