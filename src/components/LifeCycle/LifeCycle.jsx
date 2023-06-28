import React, { Component } from 'react';
import css from "./LifeCycle.module.css";


class LifeCycle extends Component {
    //! Стадія монтування
    constructor(){
        console.clear();
        console.log('-----Стадія монтування-----');
        console.log('-constructor-');
        super();
        this.state = {
            value: 1,
        };

    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('-getDerivedStateFromProps-');
        console.log('nextProps :>> ', nextProps);
        console.log('prevState :>> ', prevState);
        return null;
    }

    componentDidMount() {
        console.log('-componentDidMount-');
    }

    handleBtn = () => {
        this.setState((prevState) => {
            return {value: prevState.value + this.props.item};
        })
        console.log('Button was clicked');
    }

    //!Стадія оновлення
    shouldComponentUpdate(nextProps, nextState) {
        console.log('-----Стадія оновлення-----');
        console.log('-shouldComponentUpdate-');
        console.log('nextProps :>> ', nextProps);
        console.log('nextState :>> ', nextState);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('-getSnapshotBeforeUpdate-');
        console.log('prevProps :>> ', prevProps);
        console.log('prevState :>> ', prevState);
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('-componentDidUpdate-');
        console.log('prevProps :>> ', prevProps);
        console.log('prevState :>> ', prevState);
        console.log('snapshot :>> ', snapshot);
    }

    //!Стадія розмонтування
    componentWillUnmount() {

    }
    
    //!Стадія монтування
    render() {
        console.log('-render-');
        return (
            <div className={css.lifeCycle_div}>
                <button type="submit" className={css.submit_btn} onClick={this.handleBtn}>Sign</button>
                <p>{this.state.value}</p>
            </div>
        )
  }
}

export default LifeCycle;