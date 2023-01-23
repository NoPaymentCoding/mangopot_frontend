import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // backgroundColor: '#fc913a',
  },
  topArea: {
    flex: 1,
    // backgroundColor: 'red',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    // alignItems: 'center',
  },
  midArea: {
    flex: 3,
    // justifyContent: 'center',
    // backgroundColor: 'green',
    padding: 20,
  },
  btmArea: {
    flex: 1,
    padding: 15,
    // backgroundColor: 'yellow',
  },
  btnArea: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    // backgroundColor: 'blue',
    marginBottom: 10,
    marginTop: 10,
  },
  //상단 제목 부분 관련 style
  titleTxtArea: {
    //설명글
    paddingTop: 10,
    paddingBottom: 10,
    // backgroundColor: 'white',
  },
  titleTxt: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  //"다음으로" 버튼 관련 style
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

export default styles;
