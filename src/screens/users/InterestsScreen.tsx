//react libraries import
import React, {useEffect, useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';

//design 관련
import styles from './style';

//types import
import {UserStackParamList} from '../../types/stacks/StackTypes';
import interests from '../../types/users/SignUpTypes';

//stack 관련 import
import {StackScreenProps} from '@react-navigation/stack';
import userService from '../../services/userService';

export type InterestsScreenProps = StackScreenProps<UserStackParamList,
    'Interests'>;


type Props = {
    name: string;
    id: number;
    appendInterestsList: (x: number, check: boolean) => void;
}

const InterestButton = ({name, id, appendInterestsList}: Props) => {
    const [isSelected, setIsSlected] = useState<boolean>(false);

    return (
        <View>
            <Pressable
                style={[
                    customStyles.selectBtnArea,
                    {backgroundColor: isSelected ? '#fc913a' : '#f0f0f0'},
                ]}
                onPress={() => {
                    setIsSlected(!isSelected);
                    appendInterestsList(id, isSelected);
                }}>
                <Text
                    style={[
                        customStyles.selectTxt,
                        {color: isSelected ? 'white' : 'black'},
                    ]}>
                    {name}
                </Text>
            </Pressable>
        </View>
    );
};

export default function InterestsScreen({navigation}: InterestsScreenProps) {
    const [interestsInfo, setInterestsInfo] = useState<interests[]>([]);
    let selectedInterests: number[] = [];

    const appendInterestsList = (x: number, check: boolean) => {
        if (!check) {
            selectedInterests.push(x);
        } else {
            selectedInterests = selectedInterests.filter((el: number) => el !== x); //있으면 삭제
        }

        console.log("======================");
        selectedInterests.forEach(function (number) {
            console.log(number);
        });

    }

    //선택할 수 있는 interest tag list를 가져옴
    useEffect(() => {
        userService
            .getInterestList()
            .then(res => {
                setInterestsInfo(res.data);
            })
            .catch(reason => {
                console.log(reason);
            });
    }, []); //최초 1회만 실행되는 경우 []

    return (
        <View style={styles.container}>
            <View style={styles.topArea}>
                <View style={styles.titleTxtArea}>
                    <Text style={styles.titleTxt}>
                        {'관심있는 분야 태그를\n선택하세요'}
                    </Text>
                </View>
            </View>
            <View style={styles.midArea}>
                <ScrollView
                    style={{
                        flex: 2,
                        // backgroundColor: 'blue',
                    }}>
                    <View style={customStyles.scrollView}>
                        {interestsInfo.map(info => (
                            <InterestButton name={info.name} id={info.inId} appendInterestsList={appendInterestsList}/>
                        ))}
                    </View>
                </ScrollView>
            </View>
            <View style={styles.btmArea}>
                <View style={styles.btnArea}>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => navigation.navigate('Positions')}>
                        <Text style={styles.btnTxt}>{'다음으로'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnArea}/>
            </View>
        </View>
    );
}

const customStyles = StyleSheet.create({
    scrollView: {
        flexDirection: 'row', //가로배치
        flexWrap: 'wrap', //컨테이너 끝에 닿으면 줄바꿈
    },
    selectBtnArea: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 8,
        margin: 7,
    },
    selectTxt: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
    },
});

// const interestsInfo: interests[] = [
//   {
//     id: 0,
//     name: 'spring',
//   },
//   {
//     id: 1,
//     name: 'react',
//   },
//   {
//     id: 2,
//     name: 'mySQL',
//   },
//   {
//     id: 3,
//     name: 'reactNative',
//   },
//   {
//     id: 4,
//     name: 'docker',
//   },
//   {
//     id: 5,
//     name: 'Kotlin',
//   },
//   {
//     id: 6,
//     name: 'node.js',
//   },
//   {
//     id: 7,
//     name: 'vue.js',
//   },
//   {
//     id: 8,
//     name: 'Angular',
//   },
//   {
//     id: 9,
//     name: 'flask',
//   },
//   {
//     id: 10,
//     name: 'Django',
//   },
//   {
//     id: 11,
//     name: 'mongoDB',
//   },
//   {
//     id: 12,
//     name: 'postgreSQL',
//   },
//   {
//     id: 13,
//     name: 'swift',
//   },
//   {
//     id: 14,
//     name: 'java',
//   },
//   {
//     id: 15,
//     name: 'javascript',
//   },
//   {
//     id: 16,
//     name: 'typescript',
//   },
//   {
//     id: 17,
//     name: 'ruby',
//   },
// ];
