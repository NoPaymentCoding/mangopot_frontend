//react libraries import
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';

//design 관련
import styles from './style';

//types import
import {UserStackParamList} from '../../types/stacks/StackTypes';
import positions from '../../types/users/SignUpTypes';

//stack 관련 import
import {StackScreenProps} from '@react-navigation/stack';
import interests from '../../types/users/SignUpTypes';
import userService from '../../services/userService';

export type PositionsScreenProps = StackScreenProps<
  UserStackParamList,
  'Positions'
>;

const Item = ({name}: string) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  return (
    <Pressable
      style={customStyles.selectBoxArea}
      onPress={() => {
        setIsSelected(!isSelected);
      }}>
      <View style={{flex: 8}}>
        <Text style={customStyles.selectTxt}>{name}</Text>
      </View>
      {isSelected ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Image source={require('../../assets/images/check.png')} />
        </View>
      ) : (
        <View />
      )}
    </Pressable>
  );
};

export default function PositionsScreen({navigation}: PositionsScreenProps) {
  // const [positionsInfo, setPositionsInfo] = useState<positions[]>([]);
  //
  // useEffect(() => {
  //   userService.getPositionList().then(res => {
  //     setPositionsInfo(res.data);
  //   });
  // }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topArea}>
        <View style={styles.titleTxtArea}>
          <Text style={styles.titleTxt}>
            {'관심있는 포지션을\n선택해주세요'}
          </Text>
        </View>
      </View>
      <View style={styles.midArea}>
        <SafeAreaView style={{flex: 2}}>
          <ScrollView>
            <FlatList
              data={positionsInfo}
              renderItem={({item}) => <Item name={item.name} />}
            />
          </ScrollView>
        </SafeAreaView>
      </View>
      <View style={styles.btmArea}>
        <View style={styles.btnArea}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.btnTxt}>{'다음으로'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnArea} />
      </View>
    </View>
  );
}

const customStyles = StyleSheet.create({
  selectBoxArea: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: '#F0F0F0',
    margin: 10,
  },
  selectTxt: {
    padding: 10,
    fontSize: 20,
    paddingBottom: 15,
  },
});

const positionsInfo: positions[] = [
  {
    id: 0,
    name: '백엔드 개발자',
  },
  {
    id: 1,
    name: '프론트엔드 개발자',
  },
  {
    id: 2,
    name: '디자이너',
  },
  {
    id: 3,
    name: 'reactNative',
  },
  {
    id: 4,
    name: 'docker',
  },
  {
    id: 5,
    name: 'Kotlin',
  },
  {
    id: 6,
    name: 'node.js',
  },
  {
    id: 7,
    name: 'vue.js',
  },
  {
    id: 8,
    name: 'Angular',
  },
  {
    id: 9,
    name: 'flask',
  },
  {
    id: 10,
    name: 'Django',
  },
  {
    id: 11,
    name: 'mongoDB',
  },
  {
    id: 12,
    name: 'postgreSQL',
  },
  {
    id: 13,
    name: 'swift',
  },
  {
    id: 14,
    name: 'java',
  },
  {
    id: 15,
    name: 'javascript',
  },
  {
    id: 16,
    name: 'typescript',
  },
  {
    id: 17,
    name: 'ruby',
  },
];
