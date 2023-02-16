import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//import project screens
import ProjectHomeScreen from './src/screens/project/projectHome';
import ProjectPostingScreen from './src/screens/project/projectPosting';

//import community screens 나중에 옮겨야 함
//import CommunityHomeScreen from './src/screens/community/communityHome';
//import CommunityPostingScreen from './src/screens/community/communityPosting';

//import screen stacks
import {ProjectStackParamList} from './src/types/stacks/ProjectStackTypes';
//import {CommunityStackParamList} from './src/types/stacks/CommunityStackTypes';

//import {MainStackParamList} from './src/types/stacks/MainStackTypes'; //나중에 옮겨야 함

//define screen stacks
const projectStack = createNativeStackNavigator<ProjectStackParamList>();
//const communityStack = createNativeStackNavigator<CommunityStackParamList>();
//const mainStack = createNativeStackNavigator<MainStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <projectStack.Navigator initialRouteName="Home">
        <projectStack.Group>
          <projectStack.Screen name="Home" component={ProjectHomeScreen} />
          <projectStack.Screen
            name="Posting"
            component={ProjectPostingScreen}
            options={{headerShown: false}}
          />
        </projectStack.Group>
      </projectStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
