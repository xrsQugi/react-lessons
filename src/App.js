// import React from 'react';
// import ReactDOM from 'react-dom';
// import Painting from './components/Painting';
import Section from './components/Section';
import PaintingList from './components/PaintingList';
import data from "../src/paintings.json";

function App(){
  return(
    <div>
      <Section title="Gallery">
        <PaintingList items={data}/>
      </Section>

      <Section title="Shop" />
    </div>
  );
}

export default App;
