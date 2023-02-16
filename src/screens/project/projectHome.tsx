import React from 'react';
import {View, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

//Project Stack
import {ProjectStackParamList} from '../../types/stacks/ProjectStackTypes';
import {Button} from 'react-native';

//Export Type
export type ProjectHomeScreenProps = StackScreenProps<
  ProjectStackParamList,
  'Home'
>;

const ProjectHome = ({navigation}: ProjectHomeScreenProps) => {
  return (
    <View>
      <Text>프로젝트 홈 입니다.</Text>
      <Button
        title="글쓰러가기"
        onPress={() => navigation.navigate('Posting')}></Button>
    </View>
  );
};

export default ProjectHome;
