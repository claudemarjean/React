import React, { Component } from 'react'

class SimpleComponent extends Component {
  render() {
    console.log('%c render() du composant enfant simpleComponent','color:yellow;');
    return (
      <div>
        SimpleComponent
      </div>
    )
  }
}

export default SimpleComponent