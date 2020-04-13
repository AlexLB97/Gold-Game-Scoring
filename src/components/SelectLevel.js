import React from 'react';



export default function SelectLevel(props) {
    return (
        <div className = "form-container">
            <form className = "level-form">     
                <label className = "form-label" htmlFor = "levels">Choose your level:</label><br/>
                <div className = "form-option">
                    <input type = "radio" id = "beginner" name = "level" value = "Beginner" />
                    <label htmlFor = "beginner">Beginner</label>
                </div>
                <div className = "form-option">
                    <input type = "radio" id = "intermediate" name = "level" value = "Intermediate" />
                    <label htmlFor = "intermediate">Intermediate</label>
                </div>
                <div className = "form-option">
                    <input type = "radio" id = "advanced" name = "level" value = "Advanced" />
                    <label htmlFor = "advanced">Advanced</label>
                </div>
                <div className = "form-option">
                    <input type = "radio" id = "elite" name = "level" value = "Elite" />
                    <label htmlFor = "elite">Elite</label>
                </div>
                <button className = "level-submit blue" id = "changeLevel" onClick ={(e) => props.handleLevel(e)}>Change Level</button>
            </form>
        </div>
    )
}
