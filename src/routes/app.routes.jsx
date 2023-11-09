import {Route, Routes} from "react-router-dom"

import {Home} from "../pages/Home"
import {Profile} from "../pages/Profile"
import {Createmovie} from "../pages/Createmovies"


export function AppRoutes(){
  return(
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/createmovies" element={<Createmovie/>}/>
    </Routes>
  )
}