import React from 'react'

export default function Popup({appState, goal}) {


    const numberArrows = ((appState.length-1) * 6) + (appState[appState.length-1].endValues.length)
    const goldPercent =  Math.round((goal / numberArrows) * 100)

    const closePopup = (button) => {
        const popup = document.getElementById('popup')
        popup.style.display = 'none';
    }


    return (
        <div id = 'popup' className="popup-container">
            <div className = "popup-box">
                <h3 className = "results-header gold">Gold Game Results</h3>
                <p><strong>Total Number of Arrows:</strong> {numberArrows}</p>
                <p><strong>Gold Game Percentage:</strong> {goldPercent}%</p>
                <button className = 'level-submit blue' onClick = {(e) => closePopup(e.target)}>Done</button>
            </div>
        </div>
    )
}
