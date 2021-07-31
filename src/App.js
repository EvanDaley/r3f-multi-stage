import './App.css';
import ThreeCanvas from './components/three_components/ThreeCanvas'
import HTMLContent from './components/html_components/HTMLContent'
import React, { useState, useEffect } from 'react';

import useStore from './store.js'

function App() {
  return (
    <>
      <HTMLContent/>
      <ThreeCanvas/>
    </>
  );
}

export default App;
