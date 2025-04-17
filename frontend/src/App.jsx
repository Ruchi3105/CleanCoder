import React, { useState } from 'react'
import Code from './components/Code'
import Output from './components/Output'

const App = () => {
  const [review, setReview] = useState("");

  const handleReview=(review)=>{
    setReview(review);
  }
  return (
    <div>
      <div className='flex justify-center items-center gap-2 p-1'>

      <img src="code.png" alt="" className='h-10 w-10'/>
    <h1 className='text-[#6ba9ff] text-2xl font-bold'>CleanCoder</h1>
      </div>
    <div className='flex flex-col lg:flex-row w-screen h-screen gap-2 bg-slate-800 p-2 bg-fixed'>
      
      <div className='flex-1'>
        <Code FinalReview={handleReview} />
      </div>
      <div className='flex-1'>
        <Output review={review}/>
      </div>
    </div>
    </div>
  )
}

export default App
