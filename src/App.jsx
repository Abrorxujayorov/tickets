import './App.css'
import Buttonst from './components/Buttons/Buttonst'
import Header from './components/header/Header'
import Main from './components/main/Main'
import MainBar from './pages/MainBar'
function App() {
  return (
   <div className='container'>
    <Buttonst/>
    <div className='control'>
    <Header/>
    <Main/>
    </div>
   </div>
  )
}

export default App
