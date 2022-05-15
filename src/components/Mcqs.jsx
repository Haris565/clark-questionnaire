import React, { useEffect, useState } from 'react';
import { ArrowNarrowRightIcon, CheckIcon } from '@heroicons/react/solid';
import { Animated } from 'react-animated-css';
import { useNavigate } from 'react-router-dom';

function Mcqs({
  data,
  number,
  mcqsSelectHandler,
  prevQuestionHandler,
  nextQuestionHandler,
  currentQuestion,
  totalLength,
}) {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setVisible(true);
  }, [data]);

  return (
    <div className='flex min-w-full min-h-screen  bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4 '>
      <div className='flex flex-col m-auto min-w-[70%] min-h-[80%] bg-cyan-800 rounded-lg shadow-2xl'>
        <h1 className='flex flex-col justify-center items-center pt-10 text-white text-2xl'>
          Questionnair
        </h1>
        {visible && (
          <Animated
            animationIn='fadeIn'
            animationInDuration={4000}
            isVisible={visible}
          >
            <div className='flex flex-col my-10 px-20 space-y-5'>
              <div className='flex flex-row items-start space-x-3'>
                <h1 className='text-white flex flex-row items-center'>
                  {number + 1}
                  <span>
                    <ArrowNarrowRightIcon className='h-4 w-4 text-white ml-3' />
                  </span>
                </h1>

                <h1 className='text-white text-sm'>{data?.headline}</h1>
              </div>
              <div className='space-y-2'>
                {data?.choices.map((item, index) => {
                  return (
                    <div
                      onClick={() => mcqsSelectHandler(data.identifier, index)}
                      className={
                        !item.selected
                          ? 'flex cursor-pointer flex-row justify-between text-black bg-gray-300 py-1 rounded-md'
                          : 'flex cursor-pointer flex-row justify-between  py-1 rounded-md border-2 border-gray-900 bg-gray-600 text-white'
                      }
                    >
                      <div className='space-x-6 flex flex-row items-center'>
                        <span
                          className={
                            !item.selected
                              ? 'ml-2 h-2 w-2 rounded-full bg-gray-900 opacity-75'
                              : 'ml-3 h-2 w-2 rounded-full bg-white opacity-75'
                          }
                        ></span>
                        <h1>{item?.value}</h1>
                      </div>

                      {item?.selected && (
                        <CheckIcon className='text-white h-6 w-6 mr-5  ' />
                      )}
                    </div>
                  );
                })}
              </div>
              <div className='flex flex-row justify-between'>
                {currentQuestion === 0 ? (
                  <div></div>
                ) : (
                  <button
                    className='bg-gray-900 text-white py-2 px-5 text-xs hover:bg-gray-800 rounded-lg'
                    onClick={() => {
                      setVisible(false);
                      prevQuestionHandler();
                    }}
                  >
                    Previous
                  </button>
                )}

                {currentQuestion === totalLength - 1 ? (
                  <button
                    className='bg-gray-900 text-white py-2 px-5 text-xs rounded-lg'
                    onClick={() => {
                      navigate('/submitted');
                    }}
                  >
                    Finish
                  </button>
                ) : (
                  <button
                    className='bg-gray-900 text-white py-2 px-5 text-xs rounded-lg'
                    onClick={() => {
                      setVisible(false);
                      nextQuestionHandler(data.identifier);
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

export default Mcqs;
