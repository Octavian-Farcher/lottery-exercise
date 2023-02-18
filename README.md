# This project is my first in react . 
It contains 3 components, the first component is Ball.js which is a stateless component but gets states as props from the parent component.It returns a div for each ball.
The parent component is Lottery.js which uses state with 2 properties that are passed inside the child component.In this component I also have 3 functions onClick, generateBalls, generateNumber. 
In generateBalls we generate as much Ball.js components as the value of numBalls which is passed from App component as prop. 
The function generateNumber generates the random numbers which are inserted inside the nums state property, and this function is recalled inside the onClick function which also changes the clicked state property to true for 1.5 s.
The App component is the component that returns the Lottery twice with different props.
