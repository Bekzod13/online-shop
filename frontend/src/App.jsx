import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"


function App() {

  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
    </Routes>
        <h1>
            hello

        </h1>
    </>
  )
}

export default App
