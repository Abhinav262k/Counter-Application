import React, { Component } from 'react'

export default class CounterClass extends Component {

    constructor(props){
        super(props);
        this.state={
            counter:0
        }

    }


  render() {
    return (
      <div class="ClS">CounterClass Class Component
        <p>You Taped {this.state.counter} times</p>
          <button 
               style={{
                backgroundColor:'tan',
                color:'black',
                border:'1px solid green',
                padding:'10px',
                margin:'10px',
              }}

          onClick={()=>this.setState({
            counter:this.state.counter+1
            

          })}>Tap Here</button>
      </div>
    )
  }
}
