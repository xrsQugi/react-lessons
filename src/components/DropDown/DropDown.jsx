import css from "./DropDown.module.css";
import React, { Component } from 'react'
import Clock from '../Clock/Clock';


export default class DropDown extends Component {

    static defaultProps = {
        title: "Show",
    };

    state = {
        visible: false,
    }

    Toggle = () => {
        this.setState((prevState) => ({
            visible: !prevState.visible,
        }))
    }

    render() {
        const {visible} = this.state;
        return (
        <div className={css.drop_down}>
            <button type="button" className={css.drop_down_button} onClick={this.Toggle}>{visible ? "Hide" : "Show"}</button>
            {visible && 
                <div className={css.drop_down_menu}>
                    <Clock></Clock>
                </div>
            }
        </div>
        )
  }
}

