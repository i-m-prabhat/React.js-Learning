import React from 'react'
import MyEditor from './components/MyEditor'
import RTE from './components/RTEditor'

const App = () =>
{
  return (
    <div>
      <h1>React Quill</h1>
      <MyEditor />
      <hr />
      <RTE label="Content :" name="content" control={''} defaultValue={"content"} />
      <hr />
    </div>
  )
}

export default App