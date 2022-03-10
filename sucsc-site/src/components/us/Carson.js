import React from 'react'
import TestProject from './../TestProject'

import heading from './../../svg/heading.svg'

const Carson = () => {
  return (
    <div>
      <section className='h-screen bg-white text-white'>
       <h1 className='text-9xl text-left'>CARSON SYTNER</h1>
       <img src={heading} alt="" className='fill-amber-900 stroke-red-400'/>
      </section>

      <section className='bg-rose-700 py-48'>
        <h2 className='text-5xl text-white'>Check Out Some of my Coding Projects</h2>
        <TestProject sampleText="Oh! Here is some cool text that is very fun! 🐞"/>
      </section>
    </div>
  )
}

export default Carson