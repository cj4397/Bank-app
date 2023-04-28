import Aside from './side'
import Main_body from './main_body'

import './styles/App.css'

function App() {


  return (
    <>
      <div id='wrapper' className="columns">
        <div className='column is-one-fifth'>
          <Aside></Aside>
        </div>
        <div className='column is-four-fifth'>
          <Main_body />
        </div>
      </div>
    </>
  )
}

export default App
