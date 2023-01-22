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

//types import
import {UserStackParamList} from '../../types/stacks/StackTypes';

export type SplashScreenProps = StackScreenProps<UserStackParamList, 'Splash'>;

export default function Users({navigation}: SplashScreenProps) {
  return (
    <View style={styles.container}>
      <View style={{flex: 0.8}} />
      <View style={{flex: 2, justifyContent: 'center'}}>
        <View style={styles.logoArea}>
          <Image
            source={require('../../assets/images/mangopot_splash_orange.png')}
            style={{flex: 0.6, resizeMode: 'contain'}}
          />
        </View>
      </View>
      <View style={{flex: 1, padding: 15}}>
        <View style={styles.btnArea} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fc913a',
  },
  logoArea: {
    flex: 0.65,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
  btnArea: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    // backgroundColor: 'blue',
    marginBottom: 10,
    marginTop: 10,
  },
});
