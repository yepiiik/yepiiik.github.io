import React, { useEffect } from "react";
import { BrowserRouter, NavLink, Route, Routes, useLocation } from "react-router-dom";
import Home from "./views/Home";
import "./index.css"
import Darkmode from "./components/Darkmode";
import Wrapper from "./components/Wrapper";
import Contacts from "./views/Contacts";

function AnimatedRoutes() {
  let location = useLocation();

    return (
          <main>
            <Darkmode />
              
              <Routes location={location} key={location.pathname}>
                <Route
                  path="/"
                  element={
                    <Wrapper>
                      <Home />
                    </Wrapper>
                  }
                />
                <Route
                  path="/contacts"
                  element={
                    <Wrapper>
                      <Contacts />
                    </Wrapper>
                  }
                />
                <Route
                  path="*"
                  element={
                    <Wrapper>
                      <>
                        <h2>Not finished yet?</h2>
                      </>
                    </Wrapper>
                  }
                />              
              </Routes>
          </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App;
