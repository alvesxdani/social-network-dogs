import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import { GlobalStyle } from "./GlobalStyle"
import Home from "./Routes/Home"
import Login from "./Routes/Login"


function App() {
  
  return (
    <>
      <GlobalStyle />

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
