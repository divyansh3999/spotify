import React from "react";
import Home from "./components/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


export default function SpotifyRoutes() {
  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
            </Routes>
        </Router>
    </>
  );
}
