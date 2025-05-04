import { useState } from 'react'

import Enter from './components/Enter'
import ContentHome from './components/ContentHome'
import ContentCards from './components/ContentCards'

function App() {

  return (
      <div className='min-h-dvh'>
        <Enter />
        <ContentHome />
        <ContentCards />
      </div>
  )
}

export default App
