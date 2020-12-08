import React, {useState,useEffect} from 'react';
import './App.css';
import ValueButtons from './components/ValueButtons';
import ScoreDisplay from './components/ScoreDisplay';
import SelectLevel from './components/SelectLevel';
import LevelRules from './components/LevelRules';
import SetGoal from './components/SetGoal';
import Popup from './components/Popup';



function App() {
  //Initial states and globals. Later will incorporate a button in UI for changing level
  const [completed, setCompleted] = useState(false)
  const [goal, setGoal] = useState(0)
  const[rules, setRules] = useState(
    [
      {
        neutral: 0,
        addOne: 0,
        subOne: 0
      }
    ]
  )
  const [level, setLevel] = useState('')
  const [appState, setAppState] = useState(
    [
      {
        displayText: [],
        endValues: [],
        endScore: 0,
        totalScore: 0
      }
    ]);
    let newState = []
    const xArray = []
    const mArray = []
  
  //Functions related to scoring
  //--------------------------------------------------------------------------------------
  

useEffect(() => {
  const storedGoal = localStorage.getItem('goal')
  const storedState = JSON.parse(localStorage.getItem('appState'))
  const storedLevel = localStorage.getItem('level');
  const storedCompleted = JSON.parse(localStorage.getItem('completed'))

  const newCompleted = storedCompleted ? storedCompleted : completed;
  setCompleted(newCompleted)
  
  const newLevel = storedLevel ? storedLevel : 'Advanced';
  setLevel(newLevel);

  const newState = storedState ? storedState : appState;
  setAppState(newState)

  const newGoal = storedGoal ? storedGoal : 0
  setGoal(Number(newGoal))
}, [])


useEffect(() => {
  let options = document.getElementsByName('level') 
  for (var i=0; i<options.length; i++) {
    if(options[i].value === level) {
        options[i].checked = "checked"
    } else {
      continue
    }
  newRules(level)
  
  }
}, [level]);

useEffect(() => {
  const clearButton = document.getElementById('CLEAR')
  const nextButton = document.getElementById('NEXT')
  const changeButton = document.getElementById('changeLevel')
  const lastButton = document.getElementById('last')
  const resetButton = document.getElementById('reset')
  if (goal === 0) {
    clearButton.disabled = true;
    nextButton.disabled = true;
    resetButton.disabled = true;
    lastButton.disabled = true;
  } else {
    if (appState[appState.length-1].endValues.length === 0) {
      clearButton.disabled = true;
    } else {
      clearButton.disabled = false;
    }
    if (appState[appState.length-1].endValues.length === 6) {
      nextButton.disabled = false
    } else {
      nextButton.disabled = true;
    }
    if (appState[appState.length-1].endValues.length === 0) {
      changeButton.disabled = false;
    } else {
      changeButton.disabled = true;
    }
    if (appState.length > 1) {
      lastButton.disabled = false;
    } else {
      lastButton.disabled = true;
    }
    if (appState.length === 1 && appState[0].endValues.length === 0 && localStorage.length === 0) {
      resetButton.disabled = true;
    } else {
      resetButton.disabled = false;
    }
    if (appState[appState.length-1].totalScore === goal && goal !== 0 && completed === false) {
      const popup = document.getElementById('popup')
      popup.style.display = 'flex'
      setCompleted(true)
      localStorage.setItem('completed', true)
    } else {
      return
    }
  }
}, [appState, goal, completed])

useEffect (() => {
  const goalButton = document.getElementsByClassName('goal-button')
  if (goal !== 0) {
    goalButton[0].disabled = true;
  } else {
    goalButton[0].disabled = false;
  }
}, [goal])




  //Keeps the score list scrolled to the current end
  function updateScroll () {
    const element = document.getElementById('score-display');
    element.scrollTop = (element.scrollHeight);
  }

  function sortDisplayText() {
    for (var i = 0; i< appState[appState.length-1].displayText.length; i++) {
      if (appState[appState.length-1].displayText[i] === 'X') {
        appState[appState.length-1].displayText.splice(i,1)
        xArray.push('X')
        i--
      } else if (appState[appState.length-1].displayText[i] === 'M') {
        appState[appState.length-1].displayText.splice(i,1)
        i--
        mArray.push('M')
      } else {
        continue
      }
    }
    appState[appState.length-1].displayText.sort((a,b) => parseInt(b)-parseInt(a))
    appState[appState.length-1].displayText = xArray.concat(appState[appState.length-1].displayText, mArray)
  }

  //Decrements both total score and end score
  function decrementScore () {
    newState[newState.length-1].endScore--
    newState[newState.length-1].totalScore--
  }

  //Increments total score and end score
  function incrementScore() {
    newState[newState.length-1].endScore++
    newState[newState.length-1].totalScore++
  } 

  //Function to change increment and decrement end score and total score based on either a value input or a value deleted. 
  function handleScoreChange (level, value, opt1, opt2) {
    switch (level) {
      case 'Beginner':
        if (value > 6) {
          opt1()
        } else if (value === 6) {
          break
        } else if (value < 6) {
          opt2()
        }
        break;
      case 'Intermediate':
        if (value > 7) {
          opt1()
        } else if (value === 7) {
          break
        } else if (value < 7) {
          opt2()
        }
        break;
      case 'Advanced':
        if (value > 8) {
          opt1()
        } else if (value === 8) {
          break
        } else if (value < 8) {
          opt2()
        }
        break;
      case 'Elite':
        if (value > 9) {
          opt1()
        } else if (value === 9) {
          break
        } else if (value < 9) {
          opt2()
        }
        break;
      default:
        return
    }
  }

  //Function for handling all inputs from ValueButton buttons
  const handleButton = (e) => {
    //Code that runs when next end button is pressed
    if (e.value === "NEXT END"){
      //sort previous end to be displayed in descending order
      sortDisplayText()
      newState = [...appState]
      const lastTotal = newState[newState.length-1].totalScore
      const nextEnd = {displayText: [], endValues: [], endScore: 0, totalScore: lastTotal}
      newState.push(nextEnd)
      setAppState(newState)
      localStorage.setItem('appState', JSON.stringify(newState))
      

      //Code that runs when an arrow value is pressed
    } else if (!isNaN(e.value)) {
      newState = [...appState]
      updateScroll()
      if (newState[newState.length-1].endValues.length < 6) {
        newState[newState.length-1].endValues.push(parseInt(e.value, 10))
        newState[newState.length-1].displayText.push(e.innerHTML)
        handleScoreChange(level, e.value, incrementScore, decrementScore)
        setAppState(newState)
        localStorage.setItem('appState', JSON.stringify(newState))
      } else {
        return
      }

      //Code that runs when clear is pressed
    } else if (e.value === 'CLEAR') {
      newState = [...appState]
      const deletedValue = newState[newState.length-1].endValues.pop()
      newState[newState.length-1].displayText.pop()
      handleScoreChange(level, deletedValue, decrementScore, incrementScore)
      setAppState(newState)
      localStorage.setItem('appState', JSON.stringify(newState))
    }
  }

  //Functions for the control panel
  //----------------------------------------------------------------------------------------

  //Updates the control panel rules section
  const newRules =  (level) => {
    const newRules = [...rules]
    if (level === 'Beginner') {
        newRules[0].neutral = 6

    } else if (level === 'Intermediate') {
        newRules[0].neutral = 7
      

    } else if (level === 'Advanced') {
        newRules[0].neutral = 8

    } else if (level === 'Elite') {
        newRules[0].neutral = 9

    }
    newRules[0].addOne = newRules[0].neutral + 1
    newRules[0].subOne = newRules[0].neutral - 1
    setRules(newRules)
  }

  //Updates the level when a new one is selected
  const handleLevel = (e) => {
    let newLevel = ''
    e.preventDefault()
    if (appState[appState.length-1].endValues.length === 0) {
      let options = document.getElementsByName('level')
      for (var i = 0; i<options.length; i++) {
        if (options[i].checked) {
          newLevel = options[i].value
          setLevel(newLevel)
          localStorage.setItem('level', newLevel)
          break
        } else {
          continue
        }
      }
    } else {
      return
    }
  }

  //Deletes current end and allows modifications to previous end
  const lastEnd = () => {
    if (appState.length > 1) {
      newState = [...appState]
      newState.pop()
      setAppState(newState)
    } else {
      return
    }
  }

  //Resets appState
  const resetState = () => {
    setAppState(
      [
        {
          displayText: [],
          endValues: [],
          endScore: 0,
          totalScore: 0
        }
      ]);
    setCompleted(false);
    setGoal(0);
    setLevel('Advanced');
    document.getElementById('goal-input').value = '';
    localStorage.clear();
  }
  
  const handleGoal = () => {
    const goalInput = document.getElementById('goal-input').value
    localStorage.setItem('goal', goalInput)
    setGoal(Number(goalInput))

  }



  
  return (
    <>
      <div className = "popup">
        <Popup appState = {appState} goal = {goal} />
      </div>
      <div className="App">
        <div className = "scorecard">
          <ScoreDisplay appState = {appState} />
          <ValueButtons handleButton = {handleButton} />
        </div>
        <div className = "control-panel">
          <h3 className = "control-title">Control Panel</h3>
          <SetGoal handleGoal = {handleGoal} />
          <LevelRules level = {level} rules = {rules} goal = {goal} />
          <SelectLevel handleLevel = {handleLevel} />

          <div className = "control-buttons">
            <button className = "level-submit blue" id = 'last' onClick = {lastEnd} >Last End</button>
            <button className = "level-submit blue mb-5" id = 'reset' onClick = {resetState} >Reset</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;


/*
Things to add:

-grey out buttons when they are not a valid action


*/
