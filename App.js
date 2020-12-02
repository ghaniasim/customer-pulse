import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from "./components/login";
import SignupScreen from "./components/signup";
import Profile from "./components/profile";
import Survey from "./components/survey";
import Create from "./components/question/create";
import Answers from "./components/answers";
import Data from "./components/data";
import SurveyObject from "./components/object";
import Post from "./components/question/post";

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
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
