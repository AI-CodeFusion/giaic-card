import React from 'react'
import Student from './Student'

function Idcard() {
  return (
    <div className='flex flex-col gap-10 max-w-96 h-[2000px] m-32 ' >

          <div className='text-4xl border-8 m-2 bg-sky-100 h-[200px] p-8 '>
            <Student name="Syeda" age={12} slot="Monday 2-5" />
          </div>

          <div className='text-4xl border-8 m-2 bg-slate-100 h-[200px] p-8 '>
            <Student name="Ayesha" age={17} slot="Tuesday 2-5" />
          </div>

          <div className='text-3xl border-8 m-2 bg-slate-50 h-[200px] p-8 ' >
          <Student name="Mustafa" age={20} slot="Wednesday 2-5" />
          </div>

          
          </div>
  )
}

export default Idcard

