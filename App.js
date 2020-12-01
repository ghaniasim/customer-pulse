import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from "./components/login";
import SignupScreen from "./components/signup";
import Profile from "./components/profile";
import Survey from "./components/survey";
import Create from "./components/create";
import Answers from "./components/answers";
import Question from "./components/question";

const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen,
    Profile: Profile,
    Survey: Survey,
    Create: Create,
    Answers: Answers,
    Question: Question,
  },
  {
    initialRouteName: "Profile",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
