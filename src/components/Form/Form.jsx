import css from './Form.module.css';
import React, { Component } from 'react';
import { nanoid } from 'nanoid'

export default class Form extends Component {
  loginInputId = nanoid();
  emailInputId = nanoid();
  passInputId = nanoid();

  state = {
    login: "",
    email: "",
    password: "",
  }
  
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  
  handleSubmit = evt => {
    evt.preventDefault();
    // const { login, email, password } = this.state;
    // console.log(`Login: ${login}; email: ${email}; password: ${password}`);
    this.props.onSubmit(this.state)
    this.reset();
  };
  
  reset = () => {
    this.setState({
      login: "",
      email: "",
      password: "",
    });
  };
  
  render() {
    const { login, email, password } = this.state;
  
    return (
      <form onSubmit={this.handleSubmit} className={css.form_component}>
        <label htmlFor={this.loginInputId} className={css.label_text}>Login</label>
        <input
          id={this.loginInputId}
          className={css.input_place}
          type="text"
          placeholder="Enter login"
          // required
          name="login"
          value={login}
          onChange={this.handleChange}
        />
        <label htmlFor={this.emailInputId} className={css.label_text}>Email</label>
          <input
            id={this.emailInputId}
            className={css.input_place}
            type="email"
            placeholder="Enter email"
            // required
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <label htmlFor={this.passInputId} className={css.label_text}>Password</label>
          <input 
            id={this.passInputId}
            className={css.input_place}
            type="password"
            placeholder="Enter password"
            // required
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        <button className={css.submit_btn} type="submit">Sign up as {login}</button>
      </form>
    );
  }
}