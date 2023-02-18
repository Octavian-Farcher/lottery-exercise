import React, { Component } from 'react'
import Ball from './Ball'
import './Lottery.css'

class Lottery extends Component {

    constructor(props) {
        super(props);
        this.state = { nums: [1, 2, 3, 4, 5, 6], clicked: false }
        this.generateBalls = this.generateBalls.bind(this);
        this.generateNumber = this.generateNumber.bind(this);
        this.onClick = this.onClick.bind(this);

    }
    onClick(e) {
        this.setState({ clicked: true })
        setTimeout(() => this.setState({ nums: this.generateNumber(this.props.maxNum, this.props.numBalls), clicked: false })
            , 1500)
    }

    generateBalls(num) {
        let ballsArray = [];
        for (let i = 1; i <= num; i++) {
            ballsArray.push(<Ball num={this.state.nums[i - 1]} clicked={this.state.clicked} />)
        }
        return [...ballsArray]
    }

    // The function that generates the balls random

    generateNumber(max, balls) {
        let randomArray = [];
        let array = [];
        let randomNumber;

        for (let i = 1; i <= max; i++) {
            array.push(i);
        }

        for (let i = 1; i <= balls; i++) {

            randomNumber = [Math.floor(Math.random() * array.length + 1)]
            randomArray.push(randomNumber)
        }
        return randomArray

    }
    render() {

        //The function that generates the number of balls inside the lottery component



        return (
            <div className='Lottery' >
                <h1>{this.props.title}</h1>
                <div className='Lottery-weekly'>
                    {this.generateBalls(this.props.numBalls)}
                </div>
                {this.state.clicked ? < button disabled onClick={this.onClick}>Generating... </button>
                    : <button onClick={this.onClick}>Generate new numbers!</button>}

            </div>
        )
    }
}


export default Lottery