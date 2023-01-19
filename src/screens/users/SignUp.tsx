import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';

//types import
import {UserStackParamList} from '../../types/stacks/StackTypes';

export type SignUpScreenProps = StackScreenProps<
  UserStackParamList,
  'SignUpInfo'
>;

export default function SignUp() {
  return (
    <View style={styles.container}>
      <View style={{flex: 0.38, justifyContent: 'center'}}>
        <View style={styles.titleTxtArea}>
          <Text style={styles.titleTxt}>{'회원가입'}</Text>
        </View>
      </View>
      <View style={{flex: 2}}>
        <View style={{flex: 0.2}} />
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            <View style={styles.mainTxtArea}>
              <Text style={styles.mainTxt}>{'닉네임'}</Text>
            </View>
          </View>
          <View style={{flex: 1.2, margin: 10}}>
            <View style={{flex: 1}}>
              <TextInput
                style={styles.textBoxArea}
                placeholder={'10자 이하의 닉네임을 입력해주세요.'}
              />
            </View>
          </View>
          <View style={{flex: 0.5}}>
            <View style={{flex: 1, marginLeft: 20}}>
              <Text style={styles.validationTxt}>
                {'사용가능한 닉네임입니다'}
              </Text>
            </View>
          </View>
        </View>
        <View style={{flex: 1}} />
      </View>
      <View style={{flex: 1, padding: 15}}>
        <View style={styles.btnArea} />
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn}>
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
