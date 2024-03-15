import './App.css'
import Banner from './component/Banner/Banner'
import Navbar from './component/Navbar/Navbar'
import Recipes from './component/Recipes/Recipes'


function App() {


  return (
    <>

      <div className='container mx-auto lexend-font'>
        <Navbar></Navbar>
        <Banner></Banner>
       <Recipes></Recipes>

      </div>
  
    </>
  )
}

export default App
