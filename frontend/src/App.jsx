import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Categories from "./pages/Categories"


function App() {

  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/catalog" element={<Categories/>}/>
    </Routes>
    <footer>
        footer
    </footer>
    </>
  )
}

export default App
