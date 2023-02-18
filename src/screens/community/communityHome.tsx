import React from 'react';
import {View, Text, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

//community Stack
import {CommunityStackParamList} from '../../types/stacks/CommunityStackTypes';

//Main Stack
//import {MainStackParamList} from '../../types/stacks/MainStackTypes';

//Export Type
export type CommunityHomeScreenProps = StackScreenProps<
  CommunityStackParamList,
  'Home'
>;
/*export type MainCommunityHomeScreenProps = StackScreenProps<
  MainStackParamList,
  'CommunityHome'
>;*/

const ProjectHome = ({navigation}: CommunityHomeScreenProps) => {
  return (
    <View>
      <Text>커뮤니티 홈 입니다.</Text>
      <Button
        title="글쓰러가기"
        onPress={() => navigation.navigate('Posting')}></Button>
    </View>
  );
};

export default ProjectHome;
