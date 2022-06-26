import React from 'react';
import facebook from '../../../../../images/social/facebook.svg';
import youtube from '../../../../../images/social/youtube.svg';

const SocialLinks = () => {
  return (
    <div className='bg-gradient-to-t from-white via-white'>
      <h3 className='text-[4.266666vw] leading-[7.466666vw] lg:text-xl lg:leading-normal font-semibold mt-[6.4vw] mb-[2.666666vw] lg:mt-6 lg:mb-3 pt-12'>
        সোশাল মিডিয়া:
      </h3>
      <div className='flex gap-[5.33333333vw] lg:gap-5 mb-[5.33333333vw] text-[9.333333vw] lg:mb-3 items-center'>
        <a
          href='https://www.facebook.com/delifoodbk'
          target='_blank'
          rel='noreferrer'>
          <img src={facebook} className='w-[9.33333vw] lg:w-10' alt='' />
        </a>
        <a
          href='https://www.youtube.com/channel/UCy1oRgxzbOzGYpKAuTB4NXQ'
          target='_blank'
          rel='noreferrer'>
          <img src={youtube} className='w-[9.33333vw] lg:w-10' alt='' />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
