import React from 'react'

import { animationText } from '../../data/animation'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';

const youtuber = () => {
    return (
        <section id='youtuber'>
            <h2>애니메이션 관련 유튜버 모음</h2>
            <div className="animation__inner">
                <Swiper
                    slidesPerView={9}
                    spaceBetween={20}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        100: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        400: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        600: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        960: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 6,
                            spaceBetween: 20,
                        },
                        1600: {
                            slidesPerView: 7,
                            spaceBetween: 20,
                        },


                    }}

                    modules={[Autoplay, Navigation]}
                    className="mySwiper"

                >
                    {animationText.map((animation, key) => (
                        <SwiperSlide className="animation play__icon" key={key}>
                            <div className="animation__img">
                                <Link to={`/chnnel/${animation.channelId}`}>
                                    <img src={animation.img} alt={animation.author} />
                                </Link>
                            </div>
                            <div className="animation__info">{animation.author}</div>
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default youtuber
