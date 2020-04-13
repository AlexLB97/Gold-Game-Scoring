import React from 'react'

export default function SetGoal(props) {
    return (
        <div className = 'goal-container'>
            <label htmlFor="goal">Set Goal Score:</label>
            <input type = "number" id = "goal-input" name = "goal" />
            <button className = "blue goal-button" onClick = {() => props.handleGoal()}>Set Goal</button>
        </div>
    )
}
