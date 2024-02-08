

import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Pages/Home"
import Signin from "./Pages/Signin"
import Signout from "./Pages/Signout"
import Profile from "./Pages/Profile"
import About from "./Pages/About"


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/Signin" element={<Signin />} />
   <Route path="/Signout" element={<Signout />} />
   <Route path="/Profile" element={<Profile />} />
   <Route path="/About" element={<About />} />

    </Routes>
    </BrowserRouter>
  )
}
