import axios from 'axios';
import {posting} from '../types/project/ProjectPostingTypes';
import {AOS_SERVER_URL} from '../types/datas';

class projectServices {
  //글쓰기
  async Posting(
    paramLoc: string,
    paramTitle: string,
    paramContent: string,
    paramFront: string,
    paramBack: string,
    paramDeadline: string,
  ) {
    const locName = paramLoc;
    const userNickName = '이하연';
    const deadline = paramDeadline.replace(/\//g, '-');
    const title = paramTitle;
    const context = paramContent;
    const interest = ['spring', 'mySQL'];
    const position = [
      {name: '백엔드 개발자', value: Number(paramBack)},
      {name: '프론트엔드 개발자', value: Number(paramFront)},
    ];

    const dataString: posting = {
      locName: locName,
      userNickName: userNickName,
      deadline: deadline,
      title: title,
      context: context,
      interest: interest,
      position: position,
    };

    const data = JSON.stringify(dataString);
    console.log(data);

    try {
      const response = await axios.post(AOS_SERVER_URL + '/project', data, {
        headers: {
          'Content-Type': `application/json`,
        },
      });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new projectServices();
