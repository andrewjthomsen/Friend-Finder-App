# Friend-Finder-App

## Decriptipn
The purpose of the Friend Finder App is to match potential friends based on inputed responses to a ten question survey. The user is asked to respond to questions with values from 1 (Strongly Disagree) to 5 (Strongly Agree). When the survey is submitted, a match is made through an existing user record that best matches the current user's responses.

The Friend Finder App simulates a simple dating app. The application was created using a Node.js and Express server on the back end and CSS framework on the front end.

### Demo
To demo, please go to this link.
https://calm-citadel-84401.herokuapp.com/survey

## Installation
To install the application follow the instructions below:
git clone git@github.com:andrewjthomsen/Friend-Finder-App.git
cd Friend-Finder-App
npm install

## Running Locally
To run the application locally and access it in browser, first set the PORT environment variable to the value of choice. An example is shown below.

export PORT=8080

After the PORT environment variable has been set, run the Node.js application with the command below.

node index.js
The application will now be running locally on PORT, which in this example, is port 8080. It can now be accessed ocally from the browser at the URL localhost:8080.