import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function Users() {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}} />
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={styles.logoArea}>
          <Image
            source={require('../../assets/images/mangopot_logo.png')}
            style={{flex: 1, resizeMode: 'contain'}}
          />
        </View>
      </View>
      <View style={{flex: 1, padding: 15}}>
        <View style={styles.btnArea}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/kakao_login_large_wide.png')}
              style={{
                resizeMode: 'contain',
                flex: 1,
                maxWidth: '100%',
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.btnArea}>
          <TouchableOpacity>
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
    backgroundColor: '#F27649',
  },
  logoArea: {
    flex: 0.5,
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
