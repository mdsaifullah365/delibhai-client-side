import React from 'react';
import facebook from '../../../../../assets/images/social/facebook.svg';
import youtube from '../../../../../assets/images/social/youtube.svg';
import playstore from '../../../../../assets/images/social/playstore.png';

const SocialLinks = () => {
  return (
    <div className="bg-gradient-to-t from-white via-white">
      <h3 className="text-[calc(4.266666vw-0.2133rem] sm:text-[25.94px] leading-[1.75] font-semibold mt-[calc(5.8866vw-0.2933rem)] sm:mt-[35.669px] mb-[calc(3.2vw-0.16rem)] sm:mb-[19.456px]">
        সোশাল মিডিয়া:
      </h3>
      <div className="flex gap-[calc(5.33333333vw-0.2933rem)] sm:gap-[35.66933px] mb-[calc(5.066vw-0.25rem)] sm:mb-[30.80px] items-center">
        <a
          href="https://www.facebook.com/delifoodbk"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={facebook}
            className="w-[calc(9.33333vw-0.4666rem)] sm:w-[56.7566px]"
            alt=""
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UCy1oRgxzbOzGYpKAuTB4NXQ"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={youtube}
            className="w-[calc(9.33333vw-0.4666rem)] sm:w-[56.7566px]"
            alt=""
          />
        </a>
        <span>
          <img
            src={playstore}
            alt=""
            className="w-[calc(9.33333vw-0.4666rem)] sm:w-[56.7566px]"
          />
        </span>
      </div>
    </div>
  );
};

export default SocialLinks;
