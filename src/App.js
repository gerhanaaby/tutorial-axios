import React, { Component } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { NavbarComponent } from './components'
import { Home, Sukses } from './pages'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <NavbarComponent />
          
            <Routes>
              <Route  path="/" element={<Home/>} exact/>
              <Route  path="/sukses" element={<Sukses/>} exact/>
            </Routes>
          
      </BrowserRouter>
    )
  }
}