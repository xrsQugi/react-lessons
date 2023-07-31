// import React from 'react';
// import ReactDOM from 'react-dom';

//! import components
import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Home from '../pages/Home/Home';

import PaintingList from '../pages/PaintingList/PaintingList.jsx';
import paintings from '../pages/PaintingList/paintings.json';
import Counters from '../pages/Counters/Counters';
import Form from '../pages/Form/Form';
import Hooks from '../pages/Hooks/Hooks';
import DropDownPage from '../pages/DropDownPage/DropDownPage';
import NotFound from '../pages/NotFound/NotFound';

//! import styles
import css from './App.module.css';

const StyledLink = styled(NavLink)`
  color: #ffffff;
  text-align: center;
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background-color: #F24D4D;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;

  &.active {
    background-color: #581616;
  }
`;

export default function App() {
  const handleSubmitForm = data => {
    console.log('data from form: ', data);
  };

  return (
    <div className={css.container}>
      <nav className={css.navigation}>
        <StyledLink to="/react-lessons" end>Home</StyledLink>
        <StyledLink to="/react-lessons/paintings">Paintings</StyledLink>
        <StyledLink to="/react-lessons/counters">Counters</StyledLink>
        <StyledLink to="/react-lessons/form">Form</StyledLink>
        <StyledLink to="/react-lessons/hooks">Hooks</StyledLink>
        <StyledLink to="/react-lessons/dropdown">Dropdown & Live cycle</StyledLink>
      </nav>
      <hr className={css.line}/>
      <Routes>
        <Route path="/react-lessons" element={<Home />} />
        <Route path="/react-lessons/paintings" element={<PaintingList items={paintings} />} />
        <Route path="/react-lessons/counters" element={<Counters />} />
        <Route path="/react-lessons/form" element={<Form onSubmit={handleSubmitForm} />} />
        <Route path="/react-lessons/hooks" element={<Hooks />} />
        <Route path="/react-lessons/dropdown" element={<DropDownPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
