import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile200363Navigator from '../features/UserProfile200363/navigator';
import Settings200362Navigator from '../features/Settings200362/navigator';
import Settings200360Navigator from '../features/Settings200360/navigator';
import SignIn2200358Navigator from '../features/SignIn2200358/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile200363: { screen: UserProfile200363Navigator },
Settings200362: { screen: Settings200362Navigator },
Settings200360: { screen: Settings200360Navigator },
SignIn2200358: { screen: SignIn2200358Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
