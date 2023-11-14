import React from 'react'

import { todayText } from '../data/today'

const Today = () => {
    return (
        <section id='todayPage'>
            {todayText.map((today, key) => (
                <div className='today__inner' key={key}>
                    <div className='today__thumb'>
                        <img src={today.img} alt={today.title} />
                    </div>
                    <div className='today__text'>
                        <span className='today'>오늘의 추천 애니</span>
                        <h3 className='title'>{today.title}</h3>
                        <p className='desc'>
                            {today.desc}
                        </p>
                        <div className="info">
                            <span className="autho">{today.author}</span>
                            <span className="data">{today.date}</span>
                        </div>
                    </div>
                </div>
            ))}
        </section >
    )
}

export default Today
