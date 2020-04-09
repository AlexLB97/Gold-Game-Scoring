import React, {useState} from 'react';
import './App.css';
import ValueButtons from './components/ValueButtons';
import ScoreDisplay from './components/ScoreDisplay';


function App() {
  //Initial state. Later will incorporate a button in UI for changing level
  const [level, setLevel] = useState('expert')
  const [appState, setAppState] = useState(
    [
      {
        displayText: [],
        endValues: [],
        endScore: 0,
        totalScore: 0
      }
    ]);
  
  function updateScroll () {
    const element = document.getElementById('score-display');
    element.scrollTop = (element.scrollHeight);
  }

    //Initialize newState
  let newState = []

  function decrementScore () {
    newState[newState.length-1].endScore--
    newState[newState.length-1].totalScore--
  }

  function incrementScore() {
    newState[newState.length-1].endScore++
    newState[newState.length-1].totalScore++
  }
  
  //Function to handle any button that is clicked. This could probably be broken down into
  //small functions in the future.
  const handleButton = (e) => {
    //Code that runs when next end button is pressed
    if (e.value === "NEXT END"){
      updateScroll()
      //sort previous end to be displayed in descending order
      appState[appState.length-1].endValues.sort((a,b) => b-a)
      newState = [...appState]
      const lastTotal = newState[newState.length-1].totalScore
      const nextEnd = {displayText: [], endValues: [], endScore: 0, totalScore: lastTotal ,}
      newState.push(nextEnd)
      setAppState(newState)
      updateScroll()

      //Code that runs when an arrow value is pressed
    } else if (!isNaN(e.value)) {
      newState = [...appState]
      if (newState[newState.length-1].endValues.length < 6) {
        newState[newState.length-1].endValues.push(parseInt(e.value, 10))
        newState[newState.length-1].displayText.push(e.innerHTML)
        switch (level) {
          case 'beginner':
            if (e.value > 6) {
              newState[newState.length-1].endScore++
              newState[newState.length-1].totalScore++
            } else if (e.value === 6) {
              break
            } else if (e.value < 6) {
              newState[newState.length-1].endScore--
              newState[newState.length-1].totalScore--
            }
            break;
          case 'intermediate':
            if (e.value > 7) {
              newState[newState.length-1].endScore++
              newState[newState.length-1].totalScore++
            } else if (e.value === 7) {
              break
            } else if (e.value < 7) {
              newState[newState.length-1].endScore--
              newState[newState.length-1].totalScore--
            }
            break;
          case 'advanced':
            if (e.value > 8) {
              newState[newState.length-1].endScore++
              newState[newState.length-1].totalScore++
            } else if (e.value === 8) {
              break
            } else if (e.value < 8) {
              newState[newState.length-1].endScore--
              newState[newState.length-1].totalScore--
            }
            break;
          case 'expert':
            if (e.value > 9) {
              newState[newState.length-1].endScore++
              newState[newState.length-1].totalScore++
            } else if (e.value === 9) {
              break
            } else if (e.value < 9) {
              newState[newState.length-1].endScore--
              newState[newState.length-1].totalScore--
            }
            break;
          default:
            return
        }
        setAppState(newState)
      } else {
        return
      }

      //Code that runs when clear is pressed
    } else if (e.value === 'CLEAR') {
      newState = [...appState]
      const deletedValue = newState[newState.length-1].endValues.pop()
      newState[newState.length-1].displayText.pop()
      switch (level) {
        case 'beginner':
          if (deletedValue > 6) {
            newState[newState.length-1].endScore--
            newState[newState.length-1].totalScore--
          } else if (deletedValue === 6) {
            break
          } else if (deletedValue < 6) {
            newState[newState.length-1].endScore++
            newState[newState.length-1].totalScore++
          }
          break;
        case 'intermediate':
          if (deletedValue > 7) {
            newState[newState.length-1].endScore--
            newState[newState.length-1].totalScore--
          } else if (deletedValue === 7) {
            break
          } else if (deletedValue < 7) {
            newState[newState.length-1].endScore++
            newState[newState.length-1].totalScore++
          }
          break;
        case 'advanced':
          if (deletedValue > 8) {
            newState[newState.length-1].endScore--
            newState[newState.length-1].totalScore--
          } else if (deletedValue === 8) {
            break
          } else if (deletedValue < 8) {
            newState[newState.length-1].endScore++
            newState[newState.length-1].totalScore++
          }
          break;
        case 'expert':
          if (deletedValue > 9) {
            newState[newState.length-1].endScore--
            newState[newState.length-1].totalScore--
          } else if (deletedValue === 9) {
            break
          } else if (deletedValue < 9) {
            newState[newState.length-1].endScore++
            newState[newState.length-1].totalScore++
          }
          break;
        default:
          return
      }
      setAppState(newState)
    }
  }

  
  return (
    <div className="App">
      <div className = "scorecard">
        <ScoreDisplay appState = {appState} />
        <ValueButtons handleButton = {handleButton} />
      </div>
    </div>
  );
}

export default App;


/*
Gold game scoring app

Key functionality:
  -choose level and format
    -beginner, intermediate, advanced and expert levels
    -choose 3, 6, or 9 arrow ends

  -input arrow values and have them displayed in 'scorecard' section, along with
  end points and total points
    -app must only allow user to input the correct number of arrows each end
    -backspace button to modify arrow values before submitting end
    -next end button to move to the next line of scoring
    -button for each score value: m-10.
    -reset button to start over completely

  -scoring levels
    -beginner mode: 
      -7 ring and in is 1 point, 6 ring is neutral, 5 ring and out is -1
    -intermediate mode
      -8 ring and in is 1 point, 7 ring is neutral, 8 ring and out is -1
    -advanced mode
      -9 ring and in is 1 point, 8 is neutral, 7 and out -1
    -expert mode
      -10 ring is one point, 9 is neutral, 8 ring and out is -1


App Design

  Components
    App container
      -parent container for entire app

    Scoring interface
      -contains the scoring buttons and scorecard
      Arrow values
        -the group of buttons including m-X, backspace, next end, and reset
      Scorecard
        -lists the arrow values for each end, their corresponding gold game score,
         and the total score for the round
      
    Settings interface
      -sidebar to the scoring interface

      Select level component
        -radio buttons to choose between beginner, intermediate, advanced, and expert

      Choose format component
        -radio buttons for 3, 6, or 9 arrow ends

      Explanation section:
        -explains the rules for the level they have selected


Pseuocode for components

  App container
    Styles:
      -center the app in the screen
      -set the display to flex
      -set flex direction to row
    Global state
      -end arrow values and the resulting gold game score are stored in global state
      -each end is a new object in the state array
    Logic
      -



*/
