import React, { Component } from 'react';

class Clicker extends Component{
    constructor(props){
        super(props);
        this.state = { num: 1 };
        this.randomNumberGen = this.randomNumberGen.bind(this);
    }

 randomNumberGen(){
    let newNum = Math.floor(Math.random()*10) + 1;
    this.setState({ num: newNum})
 }   

    render(){
        return(
            <div>
                <h1>Number is : {this.state.num}</h1>
                {this.state.num === 7 && <h2>You Win</h2>}
                <button onClick={this.randomNumberGen}>Generate Random Number</button>
            </div>
            
        )
    }
}

export default Clicker;