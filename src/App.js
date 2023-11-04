import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

import { BrowserRouter, Routes, Route } from "react-router-dom";

// 1df0c9c011654522921ae912aa68ac87
const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  
  const[progress, setProgress] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <LoadingBar
          color='red'
          progress={progress}

        />
        <NavBar />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={5} country='in' category='General' />}> </Route>
          <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={5} country='in' category='Business' />}> </Route>
          <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={5} country='in' category='Entertainment' />}> </Route>
          <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={5} country='in' category='Health' />}> </Route>
          <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={5} country='in' category='General' />}> </Route>
          <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={5} country='in' category='Science' />}> </Route>
          <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={5} country='in' category='Sports' />}> </Route>
          <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={5} country='in' category='Technology' />}> </Route>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App