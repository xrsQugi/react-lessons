// import React from 'react';
// import ReactDOM from 'react-dom';



//! import components
import React, { Component } from 'react'

import Section from "./Section/Section";
import PaintingList from "./PaintingList/PaintingList.jsx";
import paintings from "./PaintingList/paintings.json";
import Counter from "./Counter/Counter";
import DropDown from "./DropDown/DropDown";
import Form from "./Form/Form";
import LifeCycle from './LifeCycle/LifeCycle';
import CounterSecond from './CounterSecond/CounterSecond';
import { UserMenu } from "./User/UserMenu";

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
        <Section title="useContext">
          <UserMenu />
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
