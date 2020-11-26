import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from "./components/login";
import SignupScreen from "./components/signup";
import Profile from "./components/profile";
import Detail from "./components/Detail";
import CreateSurvey from "./components/CreateSurvey";
import SurveyType from "./components/SurveyType";
import MCQsurvey from "./components/MCQsurvey";
import YNsurvey from "./components/YNsurvey";

const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen,
    Profile: Profile,
    Detail: Detail,
    CreateSurvey: CreateSurvey,
    SurveyType: SurveyType,
    MCQsurvey: MCQsurvey,
    YNsurvey: YNsurvey,
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
