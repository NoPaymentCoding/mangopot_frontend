//react libraries import
import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

//design 관련
import styles from './style';

//types import
import {UserStackParamList} from '../../types/stacks/StackTypes';

//stack 관련 import
import {StackScreenProps} from '@react-navigation/stack';
import userService from '../../services/userService';

export type NicknameScreenProps = StackScreenProps<
  UserStackParamList,
  'Nickname'
>;

export default function NicknameScreen({navigation}: NicknameScreenProps) {
  //입력받을 닉네임
  const [nickname, setNickname] = useState<String>('');

  //오류메세지
  const [validationMsg, setValidationMsg] = useState<String>('');

  //유효성 검사
  const [isValidate, setIsValidate] = useState<boolean>(false);

  useEffect(() => {
    if (nickname.length > 10) {
      setIsValidate(false);
      setValidationMsg('글자수는 10자를 초과할 수 없습니다.');
    } else if (nickname.length < 3) {
      setIsValidate(false);
      setValidationMsg('글자수는 2자 미만일 수 없습니다.');
    } else {
      setIsValidate(true);
    }
  }, [nickname]);

  return (
    <View style={styles.container}>
      <View style={styles.topArea}>
        <View style={styles.titleTxtArea}>
          <Text style={styles.titleTxt}>{'회원가입'}</Text>
        </View>
      </View>
      <View style={styles.midArea}>
        {/*<View style={{flex: 0.2}} />*/}
        <View>
          <View style={customStyles.mainTxtArea}>
            <Text style={customStyles.mainTxt}>{'닉네임'}</Text>
          </View>
          <View>
            <TextInput
              style={customStyles.textBoxArea}
              placeholder={'10자 이하의 닉네임을 입력해주세요.'}
              onChangeText={nickname => setNickname(nickname)}
            />
          </View>
          <View style={customStyles.validationTxtArea}>
            {isValidate ? (
              <Text style={customStyles.validateTxt}>
                {'사용가능한 닉네임입니다.'}
              </Text>
            ) : (
              <Text style={customStyles.notValidateTxt}>{validationMsg}</Text>
            )}
          </View>
        </View>
      </View>
      <View style={styles.btmArea}>
        <View style={styles.btnArea}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Interests')}>
            <Text style={styles.btnTxt}>{'다음으로'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnArea} />
      </View>
    </View>
  );
}

const customStyles = StyleSheet.create({
  mainTxtArea: {
    //설명글
    paddingTop: 10,
    paddingBottom: 10,
  },
  mainTxt: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  validationTxtArea: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  notValidateTxt: {
    fontSize: 15,
    color: 'red',
  },
  validateTxt: {
    fontSize: 15,
    color: 'gray',
    // paddingTop: 10,
  },
  textBoxArea: {
    // flex: 1, 있으면..뒤에묻힘(?) 화면에안나옴
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
});
