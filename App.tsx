/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screen import
import SplashScreen from './src/screens/users/index';
import SignUpScreen from './src/screens/users/SignUp';

//types import
import {UserStackParamList} from './src/types/stacks/StackTypes';

// const Stack = createNativeStackNavigator();

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
        <UserStack.Screen name="SignUpInfo" component={SignUpScreen} />
      </UserStack.Navigator>
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
