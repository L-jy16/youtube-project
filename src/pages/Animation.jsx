import React from 'react'

import { animationText } from '../data/animation'
import { Link } from 'react-router-dom'

const Animation = () => {
    return (
        <section id='youtuberPage'>
            <h2>💫애니메이션 유튜버 모음</h2>
            <div className="animation__inner">
                {animationText.map((animation, key) => (
                    <div className="animation play__icon" key={key}>
                        <div className="animation__img">
                            <Link to={`/chnnel/${animation.channelId}`}>
                                <img src={animation.img} alt={animation.author} />
                            </Link>
                        </div>
                        <div className="animation__info">{animation.author}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Animation
