import React, {useState, Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import MultiSelect from 'react-native-multiple-select';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {StackScreenProps} from '@react-navigation/stack';

//Project Stack
import {ProjectStackParamList} from '../../types/stacks/ProjectStackTypes';

//field type
import fields from '../../types/project/ProjectPostingTypes';

//export type
export type ProjectPostingScreenProps = StackScreenProps<
  ProjectStackParamList,
  'Posting'
>;

//날짜 포맷팅 함수
Date.prototype.format = function (f) {
  if (!this.valueOf()) return ' ';

  var weekName = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];
  var d = this;

  return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function ($1) {
    switch ($1) {
      case 'yyyy':
        return d.getFullYear();
      case 'yy':
        return (d.getFullYear() % 1000).zf(2);
      case 'MM':
        return (d.getMonth() + 1).zf(2);
      case 'dd':
        return d.getDate().zf(2);
      case 'E':
        return weekName[d.getDay()];
      case 'HH':
        return d.getHours().zf(2);
      case 'hh':
        return ((h = d.getHours() % 12) ? h : 12).zf(2);
      case 'mm':
        return d.getMinutes().zf(2);
      case 'ss':
        return d.getSeconds().zf(2);
      case 'a/p':
        return d.getHours() < 12 ? '오전' : '오후';
      default:
        return $1;
    }
  });
};

String.prototype.string = function (len) {
  var s = '',
    i = 0;
  while (i++ < len) {
    s += this;
  }
  return s;
};
String.prototype.zf = function (len) {
  return '0'.string(len - this.length) + this;
};
Number.prototype.zf = function (len) {
  return this.toString().zf(len);
};

const ProjectPosting = ({navigation}: ProjectPostingScreenProps) => {
  const [locPickerValue, setLocPickerValue] = useState('서울'); //지역 컨트롤

  //마감일 컨트롤
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [text, onChangeText] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('dateFormat: ', date.format('yyyy/MM/dd'));
    hideDatePicker();
    onChangeText(date.format('yyyy/MM/dd'));
  };

  const [selectedItems, setSelectedItems] = useState([]);

  const onSelectedItemsChange = selectedItems => {
    if (selectedItems.length > 5) {
      Alert.alert('태그는 5개까지만 설정할 수 있습니다.');
      selectedItems.pop();
    } else {
      setSelectedItems(selectedItems);

      for (let i = 0; i < selectedItems.length; i++) {
        var tempItem = fieldTags.find(
          item => item.fieldId === selectedItems[i],
        );
        console.log(tempItem);
      }
    }
  };

  //인원설정
  const [front, setFront] = useState('0');
  const [back, setBack] = useState('0');

  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <View style={styles.title}>
          <Text style={styles.titleText}>글쓰기</Text>
        </View>
        <View style={styles.headerBtnGroup}>
          <TouchableOpacity>
            <View style={styles.cancelBtn}>
              <Text style={styles.cancelText}>취소</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View style={styles.completeBtn}>
              <Text style={styles.completeText}>완료</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.locAndDate}>
        <Text style={styles.locTitle}>지역:</Text>
        <View>
          <Picker
            style={styles.locStyle}
            mode="dialog"
            selectedValue={locPickerValue}
            //지역명 컴포넌트로 빼야함
            onValueChange={item => setLocPickerValue(item)}>
            <Picker.Item label="서울" value="서울" />
            <Picker.Item label="인천" value="인천" />
            <Picker.Item label="경기" value="경기" />
            <Picker.Item label="수원" value="수원" />
            <Picker.Item label="광주" value="광주" />
            <Picker.Item label="부산" value="부산" />
            <Picker.Item label="대구" value="대구" />
            <Picker.Item label="울산" value="울산" />
            <Picker.Item label="대전" value="대전" />
            <Picker.Item label="충북" value="충북" />
            <Picker.Item label="충남" value="충남" />
            <Picker.Item label="경북" value="경북" />
            <Picker.Item label="경남" value="경남" />
            <Picker.Item label="전남" value="전남" />
            <Picker.Item label="전북" value="전북" />
            <Picker.Item label="제주" value="제주" />
          </Picker>
        </View>
        <Text style={styles.dateTitle}>마감일:</Text>
        <View>
          <TouchableOpacity onPress={showDatePicker}>
            <TextInput
              style={styles.dateStyle}
              placeholder="선택하세요"
              editable={false}
              value={text}
            />
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <TextInput
          style={styles.contentNameInput}
          placeholder="제목을 입력하세요(*필수)"
        />
        <TextInput
          style={styles.contentNameText}
          placeholder="내용을 입력하세요."
          multiline={true}
        />
      </View>
      <View style={styles.tag}>
        <Text style={styles.tagText}>태그 (최대 5개)</Text>
        <View style={styles.fieldContainer}>
          <MultiSelect
            hideTags
            items={fieldTags}
            uniqueKey="fieldId"
            onSelectedItemsChange={onSelectedItemsChange}
            selectedItems={selectedItems}
            selectText="분야 태그"
            searchInputPlaceholderText="태그를 검색해주세요"
            onChangeInput={tagtext => console.log(tagtext)}
            tagRemoveIconColor="#CCC"
            tagBorderColor="#CCC"
            tagTextColor="#CCC"
            selectedItemTextColor="#CCC"
            selectedItemIconColor="#CCC"
            itemTextColor="#000"
            displayKey="fieldName"
            searchInputStyle={{color: '#CCC'}}
            hideSubmitButton={true}
            fixedHeight={true}
          />
        </View>
        <View style={styles.selectedTag}>
          {selectedItems.map(fieldId => (
            <View>
              <View style={styles.selectedTagArea}>
                <Text>{fieldTags[fieldId].fieldName}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.position}>
        <Text style={[{color: 'black'}, {paddingLeft: 10}, {paddingTop: 10}]}>
          인원 설정
        </Text>
        <View style={[{flexDirection: 'row'}, {marginBottom: -15}]}>
          <Text style={[{color: 'black'}, {paddingLeft: 10}, {paddingTop: 14}]}>
            프론트엔드
          </Text>
          <TextInput
            value={front}
            onChangeText={event => setFront(event)}
            style={{paddingLeft: 14}}
            placeholder="숫자"></TextInput>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={[{color: 'black'}, {paddingLeft: 10}, {paddingTop: 14}]}>
            백엔드
          </Text>
          <TextInput
            onChangeText={event => setBack(event)}
            value={back}
            style={{paddingLeft: 14}}
            placeholder="숫자"></TextInput>
        </View>
      </View>
    </View>
  );
};

export default ProjectPosting;

const styles = StyleSheet.create({
  header: {
    flex: 0.3,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: '#E6E6E6',
  },

  title: {
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  titleText: {
    color: '#000',
    fontWeight: 'bold',
  },

  headerBtnGroup: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },

  cancelBtn: {
    width: '90%',
    height: '60%',
    marginRight: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderColor: 'white',
  },

  cancelText: {
    color: '#000',
    fontWeight: 'bold',
  },

  completeBtn: {
    width: '90%',
    height: '60%',
    marginRight: 30,
    backgroundColor: '#F27649',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },

  completeText: {
    fontWeight: 'bold',
    color: 'white',
  },

  locAndDate: {
    flex: 0.3,
    flexDirection: 'row',
    //backgroundColor: 'green',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderBottomColor: '#E6E6E6',
  },

  locTitle: {
    marginLeft: 10,
    fontWeight: 'bold',
    color: 'black',
  },

  locStyle: {
    width: 110,
    color: 'black',
  },

  dateTitle: {
    fontWeight: 'bold',
    color: 'black',
  },

  dateStyle: {
    alignContent: 'center',
    justifyContent: 'flex-start',
    margin: 15,
    height: 40,
    fontWeight: 'bold',
    color: 'black',
  },

  contentNameInput: {
    borderBottonWidth: 0.3,
    backgroundColor: 'white',
    borderBottomColor: '#E6E6E6',
    fontSize: 13,
    marginLeft: 4,
  },

  contentNameText: {
    fontSize: 12,
    textAlignVertical: 'center',
    paddingLeft: 10,
    backgroundColor: 'white',
    marginLeft: 4,
  },

  content: {
    flex: 2,
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderBottomColor: '#E6E6E6',
  },
  tag: {
    flex: 1.5,
    backgroundColor: 'white',
    borderBottomColor: '#E6E6E6',
    borderBottomWidth: 2,
  },
  tagText: {
    paddingTop: 10,
    marginLeft: 10,
    fontWeight: 'bold',
    color: 'black',
    fontSize: 14,
  },

  fieldContainer: {
    paddingLeft: 12,
    paddingTop: 10,
    backgroundColor: 'white',
  },

  fieldtext: {
    padding: 12,
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },

  selectedTag: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  selectedTagArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fc913a',
    padding: 4,
    borderRadius: 5,
    marginLeft: 10,
  },

  position: {
    flex: 1.5,
    backgroundColor: 'white',
  },
});

//임시 데이터
const fieldTags: fields[] = [
  {
    fieldId: 0,
    fieldName: 'react',
  },
  {
    fieldId: 1,
    fieldName: 'react-native',
  },
  {
    fieldId: 2,
    fieldName: 'spring',
  },
  {
    fieldId: 3,
    fieldName: 'DJango',
  },
  {
    fieldId: 4,
    fieldName: 'MariaDB',
  },
  {
    fieldId: 5,
    fieldName: 'Oracle',
  },
  {
    fieldId: 6,
    fieldName: 'Vue.js',
  },
  {
    fieldId: 7,
    fieldName: 'typescript',
  },
  {
    fieldId: 8,
    fieldName: 'java',
  },
  {
    fieldId: 9,
    fieldName: 'MatLab',
  },
  {
    fieldId: 10,
    fieldName: 'SystemOS',
  },
];
