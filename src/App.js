// import React from 'react';
// import ReactDOM from 'react-dom';
// import Painting from './components/Painting';
import Section from "./components/Section";
import PaintingList from "./components/PaintingList/PaintingList.jsx";
import paintings from "./components/PaintingList/paintings.json";
import Counter from "./components/Counter/Counter";
import DropDown from "./components/DropDown/DropDown";
import Form from "./components/Form/Form";

import css from "./App.module.css"

import React, { Component } from 'react'

export default class App extends Component {

  // handleSubmitForm = (data) => {
  //   console.log('data :>> ', data);
  // }

  render() {
    return (
      <div class={css.section_parent}>
        <Section title="Gallery">
          <PaintingList items={paintings}/>
        </Section>
        <Section title="Counter">
          <Counter step={3}/>
        </Section>
        <Section title="Dropdown">
          <DropDown/>
        </Section>
        <Section title="Form">
          <Form/>
          {/* <Form onSubmit={this.handleSubmitForm}/> */}
        </Section>
      </div>
    )
  }
}


// export default function App(){
//   return(
//     <div>
//       <Section title="Gallery">
//         <PaintingList items={paintings}/>
//       </Section>
//       <Section title="Counter">
//         <Counter step={3}/>
//       </Section>
//       <Section title="Dropdown">
//         <DropDown/>
//       </Section>
//       <Section title="Form">
//         <Form onSubmit={handleSubmitInfo}/>
//       </Section>
//     </div>
//   );
// }
