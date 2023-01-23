import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import styles from './style';

//types import
import {UserStackParamList} from '../../types/stacks/StackTypes';

export type SplashScreenProps = StackScreenProps<UserStackParamList, 'Splash'>;

export default function Users({navigation}: SplashScreenProps) {
  return (
    <View style={styles.container}>
      <View style={styles.topArea} />
      <View style={customStyles.midArea}>
        <View style={customStyles.logoArea}>
          <Image
            source={require('../../assets/images/mangopot_splash_orange.png')}
            style={{flex: 0.6, resizeMode: 'contain'}}
          />
        </View>
      </View>
      <View style={styles.btmArea}>
        {/*<View style={styles.btnArea} />*/}
        <View style={styles.btnArea}>
          <TouchableOpacity onPress={() => navigation.navigate('Nickname')}>
            <Image
              source={require('../../assets/images/kakao_login_large_wide.png')}
              style={{
                resizeMode: 'contain',
                flex: 1,
                maxWidth: '100%',
                //  가로폭 맞추기 maxWidth : 100% / 세로폭 맞추기 : resizeMode : 'contain'
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.btnArea} />
      </View>
    </View>
  );
}

const customStyles = StyleSheet.create({
  logoArea: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
  midArea: {
    flex: 3,
    justifyContent: 'center',
    // backgroundColor: 'green',
    padding: 20,
  },
});
