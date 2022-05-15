import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function Home({ data }) {
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const startHandler = () => {
    if (email.length > 0 && email.includes('@')) {
      navigate('/mcqs');
      return;
    }
    return toast.error('Invalid email address');
  };
  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />

      <div className='flex flex-col lg:grid lg:grid-cols-10'>
        <div className=' bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4'>
          <div className='flex flex-col justify-center items-center text-center lg:min-h-screen p-5'>
            <div className='bg-gradient-to-br from-yellow-800 to-rose-500 lg:col-span-4'>
              <img
                className='w-44 object-cover rounded-xl lg:h-80 lg:w-72 p-3'
                src='/9.png'
                alt=''
              />
            </div>
            <div className='p-5'>
              <h1 className='text-2xl font-bold text-white'>
                CLARK Questionnaire
              </h1>
              <h1 className='text-xl text-gray-300'>
                Geben Sie Ihre E-Mail-Adresse ein, um loszulegen
              </h1>
            </div>
          </div>
        </div>
        <div className='flex w-full lg:h-screen lg:col-span-6'>
          <div className='flex flex-col mt-20 lg:m-auto text-center space-y-5'>
            <h1 className='text-2xl underline decoration-pink-600 text-pink-800 lg:text-3xl'>
              {data.questionnaire.name}
            </h1>
            <h1 className='text-xl w-[70%] flex mx-auto text-gray-700'>
              {data.questionnaire.description}
            </h1>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 mx-auto text-cyan-900 animate-bounce '
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
            <div className='flex flex-col lg:flex-row items-center px-4 justify-center lg:space-x-3'>
              <input
                type='email'
                value={email}
                placeholder='Email'
                className='border-2 border-pink-800 outline-none py-2 px-4 lg:w-[50%] w-full rounded-xl text-gray-600'
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className='bg-pink-700 mt-2 lg:mt-0 w-[100px] py-2 px-2 text-white rounded-xl uppercase hover:bg-pink-600 '
                onClick={startHandler}
              >
                Start
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
