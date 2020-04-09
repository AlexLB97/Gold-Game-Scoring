import React, { useState } from 'react';
import '../App.css';

function ValueButtons(props) {
    const [buttons] = useState(
            [{
            text: 'X',
            value: 10,
            classes: 'gold span-two'
        },
        {
            text: '10',
            value: 10,
            classes: 'gold span-two'
        },
        {
            text: '9',
            value: 9,
            classes: 'gold span-two'
        },
        {
            text: '8',
            value: 8,
            classes: 'red span-two'
        },
        {
            text: '7',
            value: 7,
            classes: 'red span-two'
        },
        {
            text: '6',
            value: 6,
            classes: 'blue span-two'
        },
        {
            text: '5',
            value: 5,
            classes: 'blue span-two'
        },
        {
            text: '4',
            value: 4,
            classes: 'black span-two'
        },
        {
            text: '3',
            value: 3,
            classes: 'black span-two'
        },
        {
            text: '2',
            value: 2,
            classes: 'white span-two'
        },
        {
            text: '1',
            value: 1,
            classes: 'white span-two'
        },
        {
            text: 'M',
            value: 0,
            classes: 'green span-two'
        },
        {
            text: 'CLEAR',
            value: 'CLEAR',
            classes: 'blue span-three'
        },
        {
            text: 'NEXT END',
            value: 'NEXT END',
            classes: 'blue span-three'
        },
    ])
    return (
        <div className = "button-group">
            { buttons.map( (button) => {
                return <button key = {button.text} className = {button.classes} buttontext = {button.text} value = {button.value}  onClick = {(e) => props.handleButton(e.target)}>{button.text}</button>
            })}
        </div>
    );
}

export default ValueButtons;
