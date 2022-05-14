import React, { useEffect, useRef, useState } from 'react';
import { ArrowNarrowRightIcon, CheckIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';
import { Animated } from 'react-animated-css';

function Question({
  data,
  number,
  prevQuestionHandler,
  nextQuestionHandler,
  totalLength,
  currentQuestion,
}) {
  const inputRef = useRef();
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    setVisible(true);
  }, [data]);

  return (
    <div className='flex w-full h-screen  bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4 '>
      <div
        className='flex flex-col m-auto min-w-[70%] min-h-[80%] bg-cyan-800 rounded-lg shadow-2xl'
        style={{
          transition: 'all .1s',
          opacity: 1,
        }}
      >
        <h1 className='flex flex-col justify-center items-center pt-10 text-white text-2xl'>
          Questionnair
        </h1>
        {visible && (
          <Animated
            animationIn='fadeIn'
            animationInDuration={3000}
            isVisible={visible}
          >
            <div className='flex flex-col my-10 px-20 space-y-5'>
              <div className='flex flex-row items-start space-x-3'>
                <h1 className='text-white flex flex-row items-center'>
                  {number + 1}
                  <span>
                    <ArrowNarrowRightIcon className='h-4 w-4 text-white ml-1' />
                  </span>
                </h1>

                <h1 className='text-white text-sm'>{data?.headline}</h1>
              </div>
              {data?.multiline === 'false' && (
                <div className='flex flex-1'>
                  <input
                    ref={inputRef}
                    type='text'
                    placeholder='DD/MM/YYYY'
                    className=' flex flex-1 outline-none border-0 bg-transparent border-b-2 text-white text-xl'
                  />
                </div>
              )}

              {data?.multiline === 'true' && (
                <div className='flex flex-1'>
                  <textarea
                    ref={inputRef}
                    type='text'
                    rows='5'
                    placeholder='Write your comments here'
                    className=' flex flex-1 outline-none bg-transparent border text-white text-sm py-1 px-2 resize-none'
                  />
                </div>
              )}

              <div className='flex flex-row justify-between'>
                <button
                  className='bg-gray-900 text-white py-2 px-5 text-xs hover:bg-gray-800 rounded-sm'
                  onClick={() => {
                    setVisible(false);
                    prevQuestionHandler();
                  }}
                >
                  Previous
                </button>
                {currentQuestion === totalLength - 1 ? (
                  <button
                    className='bg-gray-900 text-white py-2 px-5 text-xs'
                    onClick={() => {
                      navigate('/');
                    }}
                  >
                    Finish
                  </button>
                ) : (
                  <button
                    className='bg-gray-900 text-white py-2 px-5 text-xs'
                    onClick={() => {
                      setVisible(false);
                      nextQuestionHandler();
                    }}
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </Animated>
        )}
      </div>
    </div>
  );
}

export default Question;
