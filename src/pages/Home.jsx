import React from 'react';

import Today from '../components/contents/Today';
import Youtuber from '../components/contents/Youtuber';
import Main from '../components/section/Main';

const Home = () => {
    return (
        <Main
            title="애니메이션 리뷰 유튜버"
            description="애니메이션 리뷰 유튜버 모음 사이트에 오신 것을 환영합니다."
        >
            <Today />
            <Youtuber />

        </Main>
    )
}

export default Home
