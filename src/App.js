import './App.css'
import "bootstrap-icons/font/bootstrap-icons.css"

import Header from "./components/Header"
import ScrollBar from './components/ScrollBar'
import Menu from './components/Menu'
import BestSelling from './components/BestSelling'
import Comments from './components/Comments'

const App = () => {
  return (
    <div>
      <Header/>
      <ScrollBar/>
      <Menu/>
      <BestSelling/>
      <Comments/>
      <div className="text-center my-3" style={{color:"orangered"}}>Copyright 2022-2023</div>
    </div>
  )
}

export default App
