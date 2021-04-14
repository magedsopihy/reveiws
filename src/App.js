import React, { useState } from 'react'
import Reveiws from './Reveiws'
function App() {
  return (
    <main>
      <section className='container'>
        <section className='title'>
          <h2>our reveiws</h2>
          <div className='title__underline'></div>
        </section>

        <Reveiws />
      </section>
    </main>
  )
}

export default App
