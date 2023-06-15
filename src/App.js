// import React from 'react';
// import ReactDOM from 'react-dom';
// import Painting from './components/Painting';
import Section from './components/Section';
import PaintingList from './components/PaintingList/PaintingList.jsx';
import paintings from "./components/PaintingList/paintings.json";
import Counter from "./components/Counter/Counter"
import DropDown from "./components/DropDown/DropDown"

export default function App(){
  return(
    <div>
      <Section title="Gallery">
        <PaintingList items={paintings}/>
      </Section>
      <Section title="Counter">
        <Counter step={3}/>
      </Section>
      <Section title="Dropdown">
        <DropDown/>
      </Section>
    </div>
  );
}
