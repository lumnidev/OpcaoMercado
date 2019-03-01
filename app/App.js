import {createStackNavigator, createAppContainer} from 'react-navigation';

import SignInPage from './pages/signInPage';
import BottomNavPage from './pages/bottomNavPage';

const MainNavigator = createStackNavigator({
  SignInPage: SignInPage,
  BottomNavPage: BottomNavPage,
});


const App = createAppContainer(MainNavigator);

export default App;