import React, { Component } from 'react';
import css from "./LifeCycle.module.css";


class LifeCycle extends Component {
    constructor(){
        console.clear();
        console.log('constructor');
        super();
        this.state = {
            value: 1,
        };

    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('nextProps :>> ', nextProps);
        console.log('prevState :>> ', prevState);
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
        console.log('prevProps :>> ', prevProps);
        console.log('prevState :>> ', prevState);
        console.log('snapshot :>> ', snapshot);
    }

    handleBtn = () => {
        this.setState((prevState) => {
            return {value: prevState.value + this.props.item};
        })
        console.log('Button was clicked');
    }
    
    render() {
        console.log('render-1');
        return (
            <>
                {console.log('render-2')}
                <button type="submit" className={css.submit_btn} onClick={this.handleBtn}>Sign</button>
                <p>{this.state.value}</p>
            </>
        )
  }
}

export default LifeCycle;