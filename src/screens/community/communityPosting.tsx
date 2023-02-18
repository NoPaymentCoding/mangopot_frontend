import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import {StackScreenProps} from '@react-navigation/stack';

//community Stack
import {CommunityStackParamList} from '../../types/stacks/CommunityStackTypes';

//field type
import fields from '../../types/project/ProjectPostingTypes';

//export type
export type CommunityPostingScreenProps = StackScreenProps<
  CommunityStackParamList,
  'Posting'
>;

const CommunityPosting = ({navigation}: CommunityPostingScreenProps) => {
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
    </View>
  );
};

export default CommunityPosting;

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
