import React, { Component } from 'react'
import './Ball.css'

class Ball extends Component {
    render() {
        return (
            <div>{
                this.props.clicked ?
                    <div className='rolling'>
                        <h3>福</h3>
                    </div> : <div className='ball'>
                        <h3>{this.props.num} </h3></div>
            }</div>

        )
    }
}

export default Ball