import React from 'react';

function Submit() {
  return (
    <div className='grid grid-cols-10 bg-gradient-to-br from-cyan-800 to-rose-500'>
      <div className='flex w-full h-screen col-span-10'>
        <div className='flex flex-col mt-20 lg:m-auto text-center space-y-5'>
          <h1 className='text-2xl underline decoration-pink-600 text-white lg:text-3xl'>
            Danke
          </h1>
          <h1 className='text-xl w-[70%] flex mx-auto justify-center text-gray-300'>
            Ihre Antwort ist eingegangen
          </h1>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 mx-auto text-white animate-bounce '
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19 14l-7 7m0 0l-7-7m7 7V3'
            />
          </svg>
          <div
            // onClick={() => {
            //   homeScreenHandler(data.questionnaire.questions);
            //   navigate('/');
            // }}
            className='  px-10 mx-auto text-gray-200 rounded-xl uppercase '
          >
            UNSER TEAM WIRD SIE INNERHALB VON 2 BIS 3 ARBEITSTAGEN KONTAKTIEREN
          </div>
        </div>
      </div>
    </div>
  );
}

export default Submit;
