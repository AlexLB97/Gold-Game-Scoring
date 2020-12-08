import React from 'react';
import uuidv4 from 'uuid/v4';

export default function EndItem(props) {
    return (
        
        <div className = "end-block">
            {props.displayText.map((score) => {
                return <p key = {uuidv4()}>{score}</p>
            })}
        </div>

    )
}
