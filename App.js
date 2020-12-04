import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from "./components/login";
import SignupScreen from "./components/signup";
import Profile from "./components/teacher/profile";
import Survey from "./components/teacher/survey";
import Create from "./components/teacher/question/create";
import Answers from "./components/teacher/answers";
import Data from "./components/student/data";
import SurveyObject from "./components/student/object";
import Post from "./components/teacher/question/post";

const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen,
    Profile: Profile,
    Survey: Survey,
    Create: Create,
    Answers: Answers,
    Data: Data,
    SurveyObject: SurveyObject,
    Post: Post,
  },
  {
    initialRouteName: "Profile",
    defaultNavigationOptions: {
      title: "Feedback",
    },
  }
);

export default createAppContainer(navigator);
