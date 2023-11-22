import React from 'react'
import { Link } from 'react-router-dom'

import { todayText } from '../../data/today'

const today = () => {
    return (
        <section id='today'>
            <div className='today__inner'>
                <div className='today__thumb play__icon'>
                    <Link to={`/video/${todayText[0].videoId}`}><img src={todayText[0].img} alt={todayText[0].title} /></Link>
                </div>
                <div className='today__text'>
                    <span className='today'>오늘의 추천 애니</span>
                    <Link to={`/video/${todayText[0].videoId}`}>
                        <h3 className='title'>{todayText[0].title}</h3>
                    </Link>
                    <p className='desc'>
                        {todayText[0].desc}
                    </p>
                    <div className="info">
                        <Link to={`/channel/${todayText[0].channelId}`}>
                            <span className="autho">{todayText[0].author}</span>
                        </Link>
                        <span className="data">{todayText[0].date}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default today
