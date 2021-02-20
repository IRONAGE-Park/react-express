import axios from 'axios';
import { Paths } from '../paths/index';

const notices = [
    {
        admin_id: null,
        content:
            '<p>안녕하세요 인바이즈입니다.&nbsp;</p><p><br></p><p>자사 홈페이지 내 소프트웨어 다운로드가 진행되지 않는 불편을 겪으신 점 사과의 말씀 올립니다.</p><p><br></p><p>현재 맥용 소프트웨어 업로드를 3월 이내 예정으로 하였으나, 설연휴로 인하여 제품 배송이 예정 일정보다 더 빨리 진행되었습니다.</p><p><br></p><p>오늘 받아보신 분들에 한해서 테스트버전을 2월 7일 오전내 배포할 예정이며, 불편하시더라도 추후 업데이트되는 맥용 소프트웨어로 업데이트 해주시길 바랍니다.</p><p><br></p><p>또한 현재 소프트웨어는 스마트스크린이 실행될 수 있으나, 추가정보에서 실행버튼을 눌러 다운로드 를 진행합니다. 이는 아무 문제 없으니 안심하고 사용하셔도 됩니다.</p><p><br></p><p>다시 한번 불편을 겪게하여 죄송합니다.</p><p><br></p><p>빠른 대처하여 사용에 불편없도록 하겠습니다.</p><p><br></p><p>감사합니다.</p>',
        createdAt: '2021-02-06',
        hit: 122,
        notice_id: 1,
        title: '맥용 소프트웨어 다운로드 안내',
        updatedAt: '2021-02-06',
    },
    {
        admin_id: null,
        content:
            '<p>안녕하세요. 인바이즈입니다.&nbsp;</p><p><br></p><p>자사 홈페이지 내 소프트웨어 다운로드가 진행되지 않는 불편을 겪으신 점 사과의 말씀 올립니다.</p><p><br></p><p>현재 소프트웨어 업로드를 2월 15일 예정으로 하였으나, 설연휴로 인하여 제품 배송이 예정 일정보다 더 빨리 진행되었습니다.</p><p><br></p><p>오늘 받아보신 분들에 한해서 테스트버젼을 배포할 예정이며, 불편하시더라도 추후 업데이트되는 소프트웨어로 업데이트 해주시길 바랍니다.</p><p><br></p><p>또한 현재 소프트웨어는&nbsp;스마트스크린이 실행될 수 있으나, 추가정보에서 실행버튼을 눌러 다운로드를 진행합니다. 이는 아무 문제 없으니 안심하고 사용하셔도 됩니다.</p><p><br></p><p>다시 한번 불편을 겪게하여 죄송합니다.</p><p><br></p><p>빠른 대처하여 사용에 불편없도록 하겠습니다.</p><p><br></p><p>감사합니다.</p>',
        createdAt: '2021-02-06',
        hit: 162,
        notice_id: 2,
        title: '윈도우용 소프트웨어 다운로드 안내',
        updatedAt: '2021-02-06',
    },
];

export const requsetGetNoticeList = async (offset, limit) => {
    // const req = `${Paths.api}support/notice?offset=10?limit=10`;

    // const config = {
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    // };

    // const res = await axios.get(req, config);
    // return res;
    return notices;
};

export const requsetGetNotice = async (notice_id) => {
    const notice = notices.filter((item) => {
        if (parseInt(item.notice_id) === parseInt(notice_id)) {
            return item;
        }
    });
    return notice;
    // const req = `${Paths.api}support/notice/${notice_id}`;

    // const config ={
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    // };
    // const res = await axios.get(req,config);
    // return res;
};
