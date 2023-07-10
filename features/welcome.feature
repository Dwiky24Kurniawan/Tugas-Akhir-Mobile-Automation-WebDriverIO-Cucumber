Feature: Test Suite - Diet Meal App

  Scenario Outline: TC_001 - Negative - As a user, I want to Add User on Welcome Page with invalid data input

    Given I am on the welcome page
    When I input "<name>", "<weight>", "<height>" and choose gender
    Then I should see error message

    Examples:
      | name | weight | height |
      |      | 60     | 175    |

  Scenario Outline: TC_002 - Positive - As a user, I want to Add User on Welcome Page with valid data input

    Given I am on the welcome page
    When I input "<name>", "<weight>", "<height>" and choose gender
    When I choose activity
    Then I should see home page

    Examples:
      | name  | weight | height |
      | Dwiky | 60     | 175    |