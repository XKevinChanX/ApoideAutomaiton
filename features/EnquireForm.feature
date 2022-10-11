Feature: Submit Enquire Form
    Scenario: As a user, I can submit enquire form by clicking enquire button on top bar
        Given I am on the home page
        When I click the top bar Enquire button
        Then I should see Enquire Form
        When I input Name in Name field in Enquire Form
        And I input testing@testing.com in Email field in Enquire Form
        And I click on Business Digest check box in Enquire Form
        And I click on Market Digest check box in Enquire Form
        And I click on Health Concept check box in Enquire Form
        And I click on Beauty Digest check box in Enquire Form
        And I input TestingMessage1234 in Remark field in Enquire Form