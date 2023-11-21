import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';
import ReactPlayer from 'react-player';

import { AiFillPlaySquare } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";

import Main from '../components/section/Main';

const Video = () => {

    const { videoId } = useParams();
    const [videoDetail, setVideoDetail] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`)
            .then((data) => {
                console.log(data)
                setVideoDetail(data.items[0])
            })
            .finally(() => {
                setLoading(false);
            })
    }, [videoId])

    const videoPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main
            title="애니메이션 리뷰 유튜버 채널"
            description="애니메이션 리뷰 유튜버의 영상을 볼 수 있는 페이지입니다."
        >
            <section id='videoPage' className={videoPageClass}>
                <h2 className='blind'>비디오</h2>
                {videoDetail && (
                    <div className='video__View'>
                        <div className='video__play'>
                            <ReactPlayer
                                playing={true}
                                url={`https://www.youtube.com/watch?v=${videoId}`}
                                width='100%'
                                height='100%'
                                style={{ position: 'absolute', top: 0, left: 0 }}
                            />
                        </div>
                        <div className='video__info'>
                            <h2 className='video__title'>📣{videoDetail.snippet.title}</h2>
                            <div className='video__channel'>
                                <div className='id'>
                                    <Link to={`/channel/${videoDetail.snippet.channelId}`}>{videoDetail.snippet.channelTitle}</Link>
                                </div>
                                <div className="count">
                                    <span className="view"><AiFillPlaySquare />{videoDetail.statistics.viewCount}</span>
                                    <span className="like"><AiFillLike />{videoDetail.statistics.likeCount}</span>
                                    <span className="comment"><AiOutlineComment />{videoDetail.statistics.commentCount}</span>
                                </div>
                                <div className="video__desc">
                                    {videoDetail.snippet.description}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </section>
        </Main>

    )
}

export default Video
