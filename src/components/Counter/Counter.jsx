import css from "./Counter.module.css";
import Controls from "./Controls";

import React, { Component, useState } from 'react';

//! rcc + Tab - отримаємо таку структуру як знизу
export default class Counter extends Component{

    static defaultProps = {
        step: 1
    }

    state = {
        value: 0,
        
    }

    HandleIncrement = () => {
        this.setState((prevState) => {
            return {value: prevState.value + this.props.step};
        })
        // console.log("+1");
    }
    
    HandleDecrement = () => {
        this.setState((prevState) => {
            return {value: prevState.value - this.props.step};
        })
        // console.log("-1");
    }
    
    render(){
        // const { step } = this.props;
        
        return (
            <div className={css.wrap}>
                <h1 className={css.title}>Hello, class component!</h1>
                <span className={css.change_number}>{this.state.value}</span>
                <div className={css.btn_block}>
                    <Controls 
                        onDecrement={this.HandleDecrement} 
                        onIncrement={this.HandleIncrement}
                        step={this.props.step}
                    />
                </div>
            </div>
        );
    }
}