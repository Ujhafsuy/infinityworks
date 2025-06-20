import { useState } from 'react'

import Enter from './components/Enter'
import ContentHome from './components/ContentHome'
import Contacts from './components/Contacts'

function App() {

  return (
      <div className='flex flex-col min-h-screen'>
        <Enter />
        <ContentHome />
        <Contacts />
      </div>
  )
}

export default App
