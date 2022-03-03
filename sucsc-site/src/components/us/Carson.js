import React from 'react'
import TestProject from './../TestProject'

const Carson = () => {
  return (
    <div>
      <section className='h-screen bg-red-300 flex items-center justify-center'>
        <div>
          <h1 className='text-8xl'>Carson Sytner</h1>
          <h2 className='text-5xl pt-2'>Vice President of SUCSC 😎</h2>
          <p className='pt-1'>Hey I'm Carson, I enjoy computer science, running, and photography.</p>
        </div>
      </section>

      <section className='bg-rose-700 py-48'>
        <h2 className='text-5xl text-white'>Check Out Some of my Coding Projects</h2>
        <TestProject sampleText="Oh! Here is some cool text that is very fun! 🐞"/>
      </section>
      
    </div>
  )
}

export default Carson