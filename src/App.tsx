import React from 'react';
import logo from './logo.svg';
import './App.css';
import OverlayCard from './Components/OverlayCard/OverlayCard';

function App() {
  return (
    <div className="App">
      <OverlayCard
        title={'Global report: WHO warns of accelerating Covid-19 infections in Africa'}
        body={'Continent is seeing more cases spread to the provinces; Trump supporters can’t sue over catching Covid-19 at rallies; Brazil confirms 30,000 new cases'}
      />
    </div>
  );
}

export default App;
