import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
  ScrollView,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';

//types import
import {UserStackParamList} from '../../types/stacks/StackTypes';
import interests from '../../types/users/SignUpTypes';
import window from '@react-navigation/native/lib/typescript/src/__mocks__/window';

export type InterestsScreenProps = StackScreenProps<
  UserStackParamList,
  'Interests'
>;

/*
flat list로 그리드 그리는법 찾아볼 것..
 */
const Item = ({title}) => (
  <View style={styles.selectBtnArea}>
    <Text style={styles.selectTxt}>{title}</Text>
  </View>
);

export default function InterestsScreen({navigation}: InterestsScreenProps) {
  return (
    <View style={styles.container}>
      <View style={{flex: 0.5, justifyContent: 'center'}}>
        <View style={styles.titleTxtArea}>
          <Text style={styles.titleTxt}>
            {'관심있는 분야 태그를\n선택하세요'}
          </Text>
        </View>
      </View>
      <ScrollView
        style={{
          flex: 2,
          backgroundColor: 'blue',
        }}>
        <View style={styles.scrollView}>
          {interestsInfo.map(item => (
            <View style={styles.selectBtnArea}>
              <Text style={styles.selectTxt}>{item.name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={{flex: 1, padding: 15}}>
        <View style={styles.btnArea} />
        <View style={styles.btnArea}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Positions')}>
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
  scrollView: {
    flexDirection: 'row', //가로배치
    flexWrap: 'wrap', //컨테이너 끝에 닿으면 줄바꿈
  },
  selectBtnArea: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    padding: 10,
    borderRadius: 8,
    margin: 7,
  },
  selectTxt: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  btnArea: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    // backgroundColor: 'blue',
    marginBottom: 10,
    marginTop: 10,
  },
  validationTxt: {
    fontSize: 15,
    paddingTop: 10,
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

const interestsInfo: interests[] = [
  {
    id: 0,
    name: 'spring',
  },
  {
    id: 1,
    name: 'react',
  },
  {
    id: 2,
    name: 'mySQL',
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
