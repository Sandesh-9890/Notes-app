import React from 'react'

const App = () => {
  return (
    <div className='h-screen w-screen  bg-black lg:flex'>
      <div>
        <form className='flex flex-col ml-5   text-white font-bold gap-5'>
          <input 
          className='border-2 h-[5vh] w-80 p-2 mt-5 '
          type="text"
          placeholder='Enter a heading'
          />

          <textarea 
          className='border-2 h-[15vh] w-80 p-2  '
          name="" 
          placeholder='Enter a note'></textarea>
          <button className='border-2 h-[5vh] w-80 rounded bg-white text-black '>Add Note</button>
        </form>
      </div>
      <div className='h-screen w-screen lg:ml-5 mt-5 border-l-0 lg:border-l-2 bg-gray-900 p-10  text-white flex flex-wrap  content-start justify-start gap-x-2 gap-y-4'>
        <div className='h-30 w-30 bg-white p-5 rounded-xl '></div>
        <div className='h-30 w-30 bg-white p-5 rounded-xl '></div>
        <div className='h-30 w-30 bg-white p-5 rounded-xl '></div>
        <div className='h-30 w-30 bg-white p-5 rounded-xl '></div>
        <div className='h-30 w-30 bg-white p-5 rounded-xl '></div>
        <div className='h-30 w-30 bg-white p-5 rounded-xl '></div>
      </div>
    </div>
  )
}

export default App
