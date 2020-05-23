import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'


import Login from './src/component/Login';
import Home from './src/component/Home';
import AddData from './src/component/AddData';

export const navigationHeader = {
  headerStyle: {
    backgroundColor: 'gray',
    elevation: 6,
    shadowColor:'gray',
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  headerTintColor:'white',
  headerTitleStyle: { fontWeight: 'bold' },
}

const AppNavigator = createStackNavigator({
  Auth: {screen:Login, navigationOptions:{header:null}},
  Home: {screen:Home, navigationOptions:{header:null}},
  AddData: {screen:AddData, navigationOptions:{header:null}},
}, {
  initialRouteName: 'Auth',
  defaultNavigationOptions: navigationHeader,

});
// const AppNavigator = (createSwitchNavigator(
//   {
//     AuthLoading: AuthLoadingScreen,
//     AppStack: AppNavigator1,
//   },
//   {
//     initialRouteName: 'AuthLoading',
//   }
// ));
 
export default createAppContainer(AppNavigator)
