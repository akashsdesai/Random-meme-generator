import React from 'react'
import ReactDOM from 'react-dom'
import Foot from './JsFiles/Foot'
import Content from './JsFiles/Content'
import Head from './JsFiles/Head'
import "./styleFile/index.css"

function App(){
  return(
    <div>
       <Head />
       <Content />
       <Foot />
    </div>
  )
}

ReactDOM.render(<App />,document.getElementById('root'))