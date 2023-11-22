import React from 'react'
import { Link } from 'react-router-dom';

import { todayText } from '../data/today'
import Main from '../components/section/Main';

const Today = () => {
    return (
        <Main
            title="오늘의 추천 영상"
            description="애니메이션 리뷰 유튜버 영상 중 오늘의 추천 영상입니다."
        >
            <section id='todayPage'>
                {todayText.map((today, key) => (
                    <div className='today__inner' key={key}>
                        <div className='today__thumb play__icon'>
                            <Link to={`/video/${today.videoId}`}>
                                <img src={today.img} alt={today.title} />
                            </Link>
                        </div>
                        <div className='today__text'>
                            <span className='today'>오늘의 추천 애니</span>
                            <Link to={`/video/${today.videoId}`}>
                                <h3 className='title'>{today.title}</h3>
                            </Link>
                            <p className='desc'>
                                {today.desc}
                            </p>
                            <div className="info">
                                <Link to={`/channel/${today.channelId}`}>
                                    <span className="autho">{today.author}</span>
                                </Link>
                                <span className="data">{today.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </section >
        </Main>

    )
}

export default Today
