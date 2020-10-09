import React, { Component } from 'react'

const style = {
  // display: 'flex',
  // flexFlow: 'column wrap',
  // flex: '1 0 30%',
  // alignItems: 'left'


}

 export default class Login extends Component {

  render() {
    return (
      <div>
        <form style={style} onSubmit={this.props.clicked}>
          Enter user name
          <input type="text" />
          <button type="submit" >&rarr;</button>
        </form>
      </div>
    )
  }
}
