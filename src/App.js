// import React from 'react';
// import ReactDOM from 'react-dom';

//! import components
import React, { Component } from 'react'

import Section from "./components/Section";
import PaintingList from "./components/PaintingList/PaintingList.jsx";
import paintings from "./components/PaintingList/paintings.json";
import Counter from "./components/Counter/Counter";
import DropDown from "./components/DropDown/DropDown";
import Form from "./components/Form/Form";
import LifeCycle from './components/LifeCycle/LifeCycle';
import CounterSecond from './components/CounterSecond/CounterSecond';

//! import styles
import css from "./App.module.css"

export default class App extends Component {

  handleSubmitForm = (data) => {
    console.log("data from form: ", data);
  }

  render() {
    return (
      <div className={css.section_parent}>
        <Section title="Gallery">
          <PaintingList items={paintings}/>
        </Section>
        <Section title="Counter">
          <Counter step={2}/>
        </Section>
        <Section title="Dropdown">
          <DropDown/>
        </Section>
        <Section title="Form">
          <Form onSubmit={this.handleSubmitForm}/>
        </Section>
        <Section title="Live cycle">
          <LifeCycle item={5}></LifeCycle>
        </Section>
        <Section title="Counter 2">
          <CounterSecond/>
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
