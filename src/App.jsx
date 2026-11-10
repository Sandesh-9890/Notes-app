import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [arr, setArr] = useState([])

  const deleteNote = (id) => {

    const arr1 = [...arr];
    arr1.splice(id, 1);
    setArr(arr1)

  }

  const array = () => {
    const arr1 = [...arr];

    if (title != '' && note != '') {
      arr1.push({ title, note })
      setArr(arr1)
    }
    setTitle('')
    setNote('')



  }


  function submitHandler(e) {
    e.preventDefault()


  }

  return (
    <div className='h-screen w-screen  bg-black lg:flex'>
      <div>
        <form onSubmit={(e) => {
          submitHandler(e)
        }}
          className='flex flex-col ml-5   text-white font-bold gap-5'>
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)

            }}
            className='border-2 h-[5vh] lg:w-120 w-[90vw] p-2 mt-5 '
            type="text"
            placeholder='Enter a heading'
          />

          <textarea
            value={note}
            onChange={(e) => {
              setNote(e.target.value);
            }}
            className='border-2 h-[15vh] w-[90vw]  lg:w-120 p-2  '
            name=""
            placeholder='Enter a note'></textarea>
          <button onClick={array} className='border-2 h-[5vh] w-[90vw]  lg:w-120 rounded bg-white text-black '>Add Note</button>
        </form>
      </div >

      <div className='h-screen w-screen overflow-auto lg:ml-5  border-l-0 lg:border-l-2 bg-gray-900 p-10  text-white flex flex-wrap  content-start justify-start gap-x-2 gap-y-4'>
        <h1 className='w-screen text-2xl'>Your Notes</h1>
        {arr.map((ele, idx) => {
          return (
            
              <div key={idx} className="flex justify-between flex-col items-start  relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] ">
                <div className='flex flex-wrap'>
                  <h1 className='leading-tight text-lg font-bold '>{ele.title}</h1>
                  <p className='mt-2 leading-tight text-xs font-semibold text-gray-600 '>{ele.note}</p>
                </div>
                <button
                  onClick={(e) => {


                    deleteNote(idx)
                  }}
                  className='text-white rounded bg-red-400 '>Delete</button>
              </div>
            
          )
        })}


      </div>
    </div>
  )
}

export default App
