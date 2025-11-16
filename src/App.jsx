import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Link, Navigate, NavLink, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./views/Home";
import "./index.css"
import Darkmode from "./components/Darkmode";
import Wrapper from "./components/Wrapper";
import Contacts from "./views/Contacts";
import About from "./views/About";
import NotFound from "./views/NotFound";
import { db } from "./config/firebase";
import { collection, query, where, getDocs } from "@firebase/firestore";
import { MainContext } from "./config/base";

function AnimatedRoutes() {
  const [siteContent, setSiteContent] = useState({});

  let location = useLocation();
  let navigate = useNavigate();

  function redirectToIndex() {
    let pathname = sessionStorage.getItem("pathname");
    sessionStorage.removeItem("pathname");
    navigate(pathname);
  }

  function fetchSiteContent() {
    const contentRef = collection(db, "site-content");
    const newSiteContent = {};
    getDocs(contentRef).then(snapshot => {
      snapshot.forEach((doc) => {
        newSiteContent[doc.data().identificatory] = doc.data();
      });
      setSiteContent(newSiteContent);
    });
  }

  useEffect(() => {
    redirectToIndex();
    fetchSiteContent();    
  }, [])

    return (
          <MainContext.Provider value={siteContent}>
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
                  path="/about"
                  element={
                    <Wrapper>
                      <About />
                    </Wrapper>
                  }
                />
                <Route
                  path="*"
                  element={
                    <Wrapper>
                      <NotFound />
                    </Wrapper>
                  }
                />              
              </Routes>
          </MainContext.Provider>
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
