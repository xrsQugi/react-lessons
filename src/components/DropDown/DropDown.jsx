import css from "./DropDown.module.css";
import React, { Component } from 'react'

export default class DropDown extends Component {

    static defaultProps = {
        title: "Show",
    };

    state = {
        visible: false,
    }

    Toggle = () => {
        this.setState((prewState) => ({
            visible: !prewState.visible,
        }))
    }

    // ! замінили цю частину на функцію toggle 
    // Show = () => {
    //     this.setState({
    //         visible: true,
    //     })
    // }

    // Hide = () => {
    //     this.setState({
    //         visible: false,
    //     })
    // }
    //!

    render() {
        const {visible} = this.state;
        return (
        <div className={css.drop_down}>
            <button type="button" className={css.drop_down_button} onClick={this.Toggle}>{visible ? "Hide" : "Show"}</button>
            {/* <button type="button" className={css.drop_down_button} onClick={this.Toggle}>Show</button>
            <button type="button" className={css.drop_down_button} onClick={this.Toggle}>Hide</button> */}
            {visible && <div className={css.drop_down_menu}>Dropdown menu</div>}
        </div>
        )
  }
}

