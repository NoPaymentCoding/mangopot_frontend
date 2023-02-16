import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//import project screens
import ProjectHomeScreen from './src/screens/project/projectHome';
import ProjectPostingScreen from './src/screens/project/projectPosting';
import {ProjectStackParamList} from './src/types/stacks/ProjectStackTypes';
import {CommunityStackParamList} from './src/types/stacks/CommunityStackTypes';

//import community screens

//define screen stacks
const projectStack = createNativeStackNavigator<ProjectStackParamList>();
const communityStack = createNativeStackNavigator<CommunityStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <projectStack.Navigator initialRouteName="Home">
        <projectStack.Group>
          <projectStack.Screen name="Home" component={ProjectHomeScreen} />
          <projectStack.Screen
            name="Posting"
            component={ProjectPostingScreen}
          />
        </projectStack.Group>
      </projectStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
