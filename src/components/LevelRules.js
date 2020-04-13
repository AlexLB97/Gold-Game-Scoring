import React from 'react'







export default function LevelRules(props) {
    const { neutral, addOne, subOne} = props.rules[0];
    
    return (
        <div className = "rules-container">
            <h3 className = "rules-title">Rules</h3>
            <p> <strong>Current goal:</strong> {props.goal}</p>
            <p> <strong>Current level:</strong> {props.level}</p>
            <p> <strong>To score 1 point:</strong> Hit the {addOne} ring or higher.</p>
            <p> <strong>Neutral ring:</strong> {neutral}</p>
            <p> <strong>Lose 1 point:</strong> Hit the {subOne} ring or lower.</p>
        </div>
    )
}
