import React from 'react';
import './App.css';

import Reviews from './Reviews'
import SentAnalysis from './SentAnalysis'
import AvgRating from './AvgRating'
import Sidebar from './Sidebar'
import WebsiteVisitors from './WebsiteVisitors'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Reviews />
      <AvgRating />
      <SentAnalysis />
      <WebsiteVisitors />
    </div>
  );
}

export default App;
