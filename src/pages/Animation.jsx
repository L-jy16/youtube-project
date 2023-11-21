import React from 'react'

import { animationText } from '../data/animation'
import { Link } from 'react-router-dom'
import Main from '../components/section/Main';

const Animation = () => {
    return (
        <Main
            title="애니메이션 리뷰 유튜버 모음"
            description="애니메이션 리뷰 유튜버 모음 페이지입니다."
        >
            <section id='youtuberPage'>
                <h2>💫애니메이션 유튜버 모음</h2>
                <div className="animation__inner">
                    {animationText.map((animation, key) => (
                        <div className="animation play__icon" key={key}>
                            <div className="animation__img">
                                <Link to={`/channel/${animation.channelId}`}>
                                    <img src={animation.img} alt={animation.author} />
                                </Link>
                            </div>
                            <div className="animation__info">{animation.author}</div>
                        </div>
                    ))}
                </div>
            </section>
        </Main >

    )
}

export default Animation
