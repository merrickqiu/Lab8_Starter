# Lab 8 - Starter
Merrick Qiu
Screenshots are in root directory
# Questions
1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

    Within a Github action that runs whenever code is pushed. 
    This is so that the tests run automatically, which is easier than doing it manually, and any new pushes are immediately tested so that errors can be fixed.
2) Would you use an end to end test to check if a function is returning the correct output? 

    No, a unit test would be more fitting to test an individual function.
3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

    No, an E2E test would be better because the message feature is not an isolated feature.
4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

    Yes, a unit test would be good for this feature since it is an isolated function that can be tested.