import React from 'react'
import TestProject from './../TestProject'

import cylinder from './../../img/carson/cs-cylinder.png'
import scroller from './../../css/scroller.css'

const Carson = () => {
  return (
    <div className='bg-black text-white'>
      <section className='font-UncutSansRegular text-center'>
       <h1 className='text-9xl text-left'>CARSON</h1>
       <h1 className='text-9xl text-right'>SYTNER</h1>
      </section>

      <section className='flex'>
        <div className='w-1/2'>
          <div className='mt-8 md:mt-12 lg:py-2'>
            <div className = 'relative overflow-hidden h-24'>
                <div className='absolute right-0 scroller flex justify-around items-center logo text-base whitespace-nowrap '>
                    <div className='text-3xl mx-3'>hey here is some text</div>
                    <div className='text-3xl mx-3'>hey here is some text</div>
                    <div className='text-3xl mx-3'>hey here is some text</div>
                </div>    

                <div className='absolute right-0 scroller2 flex justify-around items-center logo text-base whitespace-nowrap '>
                  <div className='text-3xl mx-3'>hey here is some text</div>
                  <div className='text-3xl mx-3'>hey here is some text</div>
                  <div className='text-3xl mx-3'>hey here is some text</div>
                </div>    
            </div>
          </div>

          <div className='md:mt-12 lg:py-2'>
            <div className = 'relative overflow-hidden h-24'>
              <div className='scroller3 absolute left-0 flex justify-around items-center logo text-base whitespace-nowrap'>
                <div className='text-3xl mx-3'>hey here is some text</div>
                <div className='text-3xl mx-3'>hey here is some text</div>
                <div className='text-3xl mx-3'>hey here is some text</div>
              </div>    

              <div className='scroller4 absolute left-0 flex justify-around items-center logo text-base whitespace-nowrap'>
                <div className='text-3xl mx-3'>hey here is some text</div>
                <div className='text-3xl mx-3'>hey here is some text</div>
                <div className='text-3xl mx-3'>hey here is some text</div>
              </div>       
            </div>
          </div>
        </div>

        <div className='w-1/2'>
          Hi! It's great to meet you. My name is Carson Sytner. I am the Vice President of the Computer Science Club
        </div>
        
      </section>
      <section className=''>
        <img src={cylinder} alt="" className=''/>
      </section>
    </div>
  )
}

export default Carson