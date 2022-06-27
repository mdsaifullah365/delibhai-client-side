import React from 'react';

const Loading = () => {
  return (
    <div className='min-h-[calc(100vh-64px)] flex justify-center pt-12'>
      <div className='w-10 h-10 border-b-2 border-primary rounded-full animate-spin'></div>
    </div>
  );
};

export default Loading;
