import React, { useState } from 'react';
import '../App.css';

function ValueButtons(props) {
    const [buttons] = useState(
            [{
            text: 'X',
            value: 10,
            classes: 'gold span-two',
            id: "X"
        },
        {
            text: '10',
            value: 10,
            classes: 'gold span-two',
            id: '10'
        },
        {
            text: '9',
            value: 9,
            classes: 'gold span-two',
            id: '9'
        },
        {
            text: '8',
            value: 8,
            classes: 'red span-two',
            id: '8'
        },
        {
            text: '7',
            value: 7,
            classes: 'red span-two',
            id: '7'
        },
        {
            text: '6',
            value: 6,
            classes: 'blue span-two',
            id: '6'
        },
        {
            text: '5',
            value: 5,
            classes: 'blue span-two',
            id: '5'
        },
        {
            text: '4',
            value: 4,
            classes: 'black span-two',
            id: '4'
        },
        {
            text: '3',
            value: 3,
            classes: 'black span-two',
            id: '3'
        },
        {
            text: '2',
            value: 2,
            classes: 'white span-two',
            id: "2"
        },
        {
            text: '1',
            value: 1,
            classes: 'white span-two',
            id: "1"
        },
        {
            text: 'M',
            value: 0,
            classes: 'green span-two',
            id: "M"
        },
        {
            text: 'CLEAR',
            value: 'CLEAR',
            classes: 'blue span-three',
            id: "CLEAR"
        },
        {
            text: 'NEXT END',
            value: 'NEXT END',
            classes: 'blue span-three',
            id: "NEXT"
        },
    ])
    return (
        <div className = "button-group">
            { buttons.map( (button) => {
                return <button key = {button.text} id = {button.id} className = {button.classes} buttontext = {button.text} value = {button.value}  onClick = {(e) => props.handleButton(e.target)}>{button.text}</button>
            })}
        </div>
    );
}

export default ValueButtons;
