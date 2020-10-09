import React, { Component } from 'react'

const styles = {
  name: {
    fontFamily: 'Sans serif',
    fontSize: '16px'
  }
}
export default class Marketing extends Component {
  render() {
    return (
      <div name={this.props.name}>Hello, {this.props.name}.
        <div style = {styles.name}>Send money to friends and family today.</div></div>
    )
  }
}
