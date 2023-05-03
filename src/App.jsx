import Aside from './side'


import './styles/App.css'

import { Outlet } from "react-router-dom";

function App() {


  return (
    <>
      <div id='wrapper' className="columns">
        <div className='column is-one-fifth'>
          <Aside></Aside>
        </div>
        <div className='column is-four-fifth'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
