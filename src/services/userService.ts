import axios from 'axios';
import {positions, interests} from '../types/users/SignUpTypes';
import {SERVER_URL} from '../types/datas';

class userService {
    //position page : 모든 position조회
    getPositionList() {
        return axios.get<positions[]>(SERVER_URL + '/positions/list', {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    //interest page : 모든 interest조회
    getInterestList() {
        return axios.get<interests[]>(SERVER_URL + '/interests/list', {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    //nickname page : 닉네임 중복 여부 조회
    isNicknameValidate(nickname: string) {
        return axios.get<boolean>(
            SERVER_URL + `/validation?nickname=${nickname}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        );
    }
}

export default new userService();
