# meet

FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

User story:
    As a user,
    I should be able to show and hide an event’s details.
    So that I can see the details of the events that I’m interested in and hide the events I am not interested in.

Scenario 1: An event element is collapsed by default
    Given an event’s info has been loaded
    When a user first sees an event
    Then the event’s details will not be visible

Scenario 2: User can expand an event to see its details
    Given information about the event is loaded
    When a user clicks a collapsed event panel
    Then the details will become visible

Scenario 3: User can collapse an event to hide its details
    Given an event’s details are visible
    When a user clicks a “hide” or “collapse” button
    Then the events and its details will not be visible


FEATURE 3: SPECIFY NUMBER OF EVENTS

User story:
    As a user,
    I should be able to specify the number events returned on the page
    So that I can see how many events I will look at

Scenario 1: When user hasn’t specified a number, 32 is the default number
    Given a user hasn’t specified a number of events to load
    When a user opens the app or runs a search
    Then 32 events will appear

Scenario 2: User can change the number of events they want to see
    Given a user has specified a number of events to load
    When a user open the app or runs a search
    Then the number of events the user selected will appear

FEATURE 4: USE THE APP WHEN OFFLINE

User story:
    As a user,
    I should be able to use the app when offline
    So that I don’t have to use internet connection to use the app

Scenario 1: Show cached data when there’s no internet connection
    Given a user has previously opened the app with an internet connection
    When the user opens the app with no internet connection
    Then they will see cached data from the last session

Scenario 2: Show error when user changes the settings (city, time range)
    Given there is no internet connection
    When a user tries to change a setting that requires loading new data, such as “city” or “time range”
    Then they will see an error message that they are unable to change settings without an internet connection

FEATURE 5: DATA VISUALIZATION

User story:
    As a user,
    I should be able to see an overview of events
    So that I can see how many and what types of events are happening

Scenario 1: Show a chart with the number of upcoming events in each city
    Given there are listed events for a city
    When a user searches for events for that city
    Then they will see a chart showing the number of upcoming events in that city

 
