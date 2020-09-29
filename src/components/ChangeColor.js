import React, { useState } from 'react';
import styles from './ChangeColor.module.css';

const rainbowColors = ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000'];

function ChangeColor() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    function handleClick() {
        if (selectedIndex === rainbowColors.length - 1) {
            setSelectedIndex(0)
            
        } else {
            setSelectedIndex(selectedIndex + 1);
        }
    }

    return (
        <div className={ styles.container }>
            <span className={ styles.span } style={{ backgroundColor: rainbowColors[selectedIndex] }}>Curently Selected Color: { rainbowColors[selectedIndex] }</span>
            <button className={ styles.btn } onClick={handleClick}>Change Color</button>
        </div>
    )
}

export default ChangeColor;