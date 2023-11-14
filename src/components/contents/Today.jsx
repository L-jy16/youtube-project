import React from 'react'

import { todayText } from '../../data/today'

const today = () => {
    return (
        <section id='today'>
            <div className='today__inner'>
                <div className='today__thumb'>
                    <img src={todayText[0].img} alt={todayText[0].title} />
                </div>
                <div className='today__text'>
                    <span className='today'>오늘의 추천 애니</span>
                    <h3 className='title'>{todayText[0].title}</h3>
                    <p className='desc'>
                        {todayText[0].desc}
                    </p>
                    <div className="info">
                        <span className="autho">{todayText[0].author}</span>
                        <span className="data">{todayText[0].date}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default today
