Feature: Home page
    Scenario: As a user, I can navigate home page with top bar button
        Given I am on the home page
        When I click the top bar Business Digest button
        Then I should see Business Digest heading on home page
        When I click the top bar Market Digest button
        Then I should see Market Digest heading on home page
        When I click the top bar Health Concept button
        Then I should see Health Concept heading on home page
        When I click the top bar Beauty Digest button
        Then I should see Beauty Digest heading on home page

    Scenario: As a user, I can go to exteral page by clickig external page button
        Given I am on the home page
        When I click the top bar Business Digest button
        Then I should see Business Digest heading on home page
        When I click on Business Digest Home Page button on home page
        Then I should see Business Digest Home Page
        When I click on Business Digest Facebook button on home page
        Then I should see Business Digest Facebook Page
        When I click on Business Digest Instagram button on home page
        Then I should see Business Digest Instagram Page