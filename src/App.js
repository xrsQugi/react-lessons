// import React from 'react';
// import ReactDOM from 'react-dom';
// import Painting from './components/Painting';
import Section from './components/Section';
import PaintingList from './components/PaintingList';
import UserList from "./components/UserList"
import paintings from "../src/paintings.json";
import users from "../src/users.json";

export default function App(){
  return(
    <div>
      <Section title="Gallery">
        <PaintingList items={paintings}/>
      </Section>

      <Section title="Top 3 users">
        <UserList clients={users}/>
      </Section>
    </div>
  );
}
