// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor(){
    super()
    this.state = {
      name: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({name: ""})
  }

  render() {
    return(
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" value = {this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}


export default BandInput
// export default BandInput
