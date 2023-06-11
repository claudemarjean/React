import React, { Component } from 'react'

class SimpleComponent extends Component {
  render() {
    console.log('%c render() du composant enfant simpleComponent','color:blue;');
    return (
      <div>
        <p>
          <span className='blue'>SimpleComponent: </span>{this.props.name}
        </p>
      </div>
    )
  }
}

export default SimpleComponent