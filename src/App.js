import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';

function App() {
  const [mode,SetMode]=useState('light');
  return (
    <>
<Navbar title="TextUtils2" home="HomeUtils" mode={mode}/>
<div className="container my-6">
<TextForm heading="Enter your Details"/> 
<About/>
    </div>
    </>
  );
}

export default App;
