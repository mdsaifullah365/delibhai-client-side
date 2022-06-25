import React, { useState, useEffect } from 'react';
import getYouTubeID from 'get-youtube-id';
import YouTube from 'react-youtube';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

const ItemCarousel = ({ img1, img2, video, price, name }) => {
  const [id, setId] = useState('');
  useEffect(() => {
    setId(getYouTubeID(video));
  }, [video]);

  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
      rel: 0,
      controls: 0,
      disablekb: 1,
      fs: 0,
      modestbranding: 1,
      enablejsapi: 1,
      origin: 'https://www.delibhai.com',
    },
  };

  return (
    <div className='shadow-3xl rounded-b-[2.6666666vw] overflow-hidden  '>
      <Swiper
        className='mySwiper'
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
        }}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        loop={true}
        modules={[Autoplay, EffectCreative]}>
        <SwiperSlide>
          <div className='relative w-full h-[54vw] lg:max-h-[calc(100vh-175px)]'>
            <img className='w-full h-full' src={img1} alt='' />
            {/* Dark Overlay */}
            <div
              className={`absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-t from-black to-transparent opacity-75`}></div>
            {/* Price and Title */}
            <div className='absolute right-0 bottom-[3.2vw] left-0 container'>
              <p className='text-[#32FFCB] text-[6.4vw] leading-[8vw] font-bold'>
                ৳ {price} টাকা
              </p>
              <p className='text-white text-[8.533333vw] leading-[13.866666vw] font-bold'>
                {name}
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative w-full h-[54vw] lg:max-h-[calc(100vh-175px)]'>
            <img className='w-full h-full' src={img2} alt='' />
            {/* Dark Overlay */}
            <div
              className={`absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-t from-black to-transparent opacity-75`}></div>
            {/* Price and Title */}
            <div className='absolute right-0 bottom-[3.2vw] left-0 container'>
              <p className='text-[#32FFCB] text-[6.4vw] leading-[8vw] font-bold'>
                ৳ {price} টাকা
              </p>
              <p className='text-white text-[8.533333vw] leading-[13.866666vw] font-bold'>
                {name}
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-[54vw] lg:max-h-[calc(100vh-175px)]'>
            <YouTube
              className='w-full h-full'
              videoId={id}
              opts={opts}
              onReady={onPlayerReady}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ItemCarousel;
