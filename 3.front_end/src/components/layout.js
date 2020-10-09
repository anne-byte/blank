import React, {Component} from 'react'

import Marketing from './marketing'
import Login from './login'

const styles = {
  container: {
    display: 'flex'
  },
  left: {
    border: '1px solid black',
    borderRadius: '5px',
    flex: 1,
    flexFlow: 'column wrap',
    backgroundColor: '#005ea6',
    padding: '20px',
    color: 'white',
    width: '185px',
    height: '100px'
  },
  right: {
    // border: '1px solid black',
    flex: 2,
    textAlign: 'left',
    margin: '0 auto',
    padding: '40px 80px',
    
  }
};

export default class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Unknown User'
    }
  }

   //this is a click handler for the submit button
 handleClick = (event) => {
  event.preventDefault();
  let enteredName= this.state.name;
  this.setState({
     name: enteredName
  })
}
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.left}>
          <Login name={this.state.name} clicked={this.handleClick}
          />
        </div>
        <div style={styles.right}>
          <Marketing
            name={this.state.name} />
        </div>
      </div>
    )
  }
}
