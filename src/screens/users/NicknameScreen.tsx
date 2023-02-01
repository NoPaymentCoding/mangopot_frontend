//react libraries import
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native';

//design 관련
import styles from './style';

//types import
import {UserStackParamList} from '../../types/stacks/StackTypes';

//stack 관련 import
import {StackScreenProps} from '@react-navigation/stack';
import userService from '../../services/userService';

export type NicknameScreenProps = StackScreenProps<UserStackParamList,
    'Nickname'>;

export default function NicknameScreen({navigation}: NicknameScreenProps) {
    //입력받을 닉네임
    const [nickname, setNickname] = useState<string>('');

    //오류메세지
    const [validationMsg, setValidationMsg] = useState<string>('');

    //유효성 검사
    const [isValidate, setIsValidate] = useState<boolean>(false);

    //존재하는 닉네임인지 검사
    const nextPage = () => { //await넣으면 validationMsg가 update되더라도 rerendering이 안됨
        if (!isValidate) {
            setValidationMsg('닉네임 조건을 다시 확인해주세요.');
        } else {
            userService.isNicknameValidate(nickname).then(res => {
                if (!res.data) {
                    navigation.navigate('Interests');
                } else {
                    console.log("이미존재");
                    setValidationMsg('이미 존재하는 닉네임입니다.');
                }
            }).catch(reason => {
                console.log("error");
            });
        }
    };

    //닉네임을 입력할 때 마다 유효성 검사
    useEffect(() => {
        if (nickname.length > 10) {
            setIsValidate(false);
            setValidationMsg('글자수는 10자를 초과할 수 없습니다.');
        } else if (nickname.length < 3) {
            setIsValidate(false);
            setValidationMsg('글자수는 2자 미만일 수 없습니다.');
        } else {
            setIsValidate(true);
            setValidationMsg('사용가능한 닉네임입니다.');
        }
    }, [nickname]);

    return (
        <View style={styles.container}>
            <View style={styles.topArea}>
                <View style={styles.titleTxtArea}>
                    <Text style={styles.titleTxt1}>{'회원가입'}</Text>
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
                                {validationMsg}
                            </Text>
                        ) : (
                            <Text style={customStyles.notValidateTxt}>{validationMsg}</Text>
                        )}
                    </View>
                </View>
            </View>
            <View style={styles.btmArea}>
                <View style={styles.btnArea}>
                    {/*<TouchableOpacity style={styles.btn} onPress={nextPage}>*/}
                    {/*  <Text style={styles.btnTxt}>{'다음으로'}</Text>*/}
                    {/*</TouchableOpacity>*/}
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={nextPage}>
                        <Text style={styles.btnTxt}>{'다음으로'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnArea}/>
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
