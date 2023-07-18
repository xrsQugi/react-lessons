import css from "./Counter.module.css";
import Controls from "./Controls";
import React, { useState } from 'react';

//! rcc + Tab - отримаємо таку структуру як знизу

//! Class component
// export default class Counter extends Component{

//     static defaultProps = {
//         step: 1
//     }

//     state = {
//         value: 0,
//     }

//     HandleIncrement = () => {
//         this.setState((prevState) => {
//             return {value: prevState.value + this.props.step};
//         })
//     }
    
//     HandleDecrement = () => {
//         this.setState((prevState) => {
//             return {value: prevState.value - this.props.step};
//         })
//     }
    
//     render(){
//         return (
//             <div className={css.wrap}>
//                 <h1 className={css.title}>Hello, class component!</h1>
//                 <span className={css.change_number}>{this.state.value}</span>
//                 <div className={css.btn_block}>
//                     <Controls 
//                         onDecrement={this.HandleDecrement} 
//                         onIncrement={this.HandleIncrement}
//                         step={this.props.step}
//                     />
//                 </div>
//             </div>
//         );
//     }
// }



//! Hooks 
export default function Counter({step=1}){
    const [value, setValue] = useState(0);

    const HandleIncrement = () => {
        setValue(value + step)
        // setValue((prev) => prev + step)
    }
            
    const HandleDecrement = () => {
        setValue(value - step)
    }

    return (
        <>
            <div className={css.wrap}>
                <h1 className={css.title}>
                    Hello, class component!
                </h1>
                <span className={css.change_number}>
                    {value}
                </span>
                <div className={css.btn_block}>
                    <Controls 
                        onDecrement={HandleDecrement} 
                        onIncrement={HandleIncrement}
                        step={step}
                    />
                </div>
            </div>              
        </>
    );
}