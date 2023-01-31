//react libraries import
import React, {useState} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

//design 관련
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
//types import
import {UserStackParamList} from '../../types/stacks/StackTypes';

//stack 관련 import
import {StackScreenProps} from '@react-navigation/stack';
import {launchImageLibrary} from "react-native-image-picker";

Icon.loadFont().then();

export type ProfileScreenProps = StackScreenProps<UserStackParamList,
    'Profile'>;

export default function ProfileScreen({navigation}: ProfileScreenProps) {

    const [profileImg, setProfileImg] = useState<string>('../../assets/images/ggamja.jpeg');

    const pickImage = () => {
        launchImageLibrary({mediaType: 'photo'}).then(res => {
            if (res.didCancel != false) {
                setProfileImg(res.assets[0].uri);
            }
        })
    }


    return (
        <View style={styles.container}>
            <View style={styles.topArea}>
                <View style={styles.titleTxtArea}>
                    <Text style={styles.titleTxt}>{'프로필을 꾸며보세요'}</Text>
                </View>
            </View>
            <View style={styles.midArea}>
                <View style={customStyles.customMidArea}>
                    <View style={customStyles.profileImgArea}>
                        <Image
                            style={customStyles.profileImg}
                            source={{uri: profileImg}}
                        />
                        <TouchableOpacity style={customStyles.editImg}
                                          onPress={pickImage}
                        >
                            <Icon name="camera" size={25}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={customStyles.profileInfoArea}>
                    <View style={customStyles.mainTxtArea}>
                        <Text style={customStyles.mainTxt}>{'자기소개'}</Text>
                    </View>
                    <View>
                        <TextInput
                            style={customStyles.textBoxArea}
                            editable
                            multiline
                            numberOfLines={4}
                            placeholder={'자유롭게 자신을 소개해보세요!'}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.btmArea}>
                <View style={styles.btnArea}>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => navigation.navigate('Positions')}>
                        <Text style={styles.btnTxt}>{'시작하기'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnArea}/>
            </View>
        </View>
    );
}

const customStyles = StyleSheet.create({
    customMidArea: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green',
        // padding: 20,
    },
    mainTxtArea: {
        //설명글
        paddingTop: 10,
        paddingBottom: 10,
    },
    mainTxt: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    textBoxArea: {
        // flex: 1, 있으면..뒤에묻힘(?) 화면에안나옴
        width: '100%',
        height: '90%',
        borderRadius: 8,
        backgroundColor: '#f0f0f0',
        fontSize: 18,
        fontWeight: 'normal',
        padding: 15,
        paddingTop: 20,
    },
    //image 커스텀
    profileImgArea: {
        // flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'orange',
        width: wp('40%'), //width == height 한 후 radius : width/2 : image circular
        height: wp('40%'),
        marginBottom: 10,
    },
    profileImg: {
        flex: 1,
        width: wp('40%'), //width == height 한 후 radius : width/2 : image circular
        height: wp('40%'),
        borderRadius: wp('40%') / 2,
    },
    profileInfoArea: {
        flex: 1,
        // backgroundColor: 'blue',
        marginTop: 10,
    },
    editImg: {
        position: 'absolute', //요소와 겹침 가능 (관계없이)
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('10%'), //width == height 한 후 radius : width/2 : image circular
        height: wp('10%'),
        borderRadius: wp('10%') / 2,
        backgroundColor: '#f0f0f0',
        right: 7,
        bottom: 7,
    },
});
