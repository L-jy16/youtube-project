import React from 'react'

const Home = () => {
    return (
        <section id='today'>
            <div className='today__inner'>
                <div className='today__thumb'>

                </div>
                <div className='today__text'>
                    <span>오늘의 추천 애니</span>
                    <h3 className='title'>[애니 리뷰] 주워온 고양이 때문에 어느샌가 인간적으로 타락한 사연 / 야무진 고양이 1화</h3>
                    <p className='desc'>
                        안녕하세요! 여러분, 오늘의 추천 애니를 소개합니다.<br />
                        2023년 3분기 애니메이션으로 유능한 고양이 유키치와 그의 덜렁이 집사 사쿠에 관한 일상 애니메이션입니다.<br />
                        힐링과 휴식이 필요하시다면 안락한 침대에 누워서 완결까지 달려보시는게 어떨까요?!
                    </p>
                    <div className="info">
                        <span className="autho">SeoHa</span>
                        <span className="data">2023.07.10</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
