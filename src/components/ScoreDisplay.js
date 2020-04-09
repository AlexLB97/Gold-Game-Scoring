import React from 'react';
import EndItem from './EndItem';
import EndScoreItem from './EndScoreItem';
import TotalScoreItem from './TotalScoreItem';
import uuidv4 from 'uuid/v4';

export default function ScoreDisplay(props) {
    return (
        <>
            <div className = "display-container">
                <h3 className = "label span-six">Arrow Values</h3>
                <h3 className = "label span-two">End Score</h3>
                <h3 className = "label span-two">Total Score</h3>
            </div>
            <div id = "score-display" className = "score-display">
                <div className = "arrow-value-container span-six">
                    {props.appState.map(end => {
                        return <EndItem key = {uuidv4()} arrowValues = {end.endValues} />
                    })}
                </div>
                <div className = "end-score-container span-two">
                    {props.appState.map(end => {
                        return <EndScoreItem key = {uuidv4()} endScore = {end.endScore} />
                    })}
                </div>
                <div className = "total-score-container span-two">
                    {props.appState.map( end => {
                        return <TotalScoreItem key = {uuidv4()} totalScore = {end.totalScore} />
                    })}
                </div>
            </div>
        </>
    )
}

/*
For each end object in the appState, I need a div containing the endvalues, the end score, and the total score.
*/