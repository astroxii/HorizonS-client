import { BrowserRouter, Route, Routes } from 'react-router'
import Header from '../Header/Header'
import Home from '../Home/Home'
import './App.css'

function App()
{
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/forums" />
        <Route path="/groups" />
        <Route path="/weekly-highlights" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
