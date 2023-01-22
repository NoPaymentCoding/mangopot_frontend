import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';

//types import
import {UserStackParamList} from '../../types/stacks/StackTypes';
import interests from '../../types/users/SignUpTypes';
import positions from '../../types/users/SignUpTypes';

export type PositionsScreenProps = StackScreenProps<
  UserStackParamList,
  'Positions'
>;

const Item = ({title}) => (
  <View style={styles.selectBoxArea}>
    <View style={{flex: 8}}>
      <Text style={styles.selectTxt}>{title}</Text>
    </View>
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Image source={require('../../assets/images/check.png')} />
    </View>
  </View>
);

export default function PositionsScreen({navigation}: PositionsScreenProps) {
  return (
    <View style={styles.container}>
      <View style={{flex: 0.5, justifyContent: 'center'}}>
        <View style={styles.titleTxtArea}>
          <Text style={styles.titleTxt}>
            {'관심있는 포지션을\n 선택해주세요'}
          </Text>
        </View>
      </View>
      <SafeAreaView style={{flex: 2}}>
        <ScrollView>
          <FlatList
            data={positionsInfo}
            renderItem={({item}) => <Item title={item.name} />}
          />
        </ScrollView>
      </SafeAreaView>
      <View style={{flex: 1}} />
      <View style={{flex: 1, padding: 15}}>
        <View style={styles.btnArea} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleTxtArea: {
    //설명글
    padding: 20,
    backgroundColor: 'white',
  },
  titleTxt: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  mainTxtArea: {
    //설명글
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 10,

    // backgroundColor: 'white',
  },
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
  mainTxt: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textBoxArea: {
    flex: 1,
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#F0F0F0',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  btnArea: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    // backgroundColor: 'blue',
    marginBottom: 10,
    marginTop: 10,
  },
  btn: {
    flex: 1,
    width: '95%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fc913a',
    // alignItems: 'center',
  },
  btnTxt: {
    fontSize: 20,
    fontWeight: 'bold',
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
