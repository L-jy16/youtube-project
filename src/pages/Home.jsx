import React, { useEffect, useState } from 'react';
import { fetchFromAPI } from '../utils/api';

import Today from '../components/contents/Today';
import Youtuber from '../components/contents/Youtuber';
import Main from '../components/section/Main';
import VideoSlider from '../components/video/VideoSlider';

const Home = () => {
    const [channelVideo, setChannelVideo] = useState([]);
    const [channelVideo2, setChannelVideo2] = useState([]);
    const [channelVideo3, setChannelVideo3] = useState([]);
    const [channelVideo4, setChannelVideo4] = useState([]);
    const [channelVideo5, setChannelVideo5] = useState([]);

    useEffect(() => {
        const v1 = "UCHtqZO9YM7EtpuKhNKVWHDQ"
        const v2 = "UClK-4_77WOTHBArekj-WRpA"
        const v3 = "UC_g2mAMpC3X_aJCWNdbUHug"
        const v4 = "UCOxAfDaiOuJHyiKBo6TBjXA"
        const v5 = "UCYH0isveXrujjCH4Z2F4p4g"

        const fetchResults = async () => {
            try {
                const videoData = await fetchFromAPI(`search?channelId=${v1}&part=snippet&order=date`);
                setChannelVideo(videoData.items);
                const videoData2 = await fetchFromAPI(`search?channelId=${v2}&part=snippet&order=date`);
                setChannelVideo2(videoData2.items);
                const videoData3 = await fetchFromAPI(`search?channelId=${v3}&part=snippet&order=date`);
                setChannelVideo3(videoData3.items);
                const videoData4 = await fetchFromAPI(`search?channelId=${v4}&part=snippet&order=date`);
                setChannelVideo4(videoData4.items);
                const videoData5 = await fetchFromAPI(`search?channelId=${v5}&part=snippet&order=date`);
                setChannelVideo5(videoData5.items);
            } catch (error) {
                console.log("Eroor -> ", error);
            }
        }


        fetchResults();
    }, []);

    return (
        <Main
            title="애니메이션 리뷰 유튜버"
            description="애니메이션 리뷰 유튜버 모음 사이트에 오신 것을 환영합니다."
        >
            <Today />
            <Youtuber />

            {/* 애니집합소 */}
            <VideoSlider videos={channelVideo} title="애니집합소 유튜버의 최신 영상입니다." name='v1' />
            <VideoSlider videos={channelVideo2} title="아카캉 유튜버의 최신 영상입니다." name='v2' />
            <VideoSlider videos={channelVideo3} title="미애니마니아 유튜버의 최신 영상입니다." name='v3' />
            <VideoSlider videos={channelVideo4} title="작은방덕후 유튜버의 최신 영상입니다." name='v4' />
            <VideoSlider videos={channelVideo5} title="덕양소 유튜버의 최신 영상입니다." name='v5' />

        </Main>
    )
}

export default Home
