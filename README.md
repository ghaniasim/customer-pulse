# Feedback App

This is a cross-platform app for real time feedback, where the user can create and respond to a survey in real time.

## Experience
This application was built as an assignment, it was an interesting project in which we decided to implement a better architecture, which made it a bit more exciting for us.

## How to Use the App 

Creating a survey
- Click an Action button in the main screen (+). 
- Add name of the survey.
- Write question number and question text. 
- Choose question type (Text, MCQs).
- Add the question.
- Create the survey.
- Confirm the survey on next screen.

Respond to a survey
- Select a survey from the list of surveys.
- Answer to the questions one by one.
- User can respond to survey only once in this version.

View response to your survey
- Click on the survey on the main screen. 
- Click on the question to view answers.

Data Storage
- All Data is stored in MongoDB server.
- Data is presistent.

## Screenshots

<image src="screenshots/main.jpeg" width=300>    <image src="screenshots/create-survey.jpeg" width=300>
    <image src="screenshots/response.jpeg" width=300>  <image src="screenshots/graph.jpeg" width=300> 
        
## Architecture
Application is built using React Native, ExpressJS, NodeJS, Mongoose, MongoDB as explained in the image below.

<image src="screenshots/architecture.jpeg" width=700>
    
Photo Credits: https://dzone.com/articles/using-mongodb-and-mongoose

## API development with POSTMAN

<image src="screenshots/postman.jpeg" width=700>

## How to Install/ Run via Github

1. Clone or download the project on your local machine via following link
```
https://github.com/ghaniasim/customer-pulse.git
```
2. Unzip the file
3. Open the project with Code Editor.
4. Build and run on Expo client or emulator.

## Testing
There are couple of tests implemented using mocha.

## Dependencies

```
"dependencies": {
    "@react-native-community/checkbox": "^0.5.6",
    "@react-native-community/masked-view": "^0.1.10",
    "@react-navigation/native": "^5.8.10",
    "@react-navigation/stack": "^5.12.8",
    "chai": "^4.2.0",
    "expo": "^39.0.5",
    "expo-status-bar": "~1.0.2",
    "firebase": "^8.0.2",
    "json-to-csv-export": "^1.0.2",
    "mocha": "^8.2.1",
    "radio-buttons-react-native": "^1.0.4",
    "react": "16.13.1",
    "react-csv": "^2.0.3",
    "react-csv-downloader": "^2.2.0",
    "react-dom": "16.13.1",
    "react-json-to-csv": "^1.0.4",
    "react-native": "https://github.com/expo/react-native/archive/sdk-39.0.4.tar.gz",
    "react-native-fs": "^2.16.6",
    "react-native-gesture-handler": "^1.8.0",
    "react-native-pure-chart": "0.0.24",
    "react-native-reanimated": "^1.13.1",
    "react-native-safe-area-context": "^3.1.9",
    "react-native-screens": "^2.14.0",
    "react-native-svg": "^12.1.0",
    "react-native-web": "~0.13.12",
    "react-navigation": "^4.4.3",
    "react-navigation-stack": "^2.10.1",
    "supertest": "^6.0.1",
    "victory-native": "^35.3.1"
  }
```


