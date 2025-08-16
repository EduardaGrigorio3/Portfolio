import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'
import './styles/components/app.sass'


function App() {

  return (
    <div className='main-container'>
      <div className="portifolio">
        <h1>Eduarda Grigório</h1>

        <Sidebar/>
        <MainContent/>

      </div> 
    </div>
      
      
  )
}

export default App
