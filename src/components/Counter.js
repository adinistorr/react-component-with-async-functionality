import React, { useState } from 'react';
import styles from './Counter.module.css';

function Counter() {
    // let count = 400
    const[count, setCount] = useState(400);

    function handleClick(diff) {
        setCount(count + diff);
    }

    return (
        <div className={ styles.container }>
            <button className={ styles.btn } onClick={ () => handleClick(1) }>+</button>
            <button className={ styles.btn } onClick={ () =>  handleClick(-1) }>-</button>
            <strong className={ count >= 0 ? styles['output--positive'] : styles['output--negative'] }>{ count }</strong> 
        </div>
    )
}

export default Counter;