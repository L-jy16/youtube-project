import React from 'react'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';

const VideoMainSlider = ({ name, videos, title }) => {
    return (
        <section id={name}>
            <h2>{title}</h2>

            <div className="video__slider">
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
                    {/* video slides */}
                    {videos.map((video, key) => (
                        <SwiperSlide key={key}>
                            <div className="video">
                                <div className="video__thumb play__icon">
                                    <Link
                                        to={`/video/${video.id.videoId}`}
                                        style={{ backgroundImage: `url(${video.snippet.thumbnails.high.url})` }}>
                                    </Link>
                                </div>
                                <div className="video__info">
                                    <h3 className='title'>
                                        <Link to={`/video/${video.id.videoId}`}>{video.snippet.title}</Link>
                                    </h3>
                                    <p className='desc'>
                                        {video.snippet.description}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default VideoMainSlider;