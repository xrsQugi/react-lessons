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
import Hooks from '../pages/Hooks/Hooks';

import Form from '../pages/Form/Form';

import DropDownPage from '../pages/DropDownPage/DropDownPage';



//! import styles
import css from './App.module.css';

const StyledLink = styled(NavLink)`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background-color: #e84d4d;
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
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/paintings">Paintings</StyledLink>
        <StyledLink to="/counters">Counters</StyledLink>
        <StyledLink to="/form">Form</StyledLink>
        <StyledLink to="/hooks">Hooks</StyledLink>
        <StyledLink to="/dropdown">Dropdown & live cycle</StyledLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paintings" element={<PaintingList items={paintings} />} />
        <Route path="/counters" element={<Counters />} />
        <Route path="/form" element={<Form onSubmit={handleSubmitForm} />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/dropdown" element={<DropDownPage />} />
      </Routes>
    </div>
  );
}
