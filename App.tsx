//react library import
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screen import
import SplashScreen from './src/screens/users/index';
import NicknameScreen from './src/screens/users/NicknameScreen';
import InterestsScreen from './src/screens/users/InterestsScreen';
import PositionsScreen from './src/screens/users/PositionsScreen';
import ProfileScreen from './src/screens/users/ProfileScreen';

//types import
import {UserStackParamList} from './src/types/stacks/StackTypes';

//stacks
const UserStack = createNativeStackNavigator<UserStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      {/*  stack navigator로 동작 */}
      <UserStack.Navigator initialRouteName="Splash">
        {/*  stack navigator로 동작하는 화면이 추가 될 태그 */}
        <UserStack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <UserStack.Screen
          name="Nickname"
          component={NicknameScreen}
          options={{headerShown: false}}
        />
        <UserStack.Screen name="Interests" component={InterestsScreen} />
        <UserStack.Screen name="Positions" component={PositionsScreen} />
        <UserStack.Screen name="Profile" component={ProfileScreen} />
      </UserStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
