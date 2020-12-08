# Gold Game Scoring Application

**This application was built with React, HTML, and CSS. To run the application locally on your device, simply clone the repository and run "yarn start" in the directory containing the app on your device. It will open on Localhost:3000 by default.**

### Basic Game Play
Gold game is a training drill from my time at the Olympic Training Center. Gold game was designed to simulate finals round match play by forcing archers to shoot within a short window of time and on an alternating interval. To play the game, one must set up a 15 second timer on a loop. One group of archers will shoot during the first 15 second interval, and the other archers will shoot during the second 15 second window. This alternating sequence will continue until both groups of archers have shot 6 arrows; then arrows will be scored and the next end will commence.

### Scoring
This application is designed to score four different levels depending on the ability of the archer, and allows the user to set the number of points required to win. A typical goal score is 50 points. 

##### Beginner Level
On the beginner level, each arrow that scores 7 points or more counts as one point. Arrows that score 6 points are neutral, and score 0 points. Any arrow scoring less than 6 points subtracts one point from the score. 

##### Intermediate Level
On the intermediate level an archer's arrow must score 8 points or more to get 1 gold game point, the 7 ring is neutral, and any arrow scoring 6 or lower subtracts one point.

##### Advanced Level
This is the level of the game played by resident athletes in Chula Vista, and also the namesake of the game. To score 1 gold game point, an archer must score 9 points or higher. In other words, any arrow in the gold scores one point. The 8 ring is neutral, and anything outside the 8 ring subtracts 1 point.

##### Elite Level
This level was reserved for the most difficult training sessions. At this level an archer only gains 1 point for an arrow in the 10 ring. The 9 ring is neutral, and anything outside the gold subtracts 1 point. We would typically play to a lower goal score when scoring based on this criteria. 10 or 15 points was a sufficient goal.

### Reaching the Goal Score
Upon reaching the goal score, a popup will declare that you have one and provide your gold game percentage. This percentage is the quotient of the number of arrows shot and the final score. At an international level, a gold game percentage of 90% when scoring in Advanced mode is the threshold to be competitive. In the United States, a gold game percentage of 75-80% will land an archer close to the top of the heap.

### Other Notes
You may adjust the scoring criteria in the sidebar during the game, but not in the middle of an end. It will only adjust the scoring criteria going forward, not retroactively for ends already scored. The clear button will remove the previous arrow, and the last end button will delete the entire current end and allow editing of the previous end. The reset button clears the round completely. This app uses local browser storage to keep track of results, so closing the window will not delete the round.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.





