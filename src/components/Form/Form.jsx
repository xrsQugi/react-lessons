import css from './Form.module.css';
import React, { Component } from 'react'

// export default class Form extends Component {
//     state = {
//         nameValue: "",
//         emailValue: "",
//         passValue: "",
//     }
    
//     // handleInputName = (e) => {
//     //     this.setState({
//     //         nameValue: e.target.value,
//     //     })
//     // }

//     // handleInputTag = (e) => {
//     //     this.setState({
//     //         tagValue: e.target.value,
//     //     })
//     // }

//     handleChangeInfo = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value,
//         })
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('this.state :>> ', this.state);
//         this.props.onSubmit(this.state);
//     }

//     render() {
//         return (
//             <form>
//                 <label htmlFor="name">Name:</label>
//                 <input
//                     type="text" 
//                     name="nameValue"
//                     id="name"
//                     placeholder="Enter your name" 
//                     value={this.state.inputValue} 
//                     onChange={this.handleChangeInfo}
//                 />
//                 <label htmlFor="email">Email:</label>
//                 <input
//                     type="email" 
//                     name="emailValue" 
//                     id="email"
//                     placeholder="Enter your email" 
//                     value={this.state.emailValue} 
//                     onChange={this.handleChangeInfo}
//                 />
//                 <label htmlFor="password">Password:</label>
//                 <input
//                     type="password" 
//                     name="passValue"
//                     id="password"
//                     placeholder="Enter your password" 
//                     value={this.state.passValue} 
//                     onChange={this.handleChangeInfo}
//                 />
//                 <button type="submit" onSubmit={this.handleSubmit}>Submit</button>
//             </form>
//         )
//     }
// }

const defState = {
    login: "",
    email: "",
    password: "",
};

export default class Form extends Component {
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
      const { login, email, password } = this.state;
      console.log(`Login: ${login}; email: ${email}; password: ${password}`);
    //   this.props.onSubmit(login, email, password);
      this.reset();
    };
  
    reset = () => {
      this.setState({...defState});
    };
  
    render() {
      const { login, email, password } = this.state;
  
      return (
        <form onSubmit={this.handleSubmit} className={css.form_component}>
          <label className={css.label_text}>
            Name
            <input
                className={css.input_place}
                type="text"
                placeholder="Enter login"
                required
                name="login"
                value={login}
                onChange={this.handleChange}
            />
          </label>
          <label className={css.label_text}>
            Email
            <input
                className={css.input_place}
                type="email"
                placeholder="Enter email"
                required
                name="email"
                value={email}
                onChange={this.handleChange}
            />
          </label>
          <label className={css.label_text}>
            Password
            <input 
                className={css.input_place}
                type="password"
                placeholder="Enter password"
                required
                name="password"
                value={password}
                onChange={this.handleChange}
            />
          </label>
  
          <button className={css.submit_btn} type="submit">Sign up as {login}</button>
        </form>
      );
    }
}